const mongoose = require('mongoose'),
quotes = require('../controllers/quotes.js'),
Quote = mongoose.model('quotes')

//config
//exports to the server
module.exports = function(app){
app.get('/', quotes.index)

app.get('/quotes', quotes.quote)

app.post('/quotes', quotes.quote_post)
};

// module.exports = function (app) {
//   app.get('/', function (req, res) {
//     res.render('index');
//   });

//   app.get('/quotes', function (req, res) {
//     Quote.find({}, function (err, quotes) {
//       if (err) { console.log(err); }
//       res.render('quotes', { quotes: quotes });
//     });
//   });

//   app.post('/quotes', function (req, res) {
//     Quote.create(req.body, function (err) {
//       if (err) { console.log(err); }
//       res.redirect('/quotes');
//     });
//   });


// }
