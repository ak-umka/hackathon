import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    validate: {
      validator: Number.isInteger,
    },
  },
  comment: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

export default mongoose.model("Rating", ratingSchema);