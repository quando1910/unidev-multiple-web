// Import Swagger documentation
const express = require('express')
const router = express.Router()
const path = require('path')

/* Show a user. */
router.get('/pictures/uploads/*', function (req, res, next) {
  console.log(req.params[0], path.resolve(`./uploads/${req.params[0]}`))
  res.sendfile(path.resolve(`./uploads/${req.params[0]}`));
}); 

module.exports = router
