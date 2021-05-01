const express =  require('express');
const app = express();
app.listen(1337,'127.0.0.1')
app.get('/i*.html',(req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><head><meta charset="utf-8"/></head>')
    res.end('您好</html>')
})
// var http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type' : 'text/html'});
//     res.write('<h1>Node.js</h1>');
//     res.end('<p>Hello World</p>');
// }).listen(1337);