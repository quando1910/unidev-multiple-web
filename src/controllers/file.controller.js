const constructor = require('../core/base/controller')
let { actions, model, asyncMiddleware } = constructor('File')

/**
 * Adding new action here
 */

actions.new = asyncMiddleware(async (req, res) => {
  const file = req.files[0]
  const fileRecord = new model({
    name: file.filename,
    path: file.path,
    size: file.size,
    mimetype: file.mimetype,
    agency_id: req.info.team_id,
    user_id: req.user.id
  })
  console.log(fileRecord)
  return await fileRecord.save()
})

module.exports = actions
