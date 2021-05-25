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
// var cp = require('child_process');
// var sp1 = cp.fork(__dirname+'/test/testf1.js',['one','two','three','four'],{silent:true});
// var sp2 = cp.fork(__dirname+'/test/testf2.js');
// sp1.stdout.on('data',function (data) {
//     sp2.send(data.toString())
// })
// sp1.on('exit',function (code,signal) {
//     console.log('子进程退出，退出代码为'+code);
// })
// sp1.on('error',function (err) {
//     console.log("子进程开启失败",err)
//     process.exit()
// })
// demo2 end

// demo3 start
// 父进程和子进程共享HTTP服务器示例
var http = require('http');
var net = require('net');
var child_process = require("child_process");
var fs = require('fs');
var child = child_process.fork('test/child.js');
// tcp服务器
var server = net.createServer();
server.listen('1337','127.0.0.1',function () {
  // 传递一个socket对象
  // child.send('server',server);
  console.log('父进程中的服务器已创建。')
  var httpSever = http.createServer();
  httpSever.on('request',function (req,res) {
    if(req.url!=='favicon.ico'){
      let sum=0;
      for(var i=0;i<100000;i++){
        sum+=i;
      }
      res.write("客户端请求在子进程中被处理")
      res.end('sum='+sum)
    }
  });
  httpSever.listen(server,function () {
    console.log('服务器已启动')
  })
})
// demo3 end