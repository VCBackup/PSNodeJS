var express = require('express');
var ejsLint = require('ejs-lint');

var app = express();

var port = process.env.PORT || 5000;

var nav = [{
            Link: '/books',
            Text: 'Book'
            }, {
            Link: '/authors',
            Text: 'Author'
            }];

var bookRouter = require('./src/routes/bookRoutes') (nav);

ejsLint('index');
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter)

app.listen(port, function(err){
    console.log('Server running on port: ' + port);
});