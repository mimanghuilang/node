var spawn = require('child_process').spawn;
// 父进程和子进程之间只共享错误输出
var sp1 = spawn('node',['test1.js','one','two','three','four','five'],{cwd:'./test',stdio:['pipe','pipe',process.stderr]})
// process.stderr.on('data',function (data) {
//     // console.log(data);
// })
process.stdin.on('data',function (data) {
    console.log(data,'父进程');
})
sp1.stdin.on('data',function (data) {
    console.log(data,'子进程')

})