let fs = require('fs'); 

// unoptimal way to write JSON object
// let jsonString = '{"name": "John"}';

// better way to write JSON object, using JSON.stringify later 
let jsonString = {
    name: 'John'
};

fs.writeFile('data2.json', JSON.stringify(jsonString), (err) => {
    if (err) {
        console.log(err);
    }
})