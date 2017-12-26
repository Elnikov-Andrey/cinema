var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/index.html', function (req, res) {
    res.send(index.html);
});

app.get('/films.html', function (req, res) {
    res.send(films.html);
});

app.get('/about.html', function (req, res) {
    res.send(about.html);
});

app.get('/contacts.html', function (req, res) {
    res.send(contacts.html);
});

app.listen(3000, function () {
    console.log('On localhost');
});