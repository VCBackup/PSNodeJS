var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function(req, res, next){
    res.send('Hello World!');
});

app.get('/books', function(req, res, next){
    res.send('Hello Books!');
});

app.listen(port, function(err){
    console.log('Server running on port: ' + port);
});