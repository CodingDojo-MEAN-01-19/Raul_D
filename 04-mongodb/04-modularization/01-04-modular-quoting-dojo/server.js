const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
// what port will it be using
const port = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect('mongodb://localhost/quote_dojo', { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('You are connected'));

const quoteSchema = new mongoose.Schema({
  name: String,
  quote: String,
},
  {
    timestamps: Number

  });

const Quote = mongoose.model('quotes', quoteSchema);


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// Routes
require('./server/config/routes.js')(app)


app.listen(port);
console.log(`listening on port ${port}.`);
