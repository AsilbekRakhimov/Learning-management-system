import dotenv from "dotenv";

dotenv.config();

export const dbConfig = {
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  dbPassword: process.env.DB_PASSWORD,
};
