// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/aspect.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/aspectApi')

/* GET all aspects. */
router.get('/', controller.index)

router.get('/items', controller.indexItem)

/* Show a aspect. */
router.get('/:id', controller.show)

// /* Create a aspect. */
router.post('/', controller.new)

/* Update a aspect. */
router.put('/:id', controller.update)

/* Delete a aspect. */
router.delete('/:id', controller.delete)

module.exports = router
