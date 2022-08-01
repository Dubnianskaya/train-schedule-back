const {Train} = require('../../models')
const createError = require('http-errors')

const updateTrain = async (req, res) => {
    const {trainId} = req.params;
    const result = await Train.findByIdAndUpdate(trainId, req.body, {new: true});
    if(!result) {
      throw createError(404, `Contact with id ${trainId} not found`)
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result: result
      }
    })
}

module.exports = updateTrain;