// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/__MODEL__.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/__MODEL__Api')

/* GET all __MODEL__s. */
router.get('/', controller.index)

/* Show a __MODEL__. */
router.get('/:id', controller.show)

// /* Create a __MODEL__. */
router.post('/', controller.new)

/* Update a __MODEL__. */
router.put('/:id', controller.update)

/* Delete a __MODEL__. */
router.delete('/:id', controller.delete)

module.exports = router
