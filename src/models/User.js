// External Dependancies
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password:  {
    type: String
  },
  phone: {
    type: String,
    default: ''
  },
  accessToken: String,
  avatar: {
    type: String,
    default: ''
  },
  agencies: {
    type: Array
  },
  adminType: {
    type: Number
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
})

module.exports = mongoose.model('User', UserSchema)

UserSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})
