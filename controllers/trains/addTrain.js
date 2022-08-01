const {Train} = require('../../models')

const addTrain = async (req, res) => {
    const result = await Train.create(req.body)

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
       result
      },
    });
  };
  
module.exports = addTrain;