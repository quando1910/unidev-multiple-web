const constructor = require('../core/base/controller')
let { actions, asyncMiddleware, model } = constructor('Picture')
const sharp = require('sharp')
const fs = require('fs')
/**
 * Adding new action here
 */

actions.new = asyncMiddleware(async (req, res) => {
  const files = req.files.map(x => {
    sharp(x.path).resize(2048, 1365, {
      fit: sharp.fit.inside,
      withoutEnlargement: true
    }).toBuffer(function(err, buffer) {
        fs.writeFile(x.path, buffer, function(e) {
      })
    })
    return new model({
      name: x.originalname,
      desc: req.body.desc,
      path: x.path,
      size: x.size,
      mimetype: x.mimetype,
      agency_id: req.info.team_id,
      album_id: req.body.albumId,
      article_id: req.body.articleId,
      user_id: req.user.id
    })
  })
  return await model.insertMany(files)
})

actions.index = asyncMiddleware(async (req, res) => {
  return await model.find({ 
    $or: [
      {agency_id: req.info.team_id, album_id: null, article_id: null},
      {agency_id: req.info.team_id, favorite: true, article_id: null}
    ] 
  })
})

actions.delete = asyncMiddleware(async (req, res) => {
  let picture = await model.findById(req.params.id)
  fs.unlink(`${picture.path}`, async (err) => {
    if (err) throw err;
    await model.findByIdAndRemove(req.params.id)
  });
})

actions.updatePictureInAlbum = asyncMiddleware(async (req, res) => {
  return await model.updateMany(req.body.pictures, {})
})

module.exports = actions
