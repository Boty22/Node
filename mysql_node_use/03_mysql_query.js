/* 03_mysql_query.js
*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "pilita",
  password: "***",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //** 1 **
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log('\n** 1 **\nresult for query: SELECT * FROM customers');
    console.log(result);
  });
  
  //** 2 **
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log('\n** 2 **\nresult for query: SELECT name, address FROM customers');
    console.log(result);
  	//** 3 **
    console.log('\n** 3 **\nfields for query: SELECT name, address FROM customers');
    console.log(fields);
  });


});