const redisService = require('../services/redis.service');

/**
 * Rate limiting middleware
 * @param {number} maxRequests - Maximum requests allowed in the time window
 * @param {number} windowMs - Time window in milliseconds
 * @param {string} keyPrefix - Prefix for the Redis key (default: 'ratelimit')
 * @param {function} keyGenerator - Function to generate the rate limit key (default: IP address)
 */
const rateLimit = (maxRequests = 100, windowMs = 60000, keyPrefix = 'ratelimit', keyGenerator = null) => {
  const windowSeconds = Math.ceil(windowMs / 1000);
  
  return async (req, res, next) => {
    try {
      // Generate the rate limit key
      const generateKey = keyGenerator || ((req) => {
        // Default to using IP address
        const ip = req.ip || 
                   req.headers['x-forwarded-for'] || 
                   req.connection.remoteAddress ||
                   'unknown';
                   
        return `${keyPrefix}:${ip}`;
      });
      
      const key = generateKey(req);
      
      // Increment the counter for this IP
      const count = await redisService.incrementApiCounter(key, windowSeconds);
      
      // Set rate limit headers
      res.setHeader('X-RateLimit-Limit', maxRequests);
      res.setHeader('X-RateLimit-Remaining', Math.max(0, maxRequests - count));
      
      // If rate limit exceeded
      if (count > maxRequests) {
        return res.status(429).json({
          success: false,
          message: 'Too many requests, please try again later.',
          retryAfter: windowSeconds
        });
      }
      
      next();
    } catch (error) {
      console.error('Rate limit error:', error);
      // Continue without rate limiting in case of errors
      next();
    }
  };
};

/**
 * User-based rate limiting middleware (requires authentication)
 * @param {number} maxRequests - Maximum requests allowed in the time window
 * @param {number} windowMs - Time window in milliseconds
 */
const userRateLimit = (maxRequests = 100, windowMs = 60000) => {
  return rateLimit(
    maxRequests, 
    windowMs, 
    'ratelimit:user', 
    (req) => `ratelimit:user:${req.user?.id || 'anonymous'}`
  );
};

/**
 * IP-based rate limiting middleware specifically for authentication attempts
 * @param {number} maxRequests - Maximum authentication attempts allowed
 * @param {number} windowMs - Time window in milliseconds
 */
const authRateLimit = (maxRequests = 5, windowMs = 300000) => {
  return rateLimit(maxRequests, windowMs, 'ratelimit:auth');
};

module.exports = {
  rateLimit,
  userRateLimit,
  authRateLimit
};