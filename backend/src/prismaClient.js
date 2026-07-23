// Prisma Client Singleton
// Ensures a single Prisma Client instance is used across the application.

const { PrismaClient } = require('./generated/client');

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

module.exports = prisma;
