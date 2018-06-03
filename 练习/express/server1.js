var express=require("express");
var app =express();

app.get("/",function(req,res,next){
    console.log("01 客户端发请求")
    next();
})

app.get("/",function(req,res,next){
    console.log("02 客户端发请求")
    next();
})

app.get("/",function(req,res,next){
    console.log("03 客户端发请求")
    next();
})

app.get("/",function(req,res,next){
    console.log("04 客户端发请求")
    next();
})

app.get("/",function(req,res){
    console.log("05 客户端发请求")
    res.send("end");
})


app.listen(9000,"127.0.0.1",function(){
    console.log("server start on port 9000...");
})