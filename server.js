import "express-async-errors";

import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import jobRouter from "./routes/jobRouter.js";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { body, validationResult } from "express-validator";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});

app.post(
  "/api/v1/test",
  [
    body("name").notEmpty().withMessage("name is required"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((err) => err.msg);
        return res.status(400).json({ errors: errorMessages });
      }
      next();
    },
  ],
  (req, res) => {
    const { name } = req.body;
    res.json({ message: `hello ${name}` });
  }
);

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server is running on PORT ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
