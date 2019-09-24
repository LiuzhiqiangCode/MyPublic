const express = require("express");
const UserModel = require("../models/user");
const bcryptjs = require("bcryptjs");
const router = express.Router();


//注册页面操作
router.get("/create",(req,res)=>{
    res.render('register');
});

//注册路由操作
router.post("/store",async (req,res)=>{
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
    let data = await UserModel.findOne({email:req.body.email});
    // console.log(data);
    if(data){
        res.send("已经被注册过了");
    }
    else{
        let user = new UserModel({
            username:req.body.username,
            email:req.body.email,
            password:bcryptjs.hashSync(req.body.password)
        });
        await user.save();
        res.send("注册成功");
    }
    // .then(data=>{
    //     if(data){
    //         res.send("已经被注册过了哦");
    //     }else{
    //         let user = new UserModel(req.body);
    //         user
    //         .save()
    //         .then(()=>{
    //             res.send("成功");
    //         }).catch( error=>{
    //             res.send("失败");
    //         })
    //     }
    // })
});

//登陆页面
router.get("/login",(req,res)=>{
    res.render("login");
});
//登陆操作
router.post("/login",async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    // console.log(email,password);
    if(!email || !password){
        res.send("参数有误");
        return;
    }
    //数据库中的密码被加密了，所以不要用两个数据去查找
    let user = await UserModel.findOne({email:email});
    if(!user){
        res.send("用户名或密码错误");
        return;
    }
    // console.log(user);
    //密码校验
    let isOk = bcryptjs.compareSync(password,user.password);
    if(!isOk){
        res.send("用户名或密码错误");
        return;
    };
    res.redirect("/posts");

})


module.exports = router;
