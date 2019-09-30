let myModule = require('./my-module.js');

// Can be treated like an object, because it is holding the exports object
console.log('Text from the external module: ', myModule.myText);

