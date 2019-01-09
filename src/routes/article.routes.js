// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/article.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/articleApi')

/* GET all articles. */
router.get('/', controller.index)

/* Show a article. */
router.get('/:id', controller.show)

// /* Create a article. */
router.post('/', controller.new)

/* Update a article. */
router.put('/:id', controller.update)

/* Delete a article. */
router.delete('/:id', controller.delete)

module.exports = router
