// External Dependancies
const mongoose = require('mongoose')

const PictureSchema = new mongoose.Schema({
  name: String,
  desc: String,
  path: String,
  type: Number,
  size: Number,
  mimetype: String,
  agency_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Agency'
  },
  album_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Album'
  },
  article_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Article'
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

module.exports = mongoose.model('Picture', PictureSchema)

PictureSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})

