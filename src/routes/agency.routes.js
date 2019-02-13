// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/agency.controller`)
const userCtrl = require(`../controllers/user.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/agencyApi')

/* GET all agencys. */
router.get('/', controller.index)

/* Show a agency. */
router.get('/:id', controller.show)

// /* Create a agency. */
router.post('/', controller.new, userCtrl.new)

/* Update a agency. */
router.put('/:id', controller.update)

/* Delete a agency. */
router.delete('/:id', controller.delete)

module.exports = router
