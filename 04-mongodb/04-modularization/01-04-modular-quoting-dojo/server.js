const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
// what port will it be using
const port = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//connect to db


//look for models
require('./server/config/mongoose');



// Routes
require('./server/config/routes.js')(app)



app.listen(port);
console.log(`listening on port ${port}.`);
