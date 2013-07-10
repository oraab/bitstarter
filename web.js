var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var buffer = new Buffer(60);
app.get('/', function(request, response) {
    buffer = fs.readFileSync('index.html');
    var output = buffer.toString('utf-8'); 
    response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
