import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
  workExperience: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Teacher", teacherSchema);

// {
//   toJSON: {
//     transform(doc, ret) {
//       ret.id = ret._id;
//       delete ret._id;
//       delete ret.__v;
//     }
//   },
//   timestamps: true,
// }