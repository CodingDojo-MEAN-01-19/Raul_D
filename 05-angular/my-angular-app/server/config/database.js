const mongoose = require('mongoose');
const path = require('path');
const fs =  require('fs');

const modelsPath = path.resolve('server/models');
//alternitavly
// const modelsPath = path.resolve(__dirname, '../models');
//.. goes up to the server folder

mongoose.connect('mongodb://localhost/books', {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => console.log ("We are connected."));

fs.readdirSync(modelsPath).filter(file =>
 file.endsWith('.js'))
 .forEach(file => require(path.join(modelsPath, file)));
