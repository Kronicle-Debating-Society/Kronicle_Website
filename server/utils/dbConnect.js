import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config(); 

const DB_NAME = "production";
const connectDB = async () => {
  try {

    const mongoURI = process.env.MONGODB_URI.endsWith("/")
    ? `${process.env.MONGODB_URI}${DB_NAME}`
    : `${process.env.MONGODB_URI}/${DB_NAME}`;


    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
