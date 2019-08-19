/*Node.js File System Module
*/
var http = require('http');
var fs = require('fs');
//Read a file
http.createServer(function(req,res){
	fs.readFile('demofile1.html', function(err,data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);