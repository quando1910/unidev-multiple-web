// Import Swagger documentation
const express = require('express')
const router = express.Router()
const picController = require(`../controllers/picture.controller`)
const audioController = require(`../controllers/audio.controller`)
const fileController = require(`../controllers/file.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/pictureApi')

const path = require('path')
const multer = require('multer')
const mkdirp = require('mkdirp')
const fs = require('fs')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const savePath = `uploads/${req.info.web}/${file.fieldname}` 
    fs.exists(savePath, function (exists) {
      if (!exists) {
        mkdirp(savePath, function (err) {
          if (err) console.error(err)
          else console.log('pow!')
          cb(null, savePath)
        })
      } else { 
        cb(null, savePath)
      }
    })
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

// /* upload pictures. */
router.post('/pictures', upload.any(), picController.new)

// /* upload audios. */
router.post('/files', upload.any(), fileController.new)

// /* upload files. */
router.post('/audios', upload.any(), audioController.new)

module.exports = router
