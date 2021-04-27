var fs= require('fs');
var out = fs.createWriteStream('./message.txt');
process.stdin.on('data',(data)=>{
    out.write(data)
})
process.stdin.on('end',function (data) {
    process.exit();
})