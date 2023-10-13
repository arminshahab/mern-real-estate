import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log(e));

const app = express();

app.listen(3000, () => {
  console.log("server started on port 3000");
});
