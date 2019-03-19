// External Dependancies
const mongoose = require('mongoose')

const ContracttypeSchema = new mongoose.Schema({
  name: String,
  attributes: Object,
  types: Array,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { 
    type: Date 
  }
})

module.exports = mongoose.model('Contracttype', ContracttypeSchema)

ContracttypeSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
