var mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const constructor = require('../core/base/controller')
let { asyncMiddleware, model } = constructor('User')

module.exports = {
  login: asyncMiddleware(async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return 'Error. Please enter the correct username and password'
    } else {
      const user = await model.findOne({email: req.body.email, password: req.body.password})
      var defaultTeam = user.agencies.filter(x=> x.default == true)[0]
      const token = jwt.sign({
        id: user._id,
        email: user.email,
        role: defaultTeam.role
      }, 'mykey');
      return {access_token: token, team: defaultTeam._id}
    }
  }),
  logout: async (req, res, next) => {
    const user = model.find((u) => {
      return u.username === req.body.username && u.password === req.body.password;
    });
    const token = ''
    return {access_token: token}
  }
}
