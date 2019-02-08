// Import Swagger documentation
const express = require('express')
const router = express.Router()
const path = require('path')
const Picture = require(`../models/Picture`)
const albumCtrl = require(`../controllers/album.controller`)
const articleCtrl = require(`../controllers/article.controller`)
const videoCtrl = require(`../controllers/video.controller`)
const categoryCtrl = require(`../controllers/category.controller`)
const productCtrl = require(`../controllers/product.controller`)
const aspectCtrl = require(`../controllers/aspect.controller`)
const productsTypesCtrl = require(`../controllers/producttype.controller`)

router.get('/', function (req, res, next) {
  res.json('PUBLIC OK!')
});

/* Show a user. */
router.get('/uploads/*', function (req, res, next) {
  res.sendfile(path.resolve(`./uploads/${req.params[0]}`));
});

router.get('/uploads/pictures/*', function (req, res, next) {
  res.sendfile(path.resolve(`./uploads/${req.params[0]}`));
});

router.get('/pictures', async (req, res, next) => {
  let pics = await Picture.find({agency_id: req.headers['agency-id'], favorite: true, article_id: null})
  res.json(pics)
})

router.get('/audios', async (req, res, next) => {
  let audios = await Audio.find({agency_id: req.headers['agency-id']})
  res.json(audios)
})

router.get('/albums', albumCtrl.index)
router.get('/albums/:id', albumCtrl.show)

router.get('/articles', articleCtrl.index)
router.get('/articles/:id', articleCtrl.show)

router.get('/videos', videoCtrl.index)
router.get('/videos/:id', videoCtrl.show)

router.get('/categories/wcode', categoryCtrl.indexwCode)
router.get('/categories', categoryCtrl.publicIndex) 
router.get('/categories/:id', categoryCtrl.publicShow)

router.get('/products', productCtrl.index)
router.get('/products/:id', productCtrl.show)

router.get('/aspects', aspectCtrl.indexItem)
router.get('/productstypes', productsTypesCtrl.index)
router.get('/productstypes/:id', productsTypesCtrl.show)

module.exports = router
