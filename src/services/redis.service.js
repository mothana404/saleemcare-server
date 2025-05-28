const Redis = require('ioredis');

let client;

const connectRedis = () => {
  if (client) return client;
  
  try {
    client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: process.env.REDIS_PORT || 6379,
      password: process.env.REDIS_PASSWORD || '',
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
      }
    });

    client.on('connect', () => {
      console.log('Redis client connected');
    });

    client.on('error', (err) => {
      console.error('Redis client error:', err);
    });

    return client;
  } catch (error) {
    console.error('Redis connection error:', error);
    throw error;
  }
};

module.exports = {
  getClient: () => {
    if (!client) {
      return connectRedis();
    }
    return client;
  },
  
  // Cache middleware
  cacheMiddleware: (keyPrefix, expireTime = 3600) => {
    return async (req, res, next) => {
      if (!client) connectRedis();
      
      try {
        // Create a unique key based on the endpoint and query parameters
        const key = `${keyPrefix}:${req.originalUrl}`;
        
        // Check if we have a cached response
        const cachedData = await client.get(key);
        
        if (cachedData) {
          return res.json(JSON.parse(cachedData));
        }
        
        // Store the original send function
        const originalSend = res.send;
        
        // Override the send function to cache the response before sending
        res.send = function(body) {
          // Only cache successful responses
          if (res.statusCode >= 200 && res.statusCode < 300) {
            client.set(key, typeof body === 'string' ? body : JSON.stringify(body));
            client.expire(key, expireTime);
          }
          
          // Call the original send function
          originalSend.call(this, body);
        };
        
        next();
      } catch (error) {
        console.error('Redis cache error:', error);
        next(); // Continue without caching
      }
    };
  },
  
  // Cache for user sessions
  storeUserSession: async (userId, sessionData, expireTime = 86400) => {
    if (!client) connectRedis();
    try {
      const key = `session:${userId}`;
      await client.set(key, JSON.stringify(sessionData));
      await client.expire(key, expireTime); // Default 24 hours
      return true;
    } catch (error) {
      console.error('Error storing user session:', error);
      return false;
    }
  },
  
  getUserSession: async (userId) => {
    if (!client) connectRedis();
    try {
      const key = `session:${userId}`;
      const data = await client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user session:', error);
      return null;
    }
  },
  
  // Online status management
  setUserOnline: async (userId) => {
    if (!client) connectRedis();
    try {
      await client.sadd('online_users', userId);
      return true;
    } catch (error) {
      console.error('Error setting user online:', error);
      return false;
    }
  },
  
  setUserOffline: async (userId) => {
    if (!client) connectRedis();
    try {
      await client.srem('online_users', userId);
      return true;
    } catch (error) {
      console.error('Error setting user offline:', error);
      return false;
    }
  },
  
  isUserOnline: async (userId) => {
    if (!client) connectRedis();
    try {
      return await client.sismember('online_users', userId);
    } catch (error) {
      console.error('Error checking if user is online:', error);
      return false;
    }
  },
  
  getOnlineUsers: async () => {
    if (!client) connectRedis();
    try {
      return await client.smembers('online_users');
    } catch (error) {
      console.error('Error getting online users:', error);
      return [];
    }
  },
  
  // Rate limiting utilities
  incrementApiCounter: async (key, expireTime = 60) => {
    if (!client) connectRedis();
    try {
      const count = await client.incr(key);
      if (count === 1) {
        await client.expire(key, expireTime);
      }
      return count;
    } catch (error) {
      console.error('Error incrementing API counter:', error);
      return -1;
    }
  }
};