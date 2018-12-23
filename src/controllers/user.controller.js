const constructor = require('../core/base/controller')
let { actions, asyncMiddleware, model } = constructor('User')
var Agency = require('../models/Agency')


/**
 * Adding new action here
 */

actions.new = asyncMiddleware(async (req, reply) => {
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
  return user
})

module.exports = actions
