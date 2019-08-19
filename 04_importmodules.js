/*Import modules
Here we learn how to import modules
1) There are built-in modules, that can be use without any further installation.  Ex: http
2)  You can create your own module. For example 03_myfirstmodule. For thi you use export in file of the lirary, and import in the file of the program you want to use the library

*/
var http = require('http');
var dt = require('./03_myfirstmodule');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('The day and time are currently: ' + 
		dt.myDateTime());
	res.end();

}).listen(8080);