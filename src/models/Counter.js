var mongoose = require('mongoose');
//Place schema
var CounterSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  sequence_value: {
    type: Number
  }
});

var Counter = module.exports = mongoose.model('Counter', CounterSchema)
