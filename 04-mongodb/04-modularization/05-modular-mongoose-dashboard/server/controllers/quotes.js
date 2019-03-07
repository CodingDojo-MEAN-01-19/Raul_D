const Quote = require('mongoose').model('quotes')
//controler
// All necessary requires, such as the Quote model.
//exports to the routes file.
module.exports = {
  index: function (req, res) {
    res.render('index');
  },
  quote: function (req, res) {
    Quote.find({}, function (err, quotes) {
      if (err) { console.log(err); }
      res.render('quotes', { quotes: quotes });
    });
  },
  quote_post: function (req, res) {
    Quote.create(req.body, function (err) {
      if (err) { console.log(err); }
      res.redirect('/quotes');
    });
  }
};
