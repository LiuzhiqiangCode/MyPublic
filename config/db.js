//用来做mongoose连接
//1.引入mongoose
const mongoose = require("mongoose");
//2.定义一个mongodb连接
const url = 'mongodb://127.0.0.1:27017/express';
//3.使用mongoose的connect方法去连接‘
mongoose.connect(url, {
    useNewUrlParser: true,useUnifiedTopology:true
}).then(() => {
    console.log("数据库连接成功");
}).catch(error => {
    console.log("数据库连接失败");
    console.log(error);
})

//4.暴露出去

module.exports = mongoose;

