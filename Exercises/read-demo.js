var fs = require('fs');

// fs.readFile('./data1.json', function (err, data) {
//     console.log(data);
// });
fs.readFile('./data.json', 'utf-8', function (err, data) {
    console.log(data);
});

console.log(data);
console.log(data.name);