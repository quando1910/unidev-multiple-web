// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/album.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/albumApi')

/* GET all albums. */
router.get('/', controller.index)

/* Show a album. */
router.get('/:id', controller.show)

// /* Create a album. */
router.post('/', controller.new)

/* Update a album. */
router.put('/:id', controller.update)

/* Delete a album. */
router.delete('/:id', controller.delete)

module.exports = router
