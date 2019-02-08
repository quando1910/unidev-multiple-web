// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/picture.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/pictureApi')

const path = require('path')
const multer = require('multer')
const mkdirp = require('mkdirp')
const fs = require('fs')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.exists(`uploads/${file.fieldname}`, function (exists) {
      if (!exists) {
        mkdirp(`uploads/${file.fieldname}`, function (err) {
          if (err) console.error(err)
          else console.log('pow!')
          cb(null, `uploads/${file.fieldname}`)
        })
      } else { 
        cb(null, `uploads/${file.fieldname}`)
      }
    })
   
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

/* GET all users. */
router.get('/', controller.index)

// /* Create a user. */
router.post('/', upload.any(), controller.new)

/* Update a user. */
router.put('/:id', controller.update)

/* Delete a user. */
router.delete('/:id', controller.delete)

router.get('/uploads/*', function (req, res, next) {
  res.sendfile(path.resolve(`./uploads/${req.params[0]}`));
});

module.exports = router
