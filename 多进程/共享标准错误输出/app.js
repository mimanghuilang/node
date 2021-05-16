var spawn = require('child_process').spawn;
// -- 共享输入start --
// var sp1 = spawn('node',['test1.js','one','two','three','four','five'],{cwd:'./test',stdio:[process.stdin,'pipe','pipe']})
// -- 共享输入end --

// -- 共享输出start--
// var sp1 = spawn('node',['test1.js','one','two','three','four','five'],{cwd:'./test',stdio:['pipe',process.stdout,'pipe']})
// -- 共享输出end--

// -- 共享错误输出start
// var sp1 = spawn('node',['test1.js','one','two','three','four','five'],{cwd:'./test',stdio:['pipe','pipe',process.stderr]})
// -- 共享错误输出end

// -- 多个子进程
var sp1 = spawn('node',['test1.js','one','two','three','four','five'],{cwd:'./test'})
var sp2 = spawn('node',['test2.js','one','two','three','four','five'],{cwd:'./test',stdio:'pipe'})
sp1.stdout.on('data',function (data) {
    console.log(data.toString());
    sp2.stdin.write(data)
})
sp1.on('exit',function (code,signal) {
    console.log('子进程退出，退出代码为'+code);
})
sp1.on('error',function (err) {
    console.log("子进程开启失败",err)
})
// -- 多个子进程结束


// -- 关闭事件监听,exit可能触发，close可能不触发
// sp1.on('exit',function (code,signal) {
//   console.log('exit',code,signal);
// })
// sp1.on('close',function (code,signal) {
//     console.log('close',code,signal);
// })
// -- end