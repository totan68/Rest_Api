require('dotenv').config();
const express=require ('express');
const app=express();
const morgan = require('morgan');
const bodyParser=require('body-parser');
const productRoutes= require('./api/routes/products');
const orderRoutes= require('./api/routes/orders');
const userRoutes=require('./api/routes/user')
 const mongoose=require('mongoose');


// app.use((req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple request"
//     });
// });
app.use(morgan("dev"));


///mongoose connection string
mongoose.connect("mongodb+srv://b68totanhazra:"+process.env.MONGO_ATLAS_PW+"@cluster0.yvnojle.mongodb.net/",
    
).then(()=>{console.log("connected sucessfully")});

 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());


 // code to habdle CORS Error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Origin,X-Requested-Width,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Crendentails",true);
    if(res.header==="OPTIONS"){
        res.header("Access-Control-Allow-Method","PUT","POST","DELETE","GET");
        return res.status(200).json();
    }
    next();
})


app.use("/products",productRoutes);
app.use("/orders",orderRoutes);
app.use("/users",userRoutes); 

app.use((req,res,next)=>{
    const error = new Error("Route not Found");
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(500).json({
        error:error.message
    })
})
module.exports=app;
////UCBNml2SwVP69v3Y


//////b68totanhazra
/////iTcL0Xm6gmSVSsyp//////////////////




////gBrRx4tnynoPCSTE
////mongodb+srv://b68totanhazra:gBrRx4tnynoPCSTE@cluster0.yvnojle.mongodb.net/