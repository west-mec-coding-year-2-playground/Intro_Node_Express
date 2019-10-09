const express = require('express');
const app = express();
app.use(express.static("assets"))
const port = 3000; 

app.set("assets", "./assets")

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Pokemon!'})
});

app.use('/gible', function (req, res) {
    res.send('<title>Gible</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><div class="card" style="width: 18rem;"><div class="card-body"><div align="center" id="sprite"></div><h5 align="center" class="card-title"></h5><p class="card-text"></p><a href="http://localhost:3000/" align="center" class="btn btn-secondary">Back</a></div></div><script src="pokemon.js"></script>')
});

app.use('/cubone', function (req, res) {
    res.send('<title>Cubone</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><div class="card" style="width: 18rem;"><div class="card-body"><div align="center" id="sprite"></div><h5 align="center" class="card-title"></h5><p class="card-text"></p><a href="http://localhost:3000/" align="center" class="btn btn-secondary">Back</a></div></div><script src="pokemon.js"></script>')
});

app.use('/pikachu', function (req, res) {
    res.send('<title>Pikachu</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><div class="card" style="width: 18rem;"><div class="card-body"><div align="center" id="sprite"></div><h5 align="center" class="card-title"></h5><p class="card-text"></p><a href="http://localhost:3000/" align="center" class="btn btn-secondary">Back</a></div></div><script src="pokemon.js"></script>')
});

app.use('/squirtle', function (req, res) {
    res.send('<title>Squirtle</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><div class="card" style="width: 18rem;"><div class="card-body"><div align="center" id="sprite"></div><h5 align="center" class="card-title"></h5><p class="card-text"></p><a href="http://localhost:3000/" align="center" class="btn btn-secondary">Back</a></div></div><script src="pokemon.js"></script>')
});

app.listen(port, () => console.log(`Successfully ran code`))