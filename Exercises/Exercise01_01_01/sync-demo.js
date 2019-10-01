let fs = require('fs');
let data = fs.readdirSync('../');
console.log('data: ', data);
console.log("This code is last");

// outputs the data, then the console log 