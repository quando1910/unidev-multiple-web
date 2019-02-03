// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/producttype.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/producttypeApi')

/* GET all producttypes. */
router.get('/', controller.index)

/* Show a producttype. */
router.get('/:id', controller.show)

// /* Create a producttype. */
router.post('/', controller.new)

/* Update a producttype. */
router.put('/:id', controller.update)

/* Delete a producttype. */
router.delete('/:id', controller.delete)

module.exports = router
