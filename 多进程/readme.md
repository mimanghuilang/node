## 使用spawn方法开启子进程
### child_process.spawn(command,[args],[options])
* command 运行命令
* args 运行参数
* options 参数
```
 cwd: 指定子进程当前的工作目录
 stdio 一个字符串或则三个元素的数组，设置子进程的标准输入输出
 customFds: 数组，为子进程的标准输入/输出指定文件描述符（不推荐使用）
 env 环境变量
 detached 是否是一个领头进程
 
 可为stdio数组元素设定的值
    pipe 父子进程创建一个通道
    ipc  父子进程创建一个专用于传递消息的文件描述符
    ignore 指定不为子进程设置描述符，子进程文件描述符重定向到空设备文件
    stream 父子共享一个终端设备、文件、端口或则管道。数据流底层文件描述符在子进程中被复制
    正整数值 指定父进程中被打开的文件描述符，该文件描述符在子进程中被共享，效果和Stream一致
    null或则undefined 默认值，对于标准输入输出来说，子进程中创建管道用于读取文件的文件描述符号3来说，在子进程中被忽略
```

### 使用fork 方法开启子进程
开启一个专用于运行Node.js中某个模块的文件的子进程，每个实例的开启需要30ms及至少10MB的内存
var ChildProcess = child_process.fork(modulePath,[args],[options]);
* modulePath 运行node.js 模块文件路径
* args 运行模块使用的参数
* options
```
    cwd 子进程的当前工作目录
    env 环境变量
    encoding 标准输出，标准错误输出的编码格式，默认属性值为‘utf8’
    silent 是否共享标准输入输出
```

### 方法
child.send(message,[sendHandle])
process.send(message,[sendHandle])
sendHandle: 当接收到对方发送消息后执行的回调函数
process.on(message,function(m,setHandle){})
child.on(message,function(m,setHandle){})