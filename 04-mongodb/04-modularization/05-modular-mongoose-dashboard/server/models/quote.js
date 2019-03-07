const mongoose = require('mongoose');

//models
const quoteSchema = new mongoose.Schema({
  name: String,
  quote: String,
},
  {
    timestamps: Number

  });

module.exports = mongoose.model('quotes', quoteSchema);
