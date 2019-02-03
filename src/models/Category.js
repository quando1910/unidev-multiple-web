// External Dependancies
const mongoose = require('mongoose')
var db = mongoose.connection

const CategorySchema = new mongoose.Schema({
  agency_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Agency'
  },
  articlesCat: Array,
  productsCat: Array,
  videosCat: Array,
  albumsCat: Array,
  picturesCat: Array,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { 
    type: Date 
  }
},{ strict: false })

module.exports = Category = mongoose.model('Category', CategorySchema)

CategorySchema.pre('save', function(next) {
  this.updated_at = Date.now()
  next();
})

module.exports.getAllItemInCategory = async function(obj) {
  return await Category.aggregate([
    {
      $lookup: {
        from: `${obj.typeName}`,
        localField: `${obj.typeName}Cat.id`,
        foreignField: 'type',
        as: `items`
      }
    },
    {
      $project: {
        _id: 1,
        agency_id: 1,
        [`${obj.typeName}Cat`]: 1,
        items: {
          $filter: {
             input: "$items",
             as: "item",
             cond: { 
               $eq: [ "$$item.agency_id", mongoose.Types.ObjectId(obj.agencyId) ]
              }
          }
        }
      }
    },
    { '$unwind': '$items' },
    { 
      $addFields: {
        type : {
          $arrayElemAt: [ 
            { 
              $filter: {
                input: `$${obj.typeName}Cat`,
                as: "item",
                cond: { $eq: [ "$$item.id", "$items.type" ] }
              }
            }, 0 ] 
        }
      }
    },
    { 
      $match : {
        agency_id: mongoose.Types.ObjectId(obj.agencyId)
      }
    },
    { $group : 
      { _id : "$type", data: { $push: "$$ROOT" } } 
    }
  ])
}

module.exports.getAllItemInEachCategory = async function(obj) {
  return await Category.aggregate([
    {
      $lookup: {
        from: `${obj.typeName}`,
        localField: `${obj.typeName}Cat.id`,
        foreignField: 'type',
        as: `items`
      }
    },
    {
      $project: {
        _id: 1,
        agency_id: 1,
        [`${obj.typeName}Cat`]: 1,
        items: {
          $filter: {
             input: "$items",
             as: "item",
             cond: { 
               $eq: [ "$$item.agency_id", mongoose.Types.ObjectId(obj.agencyId) ],
               $eq: [ "$$item.type", +obj.id ] 
              }
          }
        }
      }
    },
    { 
      $match : {
        agency_id: mongoose.Types.ObjectId(obj.agencyId)
      }
    }
  ])
}
