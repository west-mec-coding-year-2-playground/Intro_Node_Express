const express = require('express');
const app = express();
app.use(express.static("assets"))
const port = 3000; 

app.set("assets", "./assets")

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'testing'})
});

app.listen(port, () => console.log(`Successfully ran code`))