const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

/**
 * Authentication Middleware
 * Verifies JWT tokens and attaches user data to the request object.
 * Handles both registered users and visitor accounts.
 */
const authenticate = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        status: "error",
        message: "Authentication required",
      });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Handle different authentication types
    if (decoded.type === "visitor") {
      // Visitor authentication - fetch minimal data
      const visitor = await prisma.visitor.findUnique({
        where: { id: decoded.sub },
        select: {
          id: true,
          deviceId: true,
        },
      });

      if (!visitor) {
        return res.status(401).json({
          status: "error",
          message: "Visitor account not found",
        });
      }

      // Update last seen silently without blocking the request
      prisma.visitor
        .update({
          where: { id: visitor.id },
          data: { lastSeen: new Date() },
        })
        .catch((err) =>
          console.error("Failed to update visitor lastSeen:", err)
        );

      // Attach visitor data to request
      req.visitor = visitor;
      req.isVisitor = true;
      req.auth = { id: visitor.id, type: "visitor" };
    } else {
      // Regular user authentication - fetch minimal data
      const user = await prisma.user.findUnique({
        where: { id: decoded.sub },
        select: {
          id: true,
          userName: true,
          email: true,
          role: true,
        },
      });

      if (!user) {
        return res.status(401).json({
          status: "error",
          message: "User account not found",
        });
      }

      // Attach user data to request
      req.user = user;
      req.isVisitor = false;
      req.auth = { id: user.id, type: "user", role: user.role };
    }

    next();
  } catch (error) {
    // Handle specific JWT errors
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        status: "error",
        message: "Token has expired",
      });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        status: "error",
        message: "Invalid token",
      });
    }

    return res.status(401).json({
      status: "error",
      message: "Authentication failed",
    });
  }
};

const socketAuth = async (socket, next) => {
  try {
    const token = socket.handshake.auth.token || socket.handshake.query.token;
    console.log(socket.handshake);
    if (!token) return next(new Error("Authentication error"));
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.sub } });

    if (!user) return next(new Error("User not found"));

    socket.user = user;
    next();
  } catch (error) {
    next(new Error("Socket Authentication error"));
  }
};

/**
 * Role-based Access Control Middleware
 * Restricts access to routes based on user roles
 * roles - Allowed roles for the route
 */
const restrictTo = (...roles) => {
  return (req, res, next) => {
    // if (req.isVisitor) {
    //   return res.status(403).json({
    //     status: "error",
    //     message: "Visitors cannot access this resource",
    //   });
    // }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "error",
        message: "You do not have permission to perform this action",
      });
    }

    next();
  };
};

/**
 * Visitor Access Middleware
 *
 * Ensures a route can only be accessed by visitors
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const visitorOnly = (req, res, next) => {
  if (!req.isVisitor) {
    return res.status(403).json({
      status: "error",
      message: "This route is only for visitor accounts",
    });
  }
  next();
};

/**
 * Device and FCM Token Update Middleware
 * Updates device ID and FCM token for users/visitors when provided
 * Should be used after authentication middleware
 */
const updateDeviceInfo = async (req, res, next) => {
  try {
    const { deviceId, fcmToken } = req.body;

    // Skip if no device info provided
    if (!deviceId && !fcmToken) {
      return next();
    }

    // Prepare update data
    const updateData = {};
    if (deviceId) updateData.deviceId = deviceId;
    if (fcmToken) updateData.fcmToken = fcmToken;

    // Update device info based on auth type
    if (req.isVisitor) {
      await prisma.visitor.update({
        where: { id: req.visitor.id },
        data: updateData,
      });

      // Update the request object with new data
      if (deviceId) req.visitor.deviceId = deviceId;
      if (fcmToken) req.visitor.fcmToken = fcmToken;
    } else {
      await prisma.user.update({
        where: { id: req.user.id },
        data: updateData,
      });

      // Update the request object with new data
      if (deviceId) req.user.deviceId = deviceId;
      if (fcmToken) req.user.fcmToken = fcmToken;
    }

    next();
  } catch (error) {
    // Don't fail the request if device info update fails
    console.error("Failed to update device info:", error);
    next();
  }
};

module.exports = {
  authenticate,
  restrictTo,
  visitorOnly,
  updateDeviceInfo,
  socketAuth,
};
