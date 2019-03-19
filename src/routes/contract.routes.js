// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/contract.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/contractApi')

/* GET all contracts. */
router.get('/', controller.index)

/* Show a contract. */
router.get('/:id', controller.show)

// /* Create a contract. */
router.post('/', controller.new)

/* Update a contract. */
router.put('/:id', controller.update)

/* Delete a contract. */
router.delete('/:id', controller.delete)

module.exports = router
