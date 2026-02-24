import dotenv from 'dotenv';

//loads environment variables from the .env file
dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  dbUrl: process.env.DATABASE_URL,
  env: process.env.NODE_ENV || 'development',
};
if (!config.dbUrl) {
  throw new Error('CRITICAL: DATABASE_URL environment variable is missing.');
}