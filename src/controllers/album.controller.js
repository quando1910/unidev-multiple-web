const constructor = require('../core/base/controller')
let { actions, model } = constructor('Album')

/**
 * Adding new action here
 */

// actions.publicIndex = asyncMiddleware(async (req, res, next) => {
//   return await model.find( 
//     { agency_id: req.info.team_id })
// })



module.exports = actions
