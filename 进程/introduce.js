const {execPath,versions,platform,stdin,stdout,stderr,argv,env,config,pid,title,arch}= process;
console.log({
    // 可执行文件的绝对路径
    execPath,
    // node.js依赖版本号
    versions,
    // 运行平台
    platform,
    // 用于读取标准输入流的对象,默认处于暂停状态，要恢复请调用 resume方法
    stdin,
    // 用于写入标准输入流的对象
    stdout,
    // 用于标准错误流输出对象
    stderr,
    // 命令参数
    argv,
    // 环境信息
    env,
    // 可执行文件配置项的js描述
    config,
    // 进程pid
    pid,
    // 命令行窗口标题
    title,
    // 应用程序的处理架构
    arch
})
process.stdin.resume();
process.stdin.on('data',function (data) {
    console.log(`进程接收到数据${data}`)
})
process.argv.forEach((item,index)=>{
    console.log(`${index}:${item}`)
})
// 内存使用量
const {rss,heapTotal,heapUsed} = process.memoryUsage();
console.log({
    // 内存消耗
    rss,
    // v8分配
    heapTotal,
    // v8消耗
    heapUsed
})

// nextTick
// function foo() {
//     console.log('foo')
// }
// process.nextTick(foo)
// console.log(3333);

// nextTick
// function foo2() {
//     setTimeout(()=>{
//         console.log('foo2')
//     })
// }
// process.nextTick(foo2)
// setTimeout(()=>{
//     console.log('foo3')
// })

// 异常终止
// process.abort()

// 修改工作目录
// process.chdir('../test')

// 返回当前目录
console.log(`当前路径：${process.cwd()}`)

// 退出node,0表示正常退出node
// process.exit()

// 以下方法只在非windows系统中有效
// getgid,setgid,getuid,setuid,getgroups,setgroups,initgroups

// 杀死进程,SIGINT,GUSR1,默认为SIGTERM
// process.kill(pid,'SIGINT')

// 修改文件权限掩码
// const fs = require('fs');
// fs.chmod('introduce.js',777,function (err, stats) {
//     console.log(err,stats)
// })
process.umask(644)
console.log(process.umask().toString(8),'修改文件权限掩码')

// 当前时间
// console.log(`当前运行秒时间${process.uptime()}`)

// 组数据
// var time = process.hrtime();
// let key=0;
// while (key<10000){
//     key++
// }
// var diff = process.hrtime(time);
// console.log(`耗费${diff[0]}秒${diff[1]}纳秒`)

// 事件,监听exit
// exit
process.on('exit',function () {
    console.log('进程退出')
})

// 捕捉异常
process.on('uncaughtException',function (err) {
    console.log(err,'xiixixi');
})

// 信号事件
process.stdin.resume();
process.on('SIGINT',function () {
    console.log('接收SIGINT事件')
})