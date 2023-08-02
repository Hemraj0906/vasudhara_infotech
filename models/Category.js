const mongoose= require("mongoose");


const categorySchema=new mongoose.Schema({
    Name:{type:String,trim:true},
    status:{type:Number},
    isDeleted:{type:String,trim:true}
},{timestamps:true});

module.exports=mongoose.model("Category", categorySchema)