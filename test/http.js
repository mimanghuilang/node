var http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<head><meta charset="utf-8"></head>');
    res.write('<body>');
    res.write('<div>工作狂和自恋逛</div>')
    res.write('<div>你好\n</div>')
    res.end('</body>')

}).listen(1337,"127.0.0.1");
console.log('Servver running at http://127.0.0.1:1337/')
