var mongoose = require('mongoose')
const constructor = require('../core/base/controller')
let { asyncMiddleware, model } = constructor('User')

module.exports = {
  check: async (req, res, next) =>  {
    try {
      const user = await model.findOne({_id: req.user.id})
      if (user.agencies.length > 0) {
        const team = user.agencies.filter(x => x.default === true)[0]
        req.info = {team_id: team._id, role: team.role};
        console.log('Auth is OK')
        next()
      }
    } catch (e) {
      res.send(e)
    }
  }
}
