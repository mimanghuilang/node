const cluster = require("cluster");
const http = require("http");
if(cluster.isMaster){
    cluster.on('online',function (worker) {
        console.log('已经接收到子进程'+worker.id+'的反馈信息')
    })
    cluster.on('fork',function (worker) {
        console.log('子进程已经被创建')
    })
    cluster.on('listening',function (worker,address) {
        console.log(worker.id,address)
    })
    cluster.fork();
    cluster.fork();
}else{
    http.createServer(function (req,res) {
        if(req.url!=='favicon.ico'){
            res.writeHead(200,{
                'Content-Type':'text/html'
            });
            console.log(cluster.worker.id+'响应消息');
            res.write('<head><meta charset="utf-8"></head>')
            res.end('您好\n')
            console.log('这段代码被运行在子进程中。')
        }
    }).listen(1337)
}