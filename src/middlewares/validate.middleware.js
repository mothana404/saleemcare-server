const { failedResponse } = require("../utils/response");

const validate = (schema) => {
  return (req, res, next) => {
    if (!schema || typeof schema.validate !== "function") {
      console.error("Validation middleware: schema is invalid or missing.");
      failedResponse(
        res,
        500,
        null,
        "Validation middleware: schema is invalid or missing."
      );
    }

    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false,
      stripUnknown: true,
    });

    if (error) {
      if (process.env.NODE_ENV === "development") {
        console.log("Validation Error:", error.details);
      }
      failedResponse(
        res,
        400,
        error.details.map((detail) => detail.message),
        "Validation failed"
      );
    }

    req.body = value;
    next();
  };
};

module.exports = validate;
