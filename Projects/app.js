var express = require('express');
var app = express();
var fs = require('fs');
var port = 8080;

app.use(express.static(__dirname));



app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});

app.use('/evolve', function (req, res) {
    res.send(" <link rel='stylesheet' href='styles.css'><div id='card'><h1>Pokemon<h1><div id='spriteE'></div><script src='fetch.js ' async></script><button> <a href='/'> Pre-Evolution</a></button></div>");
});