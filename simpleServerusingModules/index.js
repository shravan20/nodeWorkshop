const http = require('http');

const url = require('url');

const fs = require('fs');



http.createServer(function(request, response){
    console.log('Server is On!!!')
    var q = url.parse(request.url, true);
    var filename = '.' + q.pathname

    fs.readFile(filename, function(err, data){

        if(err){
            response.writeHead(400, {'Content-Type': 'text/html'});
            return response.end('not found');
        }

        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });

}).listen(3000);