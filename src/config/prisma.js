const { PrismaClient } = require('../generated/prisma');

// Prevent multiple instances in development
const globalForPrisma = global;

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
});

module.exports = prisma;