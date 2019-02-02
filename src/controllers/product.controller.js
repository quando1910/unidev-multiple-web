const constructor = require('../core/base/controller')
let { actions, model } = constructor('Product')
let ProductType = require('../models/Producttype');

/**
 * Adding new action here
 */

// actions.create = function(req, res, next) {
//   let type = await ProductType.findOne({ type: parseInt(obj.type), agency_id: req.info.team_id })
//   let ownerInfo = {
//     agency_id: req.info.team_id,
//     user_id: req.user.id,
//     type: type
//   }
//   let payload = { ...req.body, ...ownerInfo }
//   const item = new model(payload)
//   return item.save()
// }

module.exports = actions
