import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { connectDb } from "./config/db.config";
import { ENV } from "./config/env.config";

const app: Application = express();

const startServer = async () => {
  try {
    await connectDb();
    app.listen(ENV.PORT, () => {
      console.log(`Server started -- PORT ${ENV.PORT}`);
    });
  } catch (error) {
    console.log(`MongoDB connection error: `, error);
    process.exit(1);
  }
};

console.log("dsafd");

startServer();
