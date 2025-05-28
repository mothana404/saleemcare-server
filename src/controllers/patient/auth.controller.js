const bcrypt = require("bcryptjs");
const prisma = require("../../config/prisma");
const {
  generateToken,
  generateVisitorToken,
} = require("../../services/jwt.service");
const { successResponse, failedResponse } = require("../../utils/response");
const { UserRole, AccountType } = require("../../generated/prisma");

/**
 * Patient Registration Handler
 * This handler manages the registration process specifically for PATIENT users.
 * Registers a new patient user with email, username, and password.
 * FCM token is optional but recommended for push notifications.
 */
exports.registerHandler = async (req, res, next) => {
  try {
    const { userName, email, password, fcmToken, deviceToken } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { userName }],
      },
    });

    if (existingUser) {
      failedResponse(res, 409, "Email or username already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        accountType: AccountType.REGISTERED,
        userName,
        email,
        password: hashedPassword,
        deviceId: deviceToken,
        role: UserRole.PATIENT,
        fcmToken,
      },
    });

    const token = generateToken(user.id, user.role);

    const { password: _, ...userData } = user;

    return successResponse(
      res,
      201,
      { user: userData, token },
      "Registered successfully"
    );
  } catch (error) {
    next(error);
  }
};

/**
 * User Login Handler
 * This handler manages the login process specifically for PATIENT users.
 * Authenticates a user by email and password.
 * Returns user data and authentication token.
 */
exports.loginHandler = async (req, res, next) => {
  try {
    const { email, password, fcmToken } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        userName: true,
        email: true,
        password: true,
        role: true,
      },
    });

    if (!user) {
      failedResponse(res, 401, null, "Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      failedResponse(res, 401, isPasswordValid, "Invalid email or password");
    }

    if (fcmToken) {
      await prisma.user.update({
        where: { id: user.id },
        data: { fcmToken: fcmToken },
      });
    }

    const token = generateToken(user.id, user.role);

    const { password: _, ...userData } = user;

    return successResponse(
      res,
      200,
      {
        user: userData,
        token,
      },
      "Login successful"
    );
  } catch (error) {
    next(error);
  }
};

/**
 * Visitor Authentication Handler
 * Creates or retrieves a visitor account based on device ID.
 * Allows users to access the app without registration.
 */
exports.visitorRegisterHandler = async (req, res, next) => {
  try {
    const { deviceId, fcmToken } = req.body;

    if (!deviceId) {
      failedResponse(res, 400, null, "Device identifier is required");
    }

    let visitor = await prisma.user.findUnique({
      where: { deviceId },
    });

    let isNewVisitor = false;

    if (!visitor) {
      isNewVisitor = true;

      visitor = await prisma.user.create({
        data: {
          deviceId,
          role: UserRole.VISITOR,
          fcmToken,
          lastSeen: new Date(),
        },
      });
    } else {
      // Update existing visitor with latest FCM token and last seen
      const updateData = {
        lastSeen: new Date(),
        visitCount: visitor.visitCount++,
      };
      if (fcmToken) updateData.fcmToken = fcmToken;

      visitor = await prisma.visitor.update({
        where: { deviceId },
        data: updateData,
      });
    }

    // Generate visitor token with device ID included
    const token = generateVisitorToken(visitor.id, deviceId);

    return successResponse(
      res,
      200,
      {
        user: {
          id: visitor.id,
          deviceId: visitor.deviceId,
        },
        token,
        isNewVisitor,
      },
      "Visitor authenticated"
    );
  } catch (error) {
    next(error);
  }
};

/**
 * FCM Token Update Handler
 * Dedicated endpoint to update FCM tokens for push notifications
 * Can be called whenever the app receives a new FCM token
 */
exports.updateFcmTokenHandler = async (req, res, next) => {
  try {
    const { fcmToken } = req.body;

    if (!fcmToken) {
      failedResponse(res, 400, null, "FCM token is required");
    }

    if (req.isVisitor) {
      await prisma.user.update({
        where: { id: req.user.id },
        data: { fcmToken },
      });
    }

    return successResponse(res, 200, null, "FCM token updated successfully");
  } catch (error) {
    next(error);
  }
};
