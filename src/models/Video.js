// External Dependancies
const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  name: String,
  desc: String,
  type: Number,
  link: String,
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

module.exports = mongoose.model('Video', VideoSchema)

VideoSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
