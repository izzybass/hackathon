var http = require('http');
var finData = require('fin-data');
 
var hostname = 'localhost';
var port = 8000;
 
http.createServer(function (req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(finData)
  res.end('Hello World\n');
}).listen(port, hostname, function (){
  console.log('Server running at http://' + hostname + ':' + port + '/');
});

