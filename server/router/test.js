
var fs = require('fs');
var data = fs.readFileSync("users.json", "utf8");
var data1 = JSON.parse(data);

console.log(data1.myarray[1].username);


