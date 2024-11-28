import dotenv from "dotenv";

dotenv.config();

export const port = process.env.APP_PORT || 4001;
