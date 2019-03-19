// External Dependancies
const mongoose = require('mongoose')

const ContractSchema = new mongoose.Schema({
  representative: String,
  phone1: String,
  phone2: String,
  city: String,
  group: String,
  client: String,
  label: String,
  code: String,
  deposit: Number,
  note: String,
  access_token: String,
  dates: {
    type: Array,
    default: []
  },
  products: {
    type: Array,
    default: []
  },
  arising: {
    type: Array,
    default: []
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { 
    type: Date 
  }
})

module.exports = mongoose.model('Contract', ContractSchema)

ContractSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
