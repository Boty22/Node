/*Display Hello World in the Browser
Based on W3Schools tutorial

The code tells the computer to write "Hello World!" 
if anyone (e.g. a web browser) tries to access 
your computer on port 8080.

Now your computer works a server!!
You can check this in the following ways:

1) Open the browser and type:
http://localhost:8080

2) $ curl http://localhost:8080 

*/

var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('Hello World!');
}).listen(8080);
