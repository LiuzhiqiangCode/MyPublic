//1.引入mongoose，是已经连接了mongodb的mongoose
const mongoose = require("mongoose");
//2.定义好你要操作的表的结构 schema
const schema = new mongoose.Schema({
    title:String,
    content:String
},{
    //这个选项，可以让文章自动携带一个创建时间与更新时间
    timestamps:true
}
);
//3。生成model
const model = mongoose.model('post',schema);
//4.暴露model
module.exports = model;