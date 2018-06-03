var express=require("express");

//创建express应用程序

var app = express();

app.use(express.static("pub"));
//get请求
app.get("/",function(req,res){
    res.send("HOME")
})
app.get("/login.html",function(req,res){
   res.sendFile(`${__dirname}/login.html`);
})
//监听端口
app.listen(9000,"127.0.0.1",function(){
    console.log("server is running on port 9000...");
})