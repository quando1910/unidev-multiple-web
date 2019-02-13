var mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const constructor = require('../core/base/controller')
const APIError = require('../lib/apiError');
let { asyncMiddleware, model } = constructor('User')

module.exports = {
  login: asyncMiddleware(async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      const e = new APIError(404, 'Error. Please enter the correct username and password')
      throw e
    } else {
      const user = await model.findOne({email: req.body.email, password: req.body.password})
      if (user) {
        var defaultTeam = user.agencies.filter(x=> x.default == true)[0]
        const token = jwt.sign({
          id: user._id,
          email: user.email,
          role: defaultTeam.role
        }, 'mykey');
        return { access_token: token, team: defaultTeam._id }
      } else {
        const e = new APIError(401, 'Password or Email is incorrect')
        throw e
      }
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
