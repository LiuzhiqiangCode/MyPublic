const express = require("express");
const UserModel = require("../models/user");
const router = express.Router();

//注册页面操作
router.get("/create",(req,res)=>{
    res.render('register');
});

//注册路由操作
router.post("/store",(req,res)=>{
    // console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    //对参数做校验
    if(!username || !password || !email){
        res.send("参数有误");
        return;
    }

    //查询
    UserModel.findOne({email:req.body.email}).then(data=>{
        if(data){
            res.send("已经被注册过了哦");
        }else{
            let user = new UserModel(req.body);
            user
            .save()
            .then(()=>{
                res.send("成功");
            }).catch( error=>{
                res.send("失败");
            })
        }
    })
})


module.exports = router;
