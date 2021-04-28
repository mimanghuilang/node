// 开启子进程
/**
 * stdio 输入，输出，错误输出
 * pipe 父进程和子进程创建管道
 * ipc   父进程和子进程创建一个专用于传递信息或文件描述符号IPC通道
 * ignore 指定不为子进程设置文件描述符
 * stream 用于指定父进程与子进程共享一个终端设备、文件、端口或管道
 * 正整数值，指定父进程中被打开文件的文件描述符
 * null,undefined 略
 */
const cp = require('child_process');
const sp1 = cp.spawn('node', ['test1.js', 'one', 'two', 'three', 'four'], {stdio:undefined,cwd:'./test'})
const sp2 = cp.spawn('node', ['test2.js'], {stdio: 'pipe',cwd:'./test',detached:true})
// exit 事件触发可能不触发close
console.log(sp1);
sp1.stdout.on('data',function (data) {
    console.log(`子进程标准输出${data}`)
    sp2.stdin.write(data)
    sp1.kill()
})
// sp1.kill()
sp1.on('exit', function (code, signal) {
    if(!code){
        console.log('子进程退出'+signal)
    }else{
        console.log('子进程退出code'+code)
    }
    console.log(`子进程退出${code},${signal}`)
    process.exit()
})
sp1.on('error',function (err) {
    console.log('sp1子进程开启失败'+err);
    process.exit();
})
sp2.on('error',function (err) {
  console.log('sp2子进程开启失败'+err);
  process.exit();
})
process.on('exit',function (code,signal) {
    console.log(`父进程退出${code},${signal}`)
})