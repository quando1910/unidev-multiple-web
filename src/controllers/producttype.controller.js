const constructor = require('../core/base/controller')
let { actions, asyncMiddleware, model } = constructor('Producttype')

/**
 * Adding new action here
 */

actions.new = asyncMiddleware(async (req, res, next) => {
  return await model.find()
})

module.exports = actions
