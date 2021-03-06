// External Dependancies
const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
  title: String,
  desc: String,
  thumbnail: String,
  type: Number,
  keyword: Array,
  content: String,
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

module.exports = mongoose.model('Article', ArticleSchema)

ArticleSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
