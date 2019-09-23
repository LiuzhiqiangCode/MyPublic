//1.引入mongoose，是已经连接了mongodb的mongoose
const mongoose = require("../config/db");

//2.定义好你要操作的表的结构 schema
const schema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
});
//3。生成model
const model = mongoose.model("user",schema);
//4.暴露model
module.exports = model;
