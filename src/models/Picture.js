// External Dependancies
const mongoose = require('mongoose')

module.exports = mongoose.model('Picture', new mongoose.Schema({
  name: String
}))
