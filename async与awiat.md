## async 与 await

这ES8里出来的，帮我们解决回调地狱，是我们写异步代码更方便

### 注意点
1.await 后面写的方法，必须返回的是一个promise对象 ，promise对象内必须调用resolve或者reject

2.await 必须在async方法内调用