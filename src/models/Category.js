// External Dependancies
const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  agency_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Agency'
  },
  articlesCat: Array,
  videosCat: Array,
  albumsCat: Array,
  picturesCat: Array,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { 
    type: Date 
  }
})

module.exports = mongoose.model('Category', CategorySchema)

CategorySchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
