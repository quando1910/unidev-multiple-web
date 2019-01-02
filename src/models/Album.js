// External Dependancies
const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({
  name: String,
  desc: String,
  cover: String,
  type: Number,
  keyword: Array,
  pictures: Array,
  checkin: String,
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

module.exports = mongoose.model('Album', AlbumSchema)

AlbumSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
