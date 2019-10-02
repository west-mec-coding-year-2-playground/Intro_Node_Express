let express = require('express');
let app = express();
let port = 8080;

// serving some static content 
app.use(express.static(__dirname));

// turning our node.js applicatoin into a server 
app.listen(port, () => console.log('Server listening on localhost:%s', port););


