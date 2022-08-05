const {Train} = require('../../models')
const { BadRequest } = require('http-errors');

const addTrain = async (req, res) => {
  if(req.body.departureDate === req.body.arrivalDate) {
    throw BadRequest('Dates cant match');
  }
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