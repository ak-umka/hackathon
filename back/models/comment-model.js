import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    validate: {
      validator: Number.isInteger,
    },
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
  }
});

export default mongoose.model("Comment", commentSchema);