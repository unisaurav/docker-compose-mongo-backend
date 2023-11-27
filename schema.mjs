import mongoose from "mongoose";
const timeSchemaDefination = new mongoose.Schema({
  time: {
    required: true,
    type: String,
  },
});
const TimeModel = mongoose.model("addpassword", timeSchemaDefination);
export default TimeModel;
