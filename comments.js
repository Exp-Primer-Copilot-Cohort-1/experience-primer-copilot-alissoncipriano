// Create web server application
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    // Open a file on the server and return its content
    fs.readFile('demo_comment.html', function (err, data) {
        // HTTP header with content type (text/html)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);