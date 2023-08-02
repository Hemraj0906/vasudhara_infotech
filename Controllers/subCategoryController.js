const categoryModel=require("./models/Category");
const subcategoryModel=require("./models/subCategory");

exports.createsubCategory=async function (req,res){
    try{
        let requestbody=req.body;
        let { categoryId,subcategoryName,status,isDeleted}=requestbody;
        const subcategoryData={  categoryId,subcategoryName,status,isDeleted}
        const newsubcategory=await subcategoryModel.create(subcategoryData).populate("categoryId")
        return res.status(201).send({status:true,message:"created category successfully",data:newsubcategory})

    }
    catch(error) {
        return res.status(500).json({
            error: "Error while creating subcategory server side error",
        });
    }
}
exports.getsubCategory=async function (req,res){
    try{
        
       const filterQuery={isDeleted:false,status:1}
       const queryparams=req.query;
       const {categoryId,subcategoryName,status,isDeleted }=queryparams;
       
       getquery=await subcategoryModel.find(filterQuery).populate("categoryId")
       return res.status(200).send({status:true,message:"get queryfilter data",data:getquery})
    }
    catch(error) {
        return res.status(500).json({
            error: "Error while creating subcategory server side error",
        });
    }
}
exports.updatesubcategory=async function(req,res){
    try{
        let subCategoryId=req.params.subCategoryId
        let bodydata=req.body;
        let categoryuser=await subcategoryModel.findById(subCategoryId);
        let updatedsubcategory=await subcategoryModel.findOneAndUpdate({_id:subCategoryId},bodydata,{new:true});
        return res.status(200).send({status:true ,msg:updatedsubcategory})
        


    }
    catch(error) {
        return res.status(500).json({
            error: "Error while updatecategory",
        });
    }
}
exports.deletedsubcategory=async function(req,res){
    try{
        let categoryId=req.params.categoryId;
        let bodydata=req.body;
        let categoryuser=await subcategoryModel.findById(categoryId);
        let updatedcategory=await subcategoryModel.findOneAndUpdate({_id:categoryId},bodydata,{$set:{isDeleted:true}},{new:true});
        return res.status(200).send({status:true ,msg:updatedcategory})
        


    }
    catch(error) {
        return res.status(500).json({
            error: "Error while updatecategory",
        });
    }
}
