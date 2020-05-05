const http = require('http');

http.createServer(function(request, response){

console.log('Yes, server is created.');

//send the http header stating the response is of text type 
//and 
//http status code : 200 - OK

let currentTime = new Date();

response.writeHead(200, { 'Content-Type': 'text/plain' });

response.end('Hello Worlsd\n ' + currentTime);

}).listen(3000);


console.log('Server running');
