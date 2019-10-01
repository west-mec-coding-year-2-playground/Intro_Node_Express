let fs = require('fs');

// reading a directory with an asynchronous function 
fs.readdir('../', (err, data) => {console.log(data)});