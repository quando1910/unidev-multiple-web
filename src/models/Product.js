// External Dependancies
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  type: Number,
  costHire: Number,
  thumbnail: String,
  costBuy: Number,
  shortDesc: String,
  brand: String,
  desc: String,
  attributes: Object,
  belongs_to: {
    type: mongoose.Schema.ObjectId,
    ref: 'Producttype'
  },
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

module.exports = mongoose.model('Product', ProductSchema)

ProductSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
