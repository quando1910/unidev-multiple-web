

module.exports = (model) => {
  // External Dependancies
  const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .then(data => res.send(data))
      .catch(next)
  }
  // Get Data Models
  let obj = {};
  obj[model] = require(`../../models/${model}`)
  
  return {
    model: obj[model],
    asyncMiddleware: asyncMiddleware,
    actions: {
      test: asyncMiddleware(async (req, res, next) => {
        return `${model} works`
      }),
      index: asyncMiddleware(async (req, res, next) => {
        const cars = await obj[model].find()
        return cars
      }),
      show: asyncMiddleware(async (req, res, next) => {
        const id = req.params.id
        const car = await obj[model].findById(id)
        return car
      }),
      new: asyncMiddleware(async (req, res, next) => {
        const objectModel = obj[model]
        const item = new objectModel(req.body)
        return item.save()
      }),
      update: asyncMiddleware(async (req, res, next) => {
        const id = req.params.id
        const car = req.body
        const { ...updateData } = car
        const update = await obj[model].findByIdAndUpdate(id, updateData, { new: true })
        return update
      }),
      delete: asyncMiddleware(async (req, res, next) => {
        const id = req.params.id
        const car = await obj[model].findByIdAndRemove(id)
        return car
      })
    }
  }
}
