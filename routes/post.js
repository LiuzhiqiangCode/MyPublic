//引入express
const express = require("express");
//实例化路由实例
const router = express.Router();
//在当前这个路由实例上加路由代码
router.get("/",(req,res)=>{
    res.render("post/index",{
        posts:[
            {
                title:"快乐",
                content:"非常愉快",
                date:"2019-09-08",
                username:"张三"
            },
            {
                title:"不快乐",
                content:"非常不愉快",
                date:"2019-09-09",
                username:"李四"
            },
            {
                title:"有点快乐",
                content:"皮起来了",
                date:"2019-09-10",
                username:"王五"
            },
            {
                title:"究极快乐",
                content:"究极愉快",
                date:"2019-09-11",
                username:"马六"
            }
        ],
        isLogin:true
    });
});
router.post("/",(req,res)=>{
    res.send("新增文章");
});
router.delete("/:id",(req,res)=>{
    res.send("删除某篇文章");
});
router.get("/:id/edit",(req,res) =>{
    res.send("对某篇文章做修改");
});
module.exports = router;