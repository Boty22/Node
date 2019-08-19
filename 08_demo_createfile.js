/*Create files
fs.appendFile()
fs.open()
fs.writeFile()
*/

var  fs =  require('fs');

/*fs.appendFile('nynewfile1.txt','Hello content!', function(err){
	if(err) throw err;
	console.log('Saved!');
});*/

/*fs.open('mynewfile2.txt','w',function(err,file){
	if(err) throw err;
	console.log('Saved file2!');
});*/

fs.writeFile('mynewfile3.txt','Content for file3',function(err){
	if(err) throw err;
	console.log('Saved file3!');
})
