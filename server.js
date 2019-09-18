const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

//中间件调用 这两行代码实现了给req身上加了一个body属性
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//中间件调用 这hang代码实现了给req身上加了一个cookie属性 获取cookie数据
app.use(cookieParser());

//中间件调用 静态资源托管设置
app.use(express.static("public"));

app.get("/",(req,res)=>{
    console.log(req.query);
    res.send("hello express");
});
app.post("/handleLogin",(req,res)=>{
    console.log(req.body);
    res.send("hello hand");
})

//cookies相关
app.get("/setCookie",(req,res)=>{
    res.cookie("username","zhangsan",{
        maxAge: 1000 * 60 * 10
    });
    res.send("cookie设置成功");
});
app.get("/getCookie",(req,res)=>{
    console.log(req.cookies);
    res.send("cookie获取成功");
})
//req.params 获取路由的动态参数
app.get("/hello/:id",(req,res)=>{
    console.log(req.params);
    res.send("来了老弟");
});
app.get("/world/:name/:age",(req,res)=>{
    console.log(req.params);
    res.send("hello world");
});
app.listen(3000);