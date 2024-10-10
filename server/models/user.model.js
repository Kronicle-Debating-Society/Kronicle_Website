import mongoose from "mongoose";

// schema defination and all fileds descibed
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    domain: {
      type: String,
      required: true,
    },
    isMember: {
      type: Boolean,
      default: false,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    igLink: String,
    linkedLink: String,
    githubLink: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
// exporting schema
