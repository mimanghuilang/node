process.stdout.write('子进程当前的工作目录为'+process.cwd());
process.argv.forEach((item,index)=>{
    process.stdout.write('\r\n'+index+':'+item);
})