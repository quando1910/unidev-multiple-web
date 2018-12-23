var mongoose = require('mongoose')
const constructor = require('../core/base/controller')
let { asyncMiddleware, model } = constructor('User')

module.exports = {
  check: asyncMiddleware(async (req, res, next) =>  {
    console.log('asdfasdfasasdf')
    // const user = await model.findOne({_id: req.user.id})
    // if (user.agencies.length > 0) {
    //   const team = user.agencies.filter(x => x.default === true)[0]
    //   res.locals.header = {team_id: team._id, role: team.role};
    //   console.log('Auth is OK')
    //   next()
    // }
  })
}
