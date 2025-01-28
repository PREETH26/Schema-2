const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    Username:String,
    Message:{
        type:String,
        required:true
    },
    commentedAt:{
        type:Date,
        default:()=> Date.now()
    }
})

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true,
        min:5
    },
    content:{
        type:String,
        required:true,
        min:50
    },
    author:String,
    tags:{
        type:[String],
        default:['tech','coding']
    },
    category:{
        type:String,
        default:"General"
    },
    likes:[String],
    createdAt:{
        type:Date,
        default:()=>Date.now(),
    },
    uploadedAt:Date,
    comments: commentSchema
})

module.exports = mongoose.model("blog",blogSchema)