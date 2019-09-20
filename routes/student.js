//引入express
const express = require("express");
//实例化路由实例
const router = express.Router();
//在当前这个路由实例上加路由代码
router.get("/",(req,res)=>{
    res.send("学生列表");
});
router.post("/",(req,res)=>{
    res.send("新增学生");
});
router.delete("/:id",(req,res)=>{
    res.send("删除某ge学生");
});
router.get("/:id/edit",(req,res) =>{
    res.send("对某个学生做修改");
});
module.exports = router;