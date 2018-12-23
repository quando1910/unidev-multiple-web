const constructor = require('../core/base/controller')
let { actions, asyncMiddleware, model } = constructor('Picture')

/**
 * Adding new action here
 */

actions.new = asyncMiddleware(async (req, reply) => {
  const link = req.files.map(x => `${x.fieldname}/${x.filename}`)
  console.log(link)

  // let pic = new Picture({
  //   title: req.body.title,
  //   desc: req.body.desc,
  //   link: link,
  //   type: req.body.type,
  //   agency_id: res.locals.header.team_id,
  //   album_id: req.body.albumId,
  //   article_id: req.body.articleId
  // });

  // pic.save((error, picture) => {
  //   if (error) res.status(500).send(error);
  //   res.status(201).json(picture);
  // });
})

module.exports = actions
