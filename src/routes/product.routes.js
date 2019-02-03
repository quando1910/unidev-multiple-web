// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/product.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/productApi')

/* GET all products. */
router.get('/', controller.index)

/* Show a product. */
router.get('/:id', controller.show)

// /* Create a product. */
router.post('/', controller.new)

/* Update a product. */
router.put('/:id', controller.update)

/* Delete a product. */
router.delete('/:id', controller.delete)

module.exports = router
