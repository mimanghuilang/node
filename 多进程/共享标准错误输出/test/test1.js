// -- 共享输入 start --
// var fs = require('fs');
// var out = fs.createWriteStream('./message.txt');
// process.stdin.on('data',function (data) {
//     console.log('子进程输入'+data.toString())
//     out.write(data)
// })
// -- 共享输入 end --


// -- 共享输出 start--
// process.stdout.write('共享输出')
// -- 共享输出 end--

// -- 共享错误输出 start--
// process.stderr.write('共享错误输出')
// -- 共享错误输出end--

// -- 多个子进程 start--
process.stdout.write('子进程当前工作的目录为：'+process.cwd());
process.argv.forEach((item,index)=>{
    process.stdout.write('\r\n'+index+':'+item);
})
// -- 多个子进程 end--