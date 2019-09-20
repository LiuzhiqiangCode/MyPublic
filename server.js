const express = require("express");
const cookieParser = require("cookie-parser");
const postRouter = require("./routes/post");
const studentRouter = require("./routes/student");
const usersRouter = require("./routes/user");

const app = express();

//设置模板引擎相关的操作
app.set("views","views");
app.set("view engine","ejs")

//处理各种路由中间件
app.use("/posts",postRouter);
app.use("/students",studentRouter);
app.use("/users",usersRouter);

//中间件调用 静态资源托管设置
app.use(express.static("public"));

//处理cookie
app.use(cookieParser());
//主页路由
app.get("/",(req,res)=>{
    res.render("welcome",{
        name:"张三",
        age:18,
        isLogin:true
    });
})

app.listen(3000);












//中间件调用 这两行代码实现了给req身上加了一个body属性
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// //中间件调用 这hang代码实现了给req身上加了一个cookie属性 获取cookie数据
// app.use(cookieParser());

//中间件调用 静态资源托管设置
// app.use(express.static("public"));

// app.get("/",(req,res)=>{
//     console.log(req.query);
//     res.send("hello express");
// });
// app.post("/handleLogin",(req,res)=>{
//     console.log(req.body);
//     res.send("hello hand");
// })

// //cookies相关
// app.get("/setCookie",(req,res)=>{
//     res.cookie("username","zhangsan",{
//         maxAge: 1000 * 60 * 10
//     });
//     res.send("cookie设置成功");
// });
// app.get("/getCookie",(req,res)=>{
//     console.log(req.cookies);
//     res.send("cookie获取成功");
// })
// //req.params 获取路由的动态参数
// app.get("/hello/:id",(req,res)=>{
//     console.log(req.params);
//     res.send("来了老弟");
// });
// app.get("/world/:name/:age",(req,res)=>{
//     console.log(req.params);
//     res.send("hello world");
// });


// //=================

// const myHello = type =>{
//     return (req,res,next)=>{
//         let abc = new Date();
//         let year = abc.getFullYear();
//         let month = abc.getMonth() + 1;
//         let date = abc.getDate();
//         if(type === 1){
//             req.requestTime = `${year} - ${month} - ${date}`;
//         }else if(type === 2){
//             req.requestTime = `${year} - ${month}`;
//         }else if(type === 3){
//             req.requestTime = `${year}`;
//         }else{
//             req.requestTime = abc.getTime();
//         }
//         next();
//     };
// } 


// app.get("/test",myHello(2),(req,res) =>{
//     console.log(req.requestTime);
//     res.send("test");
// });
// app.get("/test2",myHello(1),(req,res)=>{
//     console.log(req.requestTime);
//     res.send("test2");
// })


// app.listen(3000);

