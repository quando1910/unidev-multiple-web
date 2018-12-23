// Import routes
const authRoutes = require('./auth.routes')
const agencyRoutes = require('./agency.routes')
const pictureRoutes = require('./picture.routes')
const userRoutes = require('./user.routes')
const videoRoutes = require('./video.routes')
const express = require('express')
const router = express.Router()
const expressjwt = require('express-jwt')

const jwtCheck = expressjwt({
  secret: 'mykey'
});

/** GET / - Check service health */
router.get('/api', (req, res) =>
  res.send('OK man')
);

router.get('/api/checkLogin',jwtCheck, (req, res) =>
  res.status(200).send('Login Successful')
);

router.use('/api/auth', authRoutes),
router.use('/api/agencys', agencyRoutes),
router.use('/api/pictures', pictureRoutes),
router.use('/api/users', jwtCheck, userRoutes),
router.use('/api/videos', videoRoutes)


module.exports = router

