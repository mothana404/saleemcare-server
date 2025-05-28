const Joi = require("joi");

/**
 * patient registration validation schema
 */
const registerValidation = Joi.object({
  userName: Joi.string().min(3).max(30).required().messages({
    "string.min": "Username must be at least 3 characters",
    "string.max": "Username cannot exceed 30 characters",
    "any.required": "Username is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters",
    "any.required": "Password is required",
  }),
  deviceToken: Joi.string().allow("", null),
  fcmToken: Joi.string().allow("", null),
});

/**
 * User login validation schema
 */
const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
  fcmToken: Joi.string().allow("", null),
});

/**
 * Visitor authentication validation schema
 */
const visitorSchema = Joi.object({
  deviceId: Joi.string().required().messages({
    "any.required": "Device identifier is required",
  }),
  fcmToken: Joi.string().allow("", null),
});

module.exports = {
  registerValidation,
  loginSchema,
  visitorSchema,
};
