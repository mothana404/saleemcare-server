const prisma = require('./prisma');

async function connectDatabase() {
  try {
    await prisma.$connect();
    console.log('Successfully connected to database');
    return prisma;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }
}

module.exports = connectDatabase;