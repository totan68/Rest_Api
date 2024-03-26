
const express=require ('express');
const router=express.Router();
// const mongoose = require('mongoose');
// const Product=require('../model/productModel');
const productModelRequest=require('../controller/product.model');
 
router.get("/",productModelRequest.get_products);
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple get request for product"
//     });
// });
 
router.post("/",productModelRequest.create_product);
// (req,res,next)=>{
//     const productObj={
//     name:req.body.name,
//     price:req.body.price
// }
 
// });
 
router.get("/:productId",productModelRequest.get_product_ById);
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple get request for single product"
//     });
// });
 
router.put("/:productId",productModelRequest.update_product);
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple put request for single product"
//     });
// });
 
router.delete("/:productId",productModelRequest.delete_product);
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple delete request for single product"
//     });
// });
 
module.exports = router;