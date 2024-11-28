import dotenv from "dotenv";

dotenv.config();

export const jwtObj = {
  accessTokenSecureKey: process.env.ACCESS_TOKEN_SECRET_KEY,
  accessTokenExpireTime: process.env.ACCESS_TOKEN_EXPIRES_TIME,
  refreshTokenSecureKey: process.env.REFRESH_TOKEN_SECRET_KEY,
  refreshTokenExpireTime: process.env.REFRESH_TOKEN_EXPIRES_TIME,
};