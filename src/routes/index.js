// Import routes

const agencyRoutes = require('./agency.routes')
const pictureRoutes = require('./picture.routes')
const userRoutes = require('./user.routes')
const videoRoutes = require('./video.routes')
const express = require('express')
const router = express.Router()

/** GET / - Check service health */
router.get('/api', (req, res) =>
  res.send('OK man')
);

router.use('/api/agencys', agencyRoutes),
router.use('/api/pictures', pictureRoutes),
router.use('/api/users', userRoutes),
router.use('/api/videos', videoRoutes)


module.exports = router

