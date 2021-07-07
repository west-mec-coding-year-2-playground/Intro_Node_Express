var express = require('express');
var app = express();
var fs = require('fs');
var port = 8080;
const fetch = require('node-fetch');
app.set('view engine', 'pug')
app.use(express.static(__dirname));

app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});
app.get('/', function (req, res) {
    res.render('index')
})

app.use('/honedge', function (req, res) {
    res.send("<link rel='stylesheet' href='styles.css'><div class='card'><img src='pokemon.png' alt='pokemon'><div id='name'></div><div id='spriteH'></div><script src='fetch.js' async></script><button> <a href='/'> Back</a></button><button> <a href='/doublade'> Level 35</a></button></div>");
});
app.use('/doublade', function (req, res) {
    res.send(" <link rel='stylesheet' href='styles.css'><div class='card'><img src='pokemon.png' alt='pokemon'><div id='name'></div><div id='spriteD'></div><script src='fetch.js' async></script><button> <a href='/honedge'> Back</a></button><button> <a href='/aegislash'> Dusk Stone</a></button></div>");
});
app.use('/aegislash', function (req, res) {
    res.send(" <link rel='stylesheet' href='styles.css'><div class='card'><img src='pokemon.png' alt='pokemon'><div id='name'></div><div id='spriteS'></div><script src='fetch.js' async></script><button> <a href='/doublade'> Back</a></button></div>");
});

app.use('/abra', function (req, res) {
    res.send(" <link rel='stylesheet' href='styles.css'><div class='card'><img src='pokemon.png' alt='pokemon'><div id='name'></div><div id='sprite'></div><script src='fetch.js' async></script><button> <a href='/'> Back</a></button><button> <a href='/kadabra'> Level 16</a></button></div>");
});

app.use('/kadabra', function (req, res) {
    res.send(" <link rel='stylesheet' href='styles.css'><div class='card'><img src='pokemon.png' alt='pokemon'><div id='name'></div><div id='spriteK'></div><script src='fetch.js' async></script><button> <a href='/abra'> Back</a></button><button> <a href='/alakazam'> Trade</a></button></div>");
});
app.use('/alakazam', function (req, res) {
    res.send(" <link rel='stylesheet' href='styles.css'><div class='card'><img src='pokemon.png' alt='pokemon'><div id='name'></div><div id='spriteA'></div><script src='fetch.js' async></script><button> <a href='/kadabra'> Back</a></button><button> <a href='/alakazam-mega'>Alakazite</a></button></div>");
});
app.use('/alakazam-mega', function (req, res) {
    res.send(" <link rel='stylesheet' href='styles.css'><div class='card'><img src='pokemon.png' alt='pokemon'><div id='name'></div><div id='spriteM'></div><script src='fetch.js' async></script><button> <a href='/alakazam'> Back</a></button></div>");
});