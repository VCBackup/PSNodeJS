var express = require('express');
var ejsLint = require('ejs-lint');

var app = express();

var port = process.env.PORT || 5000;

ejsLint('index');
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res, next){
    res.render('index', {title: 'Hello from the Render!', list: ['a', 'b']});
});

app.get('/books', function(req, res, next){
    res.send('Hello Books!');
});

app.listen(port, function(err){
    console.log('Server running on port: ' + port);
});