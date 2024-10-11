import mongoose from "mongoose";

// schema definition
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
    password: {
      type: String,
      required: true, // make sure you hash this in the logic
    },
    memberType: {
      type: String,
      enum: ["member", "admin", "core", "coordinators"], // predefined multiple choices for member type
      default: "member", // default option
    },
    isMember: {
      type: Boolean,
      default: false,
      required: true,
    },
    avatar: {
      type: String, // cloudinary URL
      required: true,
    },
    igLink: String,
    linkedLink: String,
    githubLink: String,
  },
  { timestamps: true } // taking the timestamps
);

export const User = mongoose.model("User", userSchema);
// exporting schema
