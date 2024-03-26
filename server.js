require(`dotenv`).config();
const http = require ("http");
const app=require('./app');





// let server=http.createServer((req,res)=>{
//     res.write("server created sucessfully");
//    res.end();
// });


let server=http.createServer(app);
let port =process.env.PORT;
let host =process.env.HOST;

server.listen(9999,()=>{
    console.log(`my sweet server get started ${port}`)
});
