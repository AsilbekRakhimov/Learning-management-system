import dotenv from "dotenv";

dotenv.config();

export const appConfig = {
  port: process.env.APP_PORT || 4001,
};
