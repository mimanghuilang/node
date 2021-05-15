### process
#### 属性
* execPath 可执行文件的绝对路径
* version node版本
* versions 各依赖版本号
* platform  平台
* stdin 用于读入标准输入流对象，处于暂停状态 需要调用process.stdin.resume();恢复读取标准输入流数据
* stdout 用于写入标准输出流对象，阻塞，pipe不阻塞
* stderr 用于写入标准错误输出流对象，阻塞，pipe不阻塞
* argv 命令行参数
* env 环境变量
* config node可执行文件的配置项
* pid
* title
* arch应用程序架构
#### 方法
* memoryUsage 获取内存使用情况
* nextTick
* abort 使得进程异常终止
* chdir 修改当前工作目录
* cwd    获取当前目录
* exit([code]) 退出node.js应用程序,默认是0，代码为0代表正常退出
* kill(pid,[signal]) 向一个进程发送信号
* unmask([mask]) 读取修改应用程序的进程文件的权限掩码
* uptime 当前运行时间
* hrtime 测试代码的运行时间
#### 事件
exit 退出
uncaughtException 异常捕获
SIGINT 信号事件

### child_process
创建
child_process.spawn(command,[args],[options])
options参数说明
    cwd 子进程的当前工作目录
    stdio 为一个字符串或则一个存放三个元素的数组
    customFds 为一个数组，用于指定子进程的标准输入/输出指定的文件描述符




### cluster
### 对比
* child_process 实现开启多个子进程并在各子进程中进行各种不同命令的或者执行...
* cluster 为每个子进程中运行一个node.js应用副本的处理