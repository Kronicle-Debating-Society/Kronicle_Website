import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
    }
    ,
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    domain:{
        type:String,
        required:true,
    },
    igLink:String,
    linkedLink:String,
    githubLink:String,
    image:{

    }
},{timestamps:true});

export const User = mongoose.model("User", userSchema);
