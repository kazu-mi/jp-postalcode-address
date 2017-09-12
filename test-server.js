var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello!\n');
}).listen(3000, '127.0.0.1');

var jp = require('./index');
console.log(jp);

jp('1820033', function (response) {
  console.log(response);
}, function (error) {
  console.log(error);
});
