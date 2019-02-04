const constructor = require('../core/base/controller')
let { actions, asyncMiddleware, model } = constructor('Aspect')

/**
 * Adding new action here
 */
actions.new = asyncMiddleware(async (req, res, next) => {
  var type = `${req.body.type}List`
  return await model.findOneAndUpdate( 
    { agency_id: req.info.team_id },
    { $push: { [type] : req.body.id } },
    { upsert: true, new: true})
})

actions.index = asyncMiddleware(async (req, res, next) => {
  const aspects = await model.findOne({ agency_id: req.info.team_id })
  // return Aspect.getAllItemInAspects(aspects[`${req.query.type}List`])
  return model.getAllItemInAspects(aspects[`${req.query.type}List`])
})

actions.indexItem = asyncMiddleware(async (req, res, next) => {
  let cond = {}
  if (req.headers['agency-id']) {
    cond = { agency_id: req.headers['agency-id'] }
  } else if (req.info.team_id) {
    cond = { agency_id: req.info.team_id }
  }
  const queryCond = req.query
  cond = {...cond, ...queryCond}
  return model.getAllInOneAspect(cond)
})

module.exports = actions
