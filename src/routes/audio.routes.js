// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/audio.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/audioApi')

/* GET all audios. */
router.get('/', controller.index)

/* Show a audio. */
router.get('/:id', controller.show)

// /* Create a audio. */
router.post('/', controller.new)

/* Update a audio. */
router.put('/:id', controller.update)

/* Update a audio. */
router.patch('/:id', controller.upsert)


/* Delete a audio. */
router.delete('/:id', controller.delete)

module.exports = router
