// External Dependancies
const mongoose = require('mongoose')

const AudioSchema = new mongoose.Schema({
  name: String,
  desc: String,
  title: String,
  path: String,
  type: Number,
  size: Number,
  agency_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Agency'
  },
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { 
    type: Date 
  }
})

module.exports = mongoose.model('Audio', AudioSchema)

AudioSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
