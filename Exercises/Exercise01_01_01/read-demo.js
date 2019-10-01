// gets the file system library from the API
let fs = require('fs');

// reads the JSON file with an asynchronous function 
fs.readFile('./data1.json', 'utf-8', (err, data) => {
    // console.log(data);
    data = JSON.parse(data);
    console.log(data.name);
});