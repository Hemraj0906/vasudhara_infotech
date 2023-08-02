const mongoose=require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId;

const subcategorySchema= new mongoose.Schema({
    categoryId:{type:ObjectId,refs:"Category"},
    subcategoryName:{type:String,trim:true},
    status:{type:Number},
    isDeleted:{type:String}
},{timestamps:true})

module.exports=mongoose.model("subCategory", subcategorySchema)