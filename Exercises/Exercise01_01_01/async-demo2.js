let fs = require('fs');

fs.readdir('../', (err, data) => console.log('data: ', data));

console.log("This code is still last");

// states the console log, then the data 