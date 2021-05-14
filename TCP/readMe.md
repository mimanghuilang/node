# TCP
## TCP服务器
### 创建TCP 服务器
var net  = require("net")
var server = net.createServer([options],[connectListener])
* options
allowHalfOpen 是否允许开一半
* connectionListener
参数 socket端口对象

### 监听客户端链接
#### 方法一
server.listen(port,[host],[backlog],[callback])
* port 端口
* host 监听ip地址或则主机名
* backlog 等待队列中客户端的最大连接数量
* callback 无参数
#### 方法二
server.listen(path,[callback])
* path 指定路径的客户端连接
### 方法三
server.listen(handle,[callback])
* handle 指定socket的句柄

### 事件
server.on('listening',function(){})
server.on('connection',function(){})
server.on('error',function(e){console.log(e.code)})
server.on('close',function(){})
server.on('end',function(){})

### 方法
* server.address()
* server.close([callback])
* server.getConnections(callback)
callback 参数 err,count
* server.unref()
* server.ref()

### 


### socket 端口对象
socket.remoteAddress
socket.remotePort
socket.localAddress
socket.localPort
socket.address();
socket.setEncoding('utf8')
socket.on('data',function(data){})
socket.on('end',function(data){})
// pipe方法将客户端发送的流数据书写到文件等其它目标对象中,unpipe 暂停写入
socket.pipe(destination,[options]);
socket.unpipe(destination);
// 暂停接受客户端消息，继续接收客户端消息
socket.pause() 
socket.resume() 
// 设置超时时间,取消设置时间为0
socket.setTimeout(timeout,[callback])
// 销毁
socket.destroy();
// 关闭链接
socket.end([data],[encoding])
// 写入数据
socket.write(data,[encoding],[callback])



## TCP 客户端
### 创建
var socket = new net.Socket([options]);
* options
fd 指定一个现存socket的文件描述符
type tcp4 或则 tcp6
allowHalfOpen

### 连接
socket.connect(port,[host],[connectListener])
socket.connect(path,[connectListener])

### 属性方法
remoteAddress
remotePort
localAddress
localPort
socket.setEncoding('utf8')
socket.write(data,[encoding],[callback])
socket.address();
socket.bytesRead
socket.bytesWritten
socket.connect()
.destory([error])



### 事件
close 
connect
data
drain
end
error
lookup
ready
timeout



 


