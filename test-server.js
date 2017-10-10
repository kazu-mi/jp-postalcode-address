var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello!\n');
}).listen(3000, '127.0.0.1');

var jp = require('./index');
console.log(jp);

jp('182-0033', function (result) {
  console.log(result.response.location);
}, function (error) {
  console.log(error);
});
