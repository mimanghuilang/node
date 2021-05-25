const fs = require('fs');
const out = fs.createWriteStream('./message.txt');
process.stdin.on('data',function (data) {
    out.write(data)
})
process.stdin.on('end',function (data) {
    process.exit()
})