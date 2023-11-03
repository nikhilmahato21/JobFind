import { log } from "console";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(5000, () => console.log("server is running..."));
