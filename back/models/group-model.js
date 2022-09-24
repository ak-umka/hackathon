import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  classNumber: {
    type: Number,
    required: true,
  },
  classDirection: {
    type: String,
    required: true,
  },
  elementaryClass: {
    type: Boolean,
    default: false,
  },
  middleClass: {
    type: Boolean,
    default: false,
  },
  highClass: {
    type: Boolean,
    default: false,
  },   
});

export default mongoose.model("Group", groupSchema);