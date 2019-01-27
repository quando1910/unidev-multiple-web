const constructor = require('../core/base/controller')
const Counter = require('../models/Counter')
const Article = require('../models/Article')
let { actions, asyncMiddleware, model } = constructor('Category')


/**
 * Adding new action here
 */

actions.new = asyncMiddleware(async (req, res, next) => {
  let counterId = await Counter.findOneAndUpdate( 
    { _id: `${req.body.type}Cat` }, 
    { $inc: { sequence_value: 1 }},
    { upsert: true, new: true })
  var type = `${req.body.type}Cat`
  let obj = { id: counterId.sequence_value, key: req.body.name} 
  return await model.findOneAndUpdate( 
    { agency_id: req.info.team_id },
    { $push: { [type] : obj } },
    { upsert: true, new: true})
})

actions.index = asyncMiddleware(async (req, res, next) => {
  const categories = await model.findOne({ agency_id: req.info.team_id })
  return categories[`${req.query.type}Cat`]
})

actions.indexwCode = asyncMiddleware(async (req, res, next) => {
  return await model.getAllItemInCategory({typeName: req.query.type, agencyId: req.headers['agency-id']})
})

actions.publicIndex = asyncMiddleware(async (req, res, next) => {
  const categories = await model.findOne({ agency_id: req.params.agencyId })
  return categories[`${req.query.type}Cat`]
})

actions.indexAll = asyncMiddleware(async (req, res, next) => {
  return await model.findOne({ agency_id: req.info.team_id })
})

actions.show = asyncMiddleware(async (req, res, next) => {
  const categories = await model.findOne({ agency_id: req.info.team_id })
  return categories[`${req.query.type}Cat`].filter(x => x.id == req.params.id)[0]
})

actions.publicShow = asyncMiddleware(async (req, res, next) => {
  const categories = await model.findOne({ agency_id: req.params.agencyId })
  return categories[`${req.query.type}Cat`].filter(x => x.id == req.params.id)[0]
})

actions.update = asyncMiddleware(async (req, res, next) => {
  return await model.update({ 
      agency_id: req.info.team_id, 
      [`${req.params.id}Cat.id`]: +req.body.id 
    },
    {
      '$set': {
        [`${req.params.id}Cat.$.key`]: req.body.key
      }
    })
})

actions.delete = asyncMiddleware(async (req, res, next) => {
  let result = await model.update({ agency_id: req.info.team_id},
    { $pull: {
        [`${req.params.id}Cat`]: { id: +req.query.id }
      },
    },
    { multi: true })
    if (result.nModified) {
      return await Counter.findOneAndUpdate( 
        { _id: `${req.params.id}Cat` }, 
        { $inc: { sequence_value: -1 }},
        { upsert: true, new: true })
    }
})

module.exports = actions
