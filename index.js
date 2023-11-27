import express from "express";
import dotenv from "dotenv";
import TimeModel from "./schema.mjs";
import dbConnect from "./dbConnection.js";
dotenv.config();

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  //Adding Timestamp on every api call ...
  await dbConnect();
  try {
    const data = new TimeModel({
      time: new Date(),
    });

    await data.save();
    res.send("Time Entry addedddd...");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
