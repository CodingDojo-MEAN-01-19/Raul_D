const mongoose = require('mongoose');
//config file to connect to database. you can call this file database.js as well.
const fs = require('fs');
const path = require('path');
const models_path = path.join(__dirname, './models'); //this will give us absolute path to the models folder.

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/quote_dojo', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('You are connected'));


fs.readdirSync(models_path).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
})
