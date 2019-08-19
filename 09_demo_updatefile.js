/*Update Files
fs.appendFile()
fs.writeFile()
*/
var fs = require('fs');
fs.appendFile('mynewfile1.txt','This is the text i want to append\n',function(err){
	if(err) throw err;
	console.log('Updated!');
})