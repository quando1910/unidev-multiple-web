// External Dependancies
const mongoose = require('mongoose')

const __MODEL__Schema = new mongoose.Schema({
  name: String,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { 
    type: Date 
  }
})

module.exports = mongoose.model('__MODEL__', __MODEL__Schema)

__MODEL__Schema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
