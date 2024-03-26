
const mongoose = require('mongoose')
const Order = require('../Model/orderModel');
 
 
//code for post request
exports.create_order = async (req, res, next) => {
    try {
        const orderObj = new Order({
            _id: new mongoose.Types.ObjectId(),
            product: req.body.product,
            quantity: req.body.quantity
        })
       
        const data = await orderObj.save()
        res.status(200).json({
            code: 1,
            msg: "Order created successfully",
            createdorder: data,
            error: null
        });
    } catch (err) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            createdorder: null,
            error: err
        });
    }
}
 
 
//code for get order list
exports.get_orders = async (req, res, next) => {
    try {
        const data = await Order.find();
        if (data) {
            res.status(200).json({
                code: 1,
                msg: "This is simple get request for order",
                data: data,
                error: null
            })
        } else {
            res.status(200).json({
                code: 1,
                msg: "No data found",
                data: null,
                error: null
            })
        }
    } catch (error) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            data: null,
            error: error
        })
    }
}
 
//code for getting single order
exports.get_order_ById = async (req, res, next) => {
    try {
        const data = await Order.findById(req.params.orderId);
        if (data) {
            res.status(200).json({
                code: 1,
                msg: "This is simple get request for one order",
                data: data,
                error: null
            })
        }else{
            res.status(200).json({
                code: 1,
                msg: "No order available for given ID",
                data: null,
                error: null
            })
        }
 
    } catch (error) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            data: null,
            error: error
        })
    }
}
 
//code for update single order
exports.update_order = async (req, res, next) => {
    try {
        const data = await Order.findByIdAndUpdate(req.params.orderId,req.body,{new:true,runValidator:true});
        if (data) {
            res.status(200).json({
                code: 1,
                msg: "This is simple put request for single order",
                data: data,
                error: null
            })
        }else{
            res.status(200).json({
                code: 1,
                msg: "No order available for given ID",
                data: null,
                error: null
            })
        }
 
    } catch (error) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            data: null,
            error: error
        })
    }
}
 
 
//code for delete single order
exports.delete_order = async (req, res, next) => {
    try {
        const data = await Order.findByIdAndDelete(req.params.orderId);
        if (!data) {
            res.status(404).json({
                code: 1,
                msg: "No order found",
                data: data,
                error: null
            })
        }else{
            res.status(404).json({
                code: 1,
                msg: "Data Deleted",
                data: data,
                error: null
            })
        }
 
    } catch (error) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            data: null,
            error: error
        })
    }
}



////C:\Program Files\MongoDB\Server\7.0\bin
 
 