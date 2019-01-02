const constructor = require('../core/base/controller')
let { actions, asyncMiddleware, model } = constructor('User')
var Agency = require('../models/Agency')


/**
 * Adding new action here
 */

actions.new = asyncMiddleware(async (req, res, next) => {
  let agency = new Agency(req.body.agency)
  const agen = await agency.save()
  agen['role'] = 0
  const user = new model({
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    name: req.body.name,
    age: req.body.age,
    adminType: req.body.adminType,
    agencies: agen
  })
  return user.save()
})

moreFunction = {
  aboutMe: asyncMiddleware(async (req, res, next) => {
    const user = await model.findOne({_id: req.user.id})
    return user
  }),
  editMe: asyncMiddleware(async (req, res, next) => {
    const user = await model.findByIdAndUpdate({_id: req.user.id}, req.body)
    return user
  })
}

module.exports = {...actions, ...moreFunction}
