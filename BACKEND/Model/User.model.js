import mongoose, { Mongoose, Types } from "mongoose";

const userschema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
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
        unique: true
    }

})

const User= Mongoose.model('User',userschema)

export default User;