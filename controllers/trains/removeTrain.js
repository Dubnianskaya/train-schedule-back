const {Train} = require('../../models')
const createError = require('http-errors')

const removeTrain = async (req, res) => {
      const {trainId} = req.params;
      const removedTrain = await Train.findByIdAndRemove(trainId);
      if(!removedTrain) {
        throw createError(404, `Contact with id ${trainId} not found`)
      }
      res.status(200).json({
        status: "success",
        code: 200,
        message: "Train deleted",
        data: {
          result: removedTrain
        }
      })
  }

module.exports = removeTrain;