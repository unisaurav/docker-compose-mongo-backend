import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function dbConnect() {
  mongoose.connect(process.env.MONGOURL);
  const database = mongoose.connection;
  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
}
export default dbConnect;
