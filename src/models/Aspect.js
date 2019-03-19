// External Dependancies
const mongoose = require('mongoose')
const db = mongoose.connection
let Producttype = require('./Producttype');

const AspectSchema = new mongoose.Schema({
  agency_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Agency'
  },
  productsList: Array,
  contractsList: Array,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { 
    type: Date 
  }
})

module.exports = mongoose.model('Aspect', AspectSchema)

AspectSchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})

module.exports.getAllItemInAspects = async function(obj) {
  return await Producttype.find({'_id': { $in: obj}})
}

module.exports.getAllInOneAspect = async function(obj, callback) {
  let Product = require('./Product');
  return await Product.aggregate([
    { 
      $match : {
        belongs_to: mongoose.Types.ObjectId(obj.id),
        agency_id: mongoose.Types.ObjectId(obj.agency_id)
      }
    }
  ]);
}
