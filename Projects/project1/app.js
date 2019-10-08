const express = require('express');
const app = express();
app.use(express.static("assets"))
const port = 3000; 

app.set("assets", "./assets")

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'testing'})
});

app.use('/gible', function (req, res) {
    res.send("<script src='pokemon2.js'>console.log('hello')</script>")
});

// app.use('/cubone', function (req, res) {
//     res.send('')
// });

// app.use('/gible', function (req, res) {
//     res.send('')
// });

// app.use('/gible', function (req, res) {
//     res.send('')
// });

app.listen(port, () => console.log(`Successfully ran code`))