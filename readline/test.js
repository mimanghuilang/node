const readline = require('readline')
const fs = require('fs')
const file = fs.createReadStream('./message.txt');
const out = fs.createWriteStream('./another-message.txt');

var index=1;
out.write('line'+index.toString()+':\n');
index+=1

var r1 = readline.createInterface({
  input:file,
  output:out,
  terminal:true
})
r1.on('line',function (line) {
  console.log(line);
  out.write('line'+index.toString()+':\n');
  index+=1;
})
file.on('end',function () {
  console.log('end')
})
r1.on('close',function () {
  console.log('结束了')
})
console.log('test1 提交test1')