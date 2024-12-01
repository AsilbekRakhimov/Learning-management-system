import { Sequelize } from "sequelize";
import { dbConfig } from "../config/db.config.js";

const sequelize = new Sequelize(
  dbConfig.dbName,
  dbConfig.dbUser,
  dbConfig.dbPassword,
  {
    dialect: "postgres",
    host: dbConfig.dbHost,
    port: dbConfig.dbPort,
    logging: false,
  }
);

export default sequelize;
