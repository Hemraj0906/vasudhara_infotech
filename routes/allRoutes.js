const express = require("express");
const router = express.Router();


const{createsubCategory,getsubCategory,updatesubcategory,deletedsubcategory}=require("../Controllers/subCategoryController");
const{createCategory,getallcategory,updatecategory,deletedcategory}=require("../Controllers/categoryController");

//Mapping Create category routes

router.post("/createcategory", createCategory);
router.get("/getcategory", getallcategory);
router.update("/updatecategory", updatecategory);
router.delete("/deletecategory", deletedcategory);
// Mapping create subcategory routes
router.post("/create/sub", createsubCategory);
router.get("/get/sub", getsubCategory);
router.update("/update/sub", updatesubcategory);
router.delete("/delete/sub", deletedsubcategory);

//export
module.exports = router;

