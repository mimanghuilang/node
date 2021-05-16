// demo1
// var cp = require('child_process');
// var n = cp.fork(__dirname+'/test/testf.js',{silent:false});
// n.on('message',function (m) {
//   console.log(`父进程接收到消息：`,m)
//   process.exit()
// })
// n.send({userName:'哈哈'})
// demo1 end

// demo2
var cp = require('child_process');
var sp1 = cp.fork(__dirname+'/test/testf1.js',['one','two','three','four'],{silent:true});
var sp2 = cp.fork(__dirname+'/test/testf2.js');
sp1.stdout.on('data',function (data) {
    sp2.send(data.toString())
})
sp1.on('exit',function (code,signal) {
    console.log('子进程退出，退出代码为'+code);
})
sp1.on('error',function (err) {
    console.log("子进程开启失败",err)
    process.exit()
})
// demo2 end