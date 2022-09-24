import mongoose from 'mongoose';

const librarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  genre: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Library', librarySchema);