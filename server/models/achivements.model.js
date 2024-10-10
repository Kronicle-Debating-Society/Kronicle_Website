import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: String,
        required: true, 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // using  associated User model
        required: true,
    },
}, { timestamps: true });

export const Achievement = mongoose.model("Achievement", achievementSchema);
