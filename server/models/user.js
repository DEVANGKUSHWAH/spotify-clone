// import mongoose from "mongoose";
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    userName:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:"ADMIN|USER"
    }
})
 const user = mongoose.model('user',userSchema);
 module.exports = user