// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/file.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/fileApi')

/* GET all files. */
router.get('/', controller.index)

/* Show a file. */
router.get('/:id', controller.show)

// /* Create a file. */
router.post('/', controller.new)

/* Update a file. */
router.put('/:id', controller.update)

/* Delete a file. */
router.delete('/:id', controller.delete)

module.exports = router
