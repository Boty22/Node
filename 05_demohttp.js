/* 05_demohttp

http Module
Built-in module that allows Node.js to transfer data 
over HTTP
*/
var http = require('http');

/* Node as a Web Server
The http module can create an HTTP sever that listens 
to server ports and gives a response back to the client
*/

// Create a server object:
http.createServer(function(req,res){
	/*If the  response from the HTTP server is supposed to 
	be displayed as HTML, you should include and HTTP header
	with the correct content type
	*/
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World!. after the domain you put:');
	/*The req argument representes the request from the client
	object (http.IncomingMessage object) this has a property called url*/
	res.write(req.url);
	res.end();
}).listen(8080);



