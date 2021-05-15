// process.stderr.write('子进程当前的工作目录为：'+process.cwd());
// process.argv.forEach((item,index)=>{
//     process.stderr.write('\r\n'+index+':'+item)
// })
process.stdin.on('data',function (data) {
    console.log(data,'子进程')

})