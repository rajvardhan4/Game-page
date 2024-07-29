import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        // unique: true
    }
    ,
    phone: {
        type: String,
        require: true,
    }
    ,
    password: {
        type: String,
        require: true,
        // unique: true
    }

},{timestamp:true})

const User= mongoose.model('User',userschema)

export default User;