//引入express
const express = require("express");
const PostModel = require("../models/post");
//实例化路由实例
const router = express.Router();


//在当前这个路由实例上加路由代码
//文章列表
router.get("/", async (req, res) => {
    //从url地址上获取当前第几页 每页需要多少条
    let pageNum = parseInt(req.query.pageNum) || 1;
    let pageSize = parseInt(req.query.pageSize) || 5;
    let total;
    let count = await PostModel.find().countDocuments();
    total = Math.ceil(count / pageSize);

    //从数据库中查找文章
    let posts = await PostModel.find()
        .sort({
            updatedAt: -1
        })
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize);
    // console.log(posts)
    res.render("posts/index", {
        posts,
        total,
        pageNum,
        isLogin: true
    });
});

router.post("/store", async (req, res) => {
    //1.数据校验
    if (!req.body.title || !req.body.content) {
        res.send("数据有误");
        return;
    }
    //直接存到数据库
    let newPost = new PostModel(req.body);
    await newPost.save();
    // res.send("新增成功");
    //新增成功 直接跳到列表页
    res.redirect("/posts")
})

//新增文章页面
router.get("/create", (req, res) => {
    // res.send("新增文章");
    res.render("posts/create");
});

//文章详情
router.get("/:id", async (req, res) => {
    //获取到文章的id
    let id = req.params.id;
    let data = await PostModel.findById(id);
    // res.send(data);
    res.render("posts/show", {
        postInfo: data
    })
});

//对某篇文章做修改
router.get("/:id/edit", async (req, res) => {
    let id = req.params.id;
    let post =await PostModel.findById(id);
    // res.send("对某篇文章做修改");
    res.render("posts/edit",{
        id:post._id,
        title:post.title,
        content:post.content
    })
});
//编辑某篇文章
router.post("/update",async(req,res) =>{
    let id = req.body.id;
    let title = req.body.title;
    let content = req.body.content;

    let data = await PostModel.update({_id:id},{title:title,content:content});
    res.send("修改成功");
});


//删除的接口,供前端ajax调用
router.delete("/:id",async (req,res)=>{
    let id = req.params.id;
    await PostModel.deleteOne({_id:id});
    res.send({
        code:0,
        msg:"删除成功"
    })
})

module.exports = router;