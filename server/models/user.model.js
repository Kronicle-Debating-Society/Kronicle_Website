import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Event } from "./events.model.js"; // Importing Event model

// User Schema Definition
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true, // For better searching
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      match: /.+\@.+\..+/, // Basic email validation
    },
    domain: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    membertype: {
      type: String, // Modified to store only one role per user
      enum: ["user", "member", "admin", "core", "coordinator"],
      default: "user", // Default role is 'user'
    },
    avatar: {
      type: String,
      default: "", // Placeholder for Cloudinary URL or other
    },
    eventHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event", // Refers to the Event model
      },
    ],
    igLink: String,
    linkedLink: String,
    githubLink: String,
  },
  { timestamps: true }
);

// Pre-save middleware for password hashing and default avatar assignment
userSchema.pre("save", async function (next) {
  // Hash password if modified
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  // Assign a default avatar if none is provided
  if (!this.avatar || this.avatar === "") {
    this.avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      this.name
    )}&background=random&length=1`;
  }

  next();
});

// Password comparison method
userSchema.methods.isPasswordCorrect = async function (password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

// Token generation methods
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      role: this.membertype, // Including role in token for easy role checks
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

// Exporting User model
export const User = mongoose.model("User", userSchema);
