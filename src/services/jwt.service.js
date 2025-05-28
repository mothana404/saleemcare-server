const jwt = require("jsonwebtoken");

const generateToken = (userId, role) => {
  return jwt.sign(
    {
      sub: userId,
      type: "user",
      role,
      iat: Math.floor(Date.now() / 1000),
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "180d" }
  );
};

const generateVisitorToken = (visitorId, deviceId) => {
  return jwt.sign(
    {
      sub: visitorId,
      type: "visitor",
      deviceId,
      iat: Math.floor(Date.now() / 1000),
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.VISITOR_TOKEN_EXPIRES_IN || "150d" }
  );
};

module.exports = {
  generateToken,
  generateVisitorToken,
};
