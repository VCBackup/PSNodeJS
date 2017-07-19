var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
    var books = [
    {
        title: 'Moby Dick',
        genre: 'Adventure',
        author: 'Herman Melville',
        read: false
    }, 
    {
        title: 'Frankenstein',
        genre: 'Horror',
        author: 'Mary Shelley',
        read: true
    }, 
    {
        title: 'The Count of Monte Cristo',
        genre: 'Adventure',
        author: 'Alexandre Dumas',
        read: false
    }, 
    {
        title: 'The Silmarillion',
        genre: 'Fantasy',
        author: 'J.R.R. Tolkien',
        read: false
    }, 
    {
        title:'Dragons of Autumn Twilight',
        genre: 'Fantasy',
        author: 'Margaret Weis & Tracy Hickman',
        read: true
    }];

    bookRouter.route('/')
        .get(function(req, res, next){
            res.render('bookListView', {
                title: 'Books', 
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function(req, res, next){
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books', 
                nav: nav,
            book: books[id]
        });
    });
    return bookRouter;
}


module.exports = router;