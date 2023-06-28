const mongoose = require('mongoose');

const playListSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
    },
    hits:{
        type:Number,
        required:false,
        default:0
    }
},{
    timestamps:true
})

const playList = mongoose.model('playlist',playListSchema,'playLists');
module.exports = playList