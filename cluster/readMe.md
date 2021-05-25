## cluster模块
### 目的
为了充分发挥多核cpu的优势，Node.js中提供了该模块，允许在多个子进程中运行不同的Node.js应用程序。

### 创建子进程
worker = cluster.fork([env])

### 属性
isMaster 是否在主进程中
isWorker 是否运行在子进程中
id 

### 方法
cluster.setupMaster([settings]) // 修改子进程中运行的模块文件或则修改子进程中运行的Node.js 应用程序的其他默认行为
参数属性
exec 
args
silent


### 监听
cluster.on("fork",function(worker){})    // 开启子进程后
cluster.on('online',function(worker){})  // 尝试运行Node.js应用程序时
cluster.on('listening',function(worker,address){}) // 子进程调用服务气的listen方法后

### worker对象的方法与事件
worker.on('online',function(){})
worker.on('listening',function(address){})
worker.send(message,[sendHandle])
process.send(message,[sendHandle])
worker.on('exit',function(code,signal))
worker.kill([signal])
worker.disconnect() 使子进程不再接收外部连接

## 对所有子进程进行遍历
for(var index in cluster.workers){
    console.log(cluster.workers[index])
}
