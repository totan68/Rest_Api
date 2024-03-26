
const express = require ('express');
const router = express.Router();
const orderModelRequest = require('../controller/order.Model')
 
 
//get request
router.get("/",orderModelRequest.get_orders);
 
 
//post request for order
router.post("/",orderModelRequest.create_order);
 
 
 
//put request
router.put("/:orderId",orderModelRequest.update_order);
 
 
 
//get for single order
router.get("/:orderId",orderModelRequest.get_order_ById);
 
 
 
//delete order
router.delete("/:orderId",orderModelRequest.delete_order);
 
 
 
module.exports = router;