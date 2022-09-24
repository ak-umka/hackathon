import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  shortHistory: {
    type: String,
    required: true,
  },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
  direction: {
    type: String,
    required: true,
  },
  countClasses: {
    type: Number,
    required: true,
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
    },
  ],
  vacancies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vacancy",
    },
  ],
});

export default mongoose.model("School", schoolSchema);