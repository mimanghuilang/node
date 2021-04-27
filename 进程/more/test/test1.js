process.stdout.write("子进程当前的目录为"+process.cwd());
process.argv.forEach((item,index)=>{
    process.stdout.write('\r\n'+index+':'+item);
})