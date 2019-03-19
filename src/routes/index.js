// Import routes

const agencyRoutes = require('./agency.routes')
const categoryRoutes = require('./category.routes')
const articleRoutes = require('./article.routes')
const albumRoutes = require('./album.routes')
const authRoutes = require('./auth.routes')
const pictureRoutes = require('./picture.routes')
const userRoutes = require('./user.routes')
const videoRoutes = require('./video.routes')
const productRoutes = require('./product.routes')
const aspectRoutes = require('./aspect.routes')
const producttypeRoutes = require('./producttype.routes')
const publicRoutes = require('./public.routes')
const audioRoutes = require('./audio.routes')
const fileRoutes = require('./file.routes')
const uploadRoutes = require('./upload.routes')

const express = require('express')
const router = express.Router()

const appCtrl = require('../controllers/app.controller')
const expressjwt = require('express-jwt')

const jwtCheck = expressjwt({
  secret: 'mykey'
});

/** GET / - Check service health */
router.get('/api', (req, res) =>
  res.send('OK man')
)

router.get('/api/checkLogin',jwtCheck, (req, res) =>
  res.status(200).send('Login Successful')
)

router.use('/public', publicRoutes),
router.use('/api/agencys', jwtCheck, appCtrl.check, agencyRoutes),
router.use('/api/articles', jwtCheck, appCtrl.check, articleRoutes),
router.use('/api/categories', jwtCheck, appCtrl.check, categoryRoutes),
router.use('/api/auths', authRoutes),
router.use('/api/pictures', jwtCheck, appCtrl.check, pictureRoutes),
router.use('/api/audios', jwtCheck, appCtrl.check, audioRoutes),
router.use('/api/files', jwtCheck, appCtrl.check, fileRoutes),
router.use('/api/users', jwtCheck, appCtrl.check, userRoutes),
router.use('/api/videos', jwtCheck, appCtrl.check, videoRoutes),
router.use('/api/albums', jwtCheck, appCtrl.check, albumRoutes),
router.use('/api/products', jwtCheck, appCtrl.check, productRoutes),
router.use('/api/aspects', jwtCheck, appCtrl.check, aspectRoutes),
router.use('/api/uploads', jwtCheck, appCtrl.check, uploadRoutes),

router.use('/api/productstypes', jwtCheck, appCtrl.check, producttypeRoutes)

module.exports = router

