// External Dependancies
const mongoose = require('mongoose')

const AgencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  avatar: String,
  default: {
    type: Boolean,
    default: false
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { 
    type: Date 
  }
})

module.exports = mongoose.model('Agency', AgencySchema)

AgencySchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
