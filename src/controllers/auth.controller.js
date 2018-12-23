var mongoose = require('mongoose')
var User = require('../models/user')
const jwt = require('jsonwebtoken')
let { asyncMiddleware } = constructor('Auth')

module.exports = {
  login : asyncMiddleware(async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      res.status(400).send("Error. Please enter the correct username and password");
      return;
    } else {
      const user = User.findOne({email: req.body.email, password: req.body.password})
      var defaultTeam = user.agencies.filter(x=> x.default == true)[0]
      const token = jwt.sign({
        id: user._id,
        email: user.email,
        role: defaultTeam.role
      }, 'mykey', {expiresIn: '3 hours'});
      return {access_token: token, team: defaultTeam._id}
    }
  }),
  logout : asyncMiddleware(async (req, res, next) => {
    const user = User.find((u) => {
      return u.username === req.body.username && u.password === req.body.password;
    });
    const token = ''
    return {access_token: token}
  })
}
