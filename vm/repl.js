var net = require("net");
repl = require('repl');
var server = net.createServer(function (socket) {
    repl.start({
        prompt:'xixi>',
        input:socket,
        output:socket
    }).on('exit',function () {
        console.log('exit')
        socket.end()
    })
}).listen(5001)