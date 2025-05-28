const express = require("express");
const authController = require("../../controllers/patient/auth.controller");
const validate = require("../../middlewares/validate.middleware");
const {
  registerValidation,
  loginSchema,
  visitorSchema,
} = require("../../validations/auth/auth.validation");
const { authenticate } = require("../../middlewares/auth");

const router = express.Router();

router.post(
  "/register",
  validate(registerValidation),
  authController.registerHandler
);

router.post("/login", validate(loginSchema), authController.loginHandler);

router.post(
  "/visitor",
  validate(visitorSchema),
  authController.visitorRegisterHandler
);

router.put(
  "/fcm-token",
  authenticate,
//   validate(fcmTokenSchema),
  authController.updateFcmTokenHandler
);

module.exports = router;
