// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/contracttype.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/contracttypeApi')

/* GET all contracttypes. */
router.get('/', controller.index)

/* Show a contracttype. */
router.get('/:id', controller.show)

// /* Create a contracttype. */
router.post('/', controller.new)

/* Update a contracttype. */
router.put('/:id', controller.update)

/* Delete a contracttype. */
router.delete('/:id', controller.delete)

module.exports = router
