// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/category.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/categoryApi')

/* GET all categorys. */
router.get('/', controller.index)

/* Show a category. */
router.get('/all', controller.indexAll)

router.get('/:id', controller.show)


// /* Create a category. */
router.post('/', controller.new)

/* Update a category. */
router.put('/:id', controller.update)

/* Delete a category. */
router.delete('/:id', controller.delete)

module.exports = router
