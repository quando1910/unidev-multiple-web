// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/video.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/videoApi')

/* GET all videos. */
router.get('/', controller.index)

/* Show a video. */
router.get('/:id', controller.show)

// /* Create a video. */
router.post('/', controller.new)

/* Update a video. */
router.put('/:id', controller.update)

/* Delete a video. */
router.delete('/:id', controller.delete)

module.exports = router
