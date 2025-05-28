const successResponse = (res, statusCode, data, message = 'Success') => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

const failedResponse = (res, statusCode, error = null, message = 'Failed') => {
  return res.status(statusCode).json({
    success: false,
    message,
    error
  });
};

module.exports = {
  successResponse,
  failedResponse
};
