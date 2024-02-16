import mongoose from "mongoose"


const Schema = mongoose.Schema({

    name:{
        type: String,
        required: [true, "please enter your name"]
    },

    email:{
        type: String,
        required:[true, "please enter your email"],
        unique: true
    }

    
})


export const User = mongoose.model("user", Schema);