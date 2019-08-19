/* 06_demo_querystring

url Module
Built-in module to easily split the query string into readable parts
*/
var http = require('http');
var url = require('url');

// Create a server object:
http.createServer(function(req,res){
	/*If the  response from the HTTP server is supposed to 
	be displayed as HTML, you should include and HTTP header
	with the correct content type
	*/
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.end(txt);
}).listen(8080);



