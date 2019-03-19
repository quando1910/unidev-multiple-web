const constructor = require('../core/base/controller')
let { actions, model } = constructor('Contracttype')

/**
 * Adding new action here
 */

actions.index = asyncMiddleware(async (req, res, next) => {
  return await model.find()
})

module.exports = actions
