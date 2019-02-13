const constructor = require('../core/base/controller')
let { actions, model, asyncMiddleware } = constructor('Agency')

/**
 * Adding new action here
 */

actions.new = async (req, res, next) => {
  const item = new model(req.body)
  req.agen = await item.save()
  next()
}

actions.update = asyncMiddleware( async (req, res, next) => {
  const id = req.params.id
  const car = req.body
  const { ...updateData } = car
  return await model.findOneAndUpdate({ _id: id }, updateData, { new: true })
})

module.exports = actions
