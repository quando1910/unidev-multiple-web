var mongoose = require('mongoose');
var User = require('../models/user');

module.exports = {
  check: asyncMiddleware(async (req, res, next) =>  {
    if (user.agencies.length > 0) {
      const team = user.agencies.filter(x => x.default === true)[0]
      res.locals.header = {team_id: team._id, role: team.role};
      console.log('Auth is OK')
      next()
    }
  })
}
