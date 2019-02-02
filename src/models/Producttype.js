// External Dependancies
const mongoose = require('mongoose')

const ProducttypeSchema = new mongoose.Schema({
  name: String,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { 
    type: Date 
  }
})

module.exports = mongoose.model('Producttype', ProducttypeSchema)

ProducttypeSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
