const constructor = require('../core/base/controller')
let { actions, asyncMiddleware, model } = constructor('User')
var Agency = require('../models/Agency')


/**
 * Adding new action here
 */

actions.new = asyncMiddleware(async (req, res, next) => {
  const agenId = req.agen._id ? req.agen._id : req.info.team_id
  const agency = { 
    _id: agenId,
    default: true,
    role: 0
  }
  const user = new model({
    email: req.body.user.email,
    password: req.body.user.password,
    phone: req.body.user.phone,
    name: req.body.user.name,
    age: req.body.user.age,
    adminType: req.body.user.adminType,
    agencies: agency
  })
  return user.save()
})

moreFunction = {
  aboutMe: asyncMiddleware(async (req, res, next) => {
    return await model.aboutMe(req.user.id)
  }),
  editMe: asyncMiddleware(async (req, res, next) => {
    const user = await model.findByIdAndUpdate({_id: req.user.id}, req.body)
    return user
  })
}

module.exports = {...actions, ...moreFunction}
