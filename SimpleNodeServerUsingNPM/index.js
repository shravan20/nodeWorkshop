const http = require('http');
const moment = require('moment');


http.createServer(function(request, response){

console.log('Yes, server is created.');

//send the http header stating the response is of text type 
//and 
//http status code : 200 - OK


let currentTime = moment().format('dddd');       

response.writeHead(200, { 'Content-Type': 'text/plain' });

response.end('Hello World\n ' + currentTime);

}).listen(3000);


console.log('Server running');
