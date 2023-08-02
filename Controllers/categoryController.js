const categoryModel=require("./models/Category");

exports.createCategory=async function (req,res){
    try{
        let requestbody=req.body;
        let { Name ,status,isDeleted}=requestbody;
        const categoryData={ Name ,status,isDeleted}
        const newcategory=await categoryModel.create(categoryData)
        return res.status(201).send({status:true,message:"created category successfully",data:newcategory})

    }
    catch(error) {
        return res.status(500).json({
            error: "Error while creating category server side error",
        });
    }
}
exports.getallcategory=async function(req,res){
    try{
        const getall=await categoryModel.find()
        // return res.json({
        //     getall,
        // })
        return res.status(200).send({status:true,message:"created category successfully",data:getall})


    }
    catch(error) {
        return res.status(500).json({
            error: "Error while getallcategory",
        });
    }
}
exports.updatecategory=async function(req,res){
    try{
        let categoryId=req.params.categoryId;
        let bodydata=req.body;
        let categoryuser=await categoryModel.findById(categoryId);
        let updatedcategory=await categoryModel.findOneAndUpdate({_id:categoryId},bodydata,{new:true});
        return res.status(200).send({status:true ,msg:updatedcategory})
        


    }
    catch(error) {
        return res.status(500).json({
            error: "Error while updatecategory",
        });
    }
}
exports.deletedcategory=async function(req,res){
    try{
        let categoryId=req.params.categoryId;
        let bodydata=req.body;
        let categoryuser=await categoryModel.findById(categoryId);
        let updatedcategory=await categoryModel.findOneAndUpdate({_id:categoryId},bodydata,{$set:{isDeleted:true}},{new:true});
        return res.status(200).send({status:true ,msg:updatedcategory})
        


    }
    catch(error) {
        return res.status(500).json({
            error: "Error while updatecategory",
        });
    }
}
