import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// schema definition
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: true, // for better searching
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
    refreshToken: {
      type: String,
    },
    membertype: {
      type: [String], // Array of strings to allow multiple choices
      enum: ["member", "admin", "core", "coordinators"], // predefined multiple choices for member type
      default: ["member"], // default option as an array,
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
    eventHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: Event,
      },
    ],
    igLink: String,
    linkedLink: String,
    githubLink: String,
  },
  { timestamps: true } // taking the timestamps
);

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 10);
  }
  next();
});

//dont use arrow function because there is no refrence to this present so while using callback over here we use func(){}

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password); //boolean return 
};
userSchema.methods.generateAcessToken=function(
){
return  jwt.sign({
    _id:this._id,
    email:this.email
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  }
)
}
userSchema.methods.generateRefreshToken=function(){
  return  jwt.sign({
    _id:this._id,  
  },
  process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  }
)
}
export const User = mongoose.model("User", userSchema);
// exporting schema
