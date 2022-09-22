import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // role: {
    //     type: String,
    //     default: 'basic',
    //     enum: ["basic", "admin"]
    // },
});

export default mongoose.model('User', userSchema);