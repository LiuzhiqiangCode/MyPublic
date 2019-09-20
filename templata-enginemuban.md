## 设置模板引擎相关的操作
app.set("views","views");
app.set("view engine","ejs")

views是指定的路径,第二个set设定的是让views目录下的文件以ejs的格式执行

## 然后设置主页路由
app.get("/",(req,res)=>{
    res.render("welcome",{  //render渲染 渲染那个页面出去
        name:"张三",
        age:18
    });
})