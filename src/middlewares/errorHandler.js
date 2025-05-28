const { failedResponse } = require("../utils/response");

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  console.log(err);
  if (process.env.NODE_ENV === "development") {
    failedResponse(res, 500, err);
  } else {
    if (err.isOperational) {
      failedResponse(res, 500, err);
    } else {
      console.error("ERROR", err);
      failedResponse(res, 500, err, "Something went wrong!");
    }
  }
};

module.exports = errorHandler;
