const readline = require('readline')
var r1 = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
})
// r1.setPrompt('请输入',123);
// r1.prompt();
// r1.on('line',function (line) {
//   console.log(line);
//   r1.prompt()
// })
// r1.on('close',function () {
//   console.log('\r\n嘻嘻嘻')
// })
r1.question('您好么',function (answer) {
  console.log(answer);
})
console.log('xixi 0842 t2')