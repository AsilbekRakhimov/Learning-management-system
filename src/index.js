import express from "express";
import { appConfig } from "./config/app.config.js";
import bodyParser from "body-parser";
import sequelize from "./db/sequelize.db.js";
import { ErrorHandlerMiddleware } from "./middlewares/errorhandler.middleware.js";

const app = express();

process.on("uncaughtException", (err) => {
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  process.exit(1);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
    return sequelize.sync();
  })
  .then(() => {
    console.log("All models are synchronized successfully");
  });

app.use(ErrorHandlerMiddleware);

app.listen(appConfig.port, () => {
  console.log(`Server is running on port: ${appConfig.port}`);
});
