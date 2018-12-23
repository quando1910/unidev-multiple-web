const express = require('express')
const router = express.Router()
const validate = require('express-validation')
// const Validation = require('../lib/Validation')
const controller = require('../controllers/auth.controller')


/* Create a user. */
router.post('/', controller.login)

// router.get('/', controller.check)

module.exports = router