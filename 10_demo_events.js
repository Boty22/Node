/*10_demo_events.js
Node.js is perfect for even-driven applications
Evey action in the computer is an event
Objects in Node.js can fire events, like readStream when 
opening and closing a l
*/
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open',function(){
	console.log('The file is open');
});