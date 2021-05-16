var fs = require('fs');
var out = fs.createWriteStream('./test/message.txt');
process.on('message',function (data) {
  out.write(data)
})