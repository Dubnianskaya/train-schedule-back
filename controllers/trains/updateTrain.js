const {Train} = require('../../models')
const { BadRequest, createError } = require('http-errors');

const updateTrain = async (req, res) => {
    const {trainId} = req.params;
    if(req.body.departureDate === req.body.arrivalDate) {
      throw BadRequest('Dates cant match');
    }
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