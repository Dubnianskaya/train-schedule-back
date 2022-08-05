const {Train} = require('../../models')
const { createError } = require('http-errors');

const searchTrains = async (req, res) => {
  const {departure, arrival} = req.query;
  let trains = await Train.find({}).populate('departure arrival', '_id station');
  trains = trains.filter(train => train.departure.station === departure && train.arrival.station === arrival)
  if(trains.length === 0) {
    throw createError(404, "Trains not found")
  }
  
    res.json({
      status: 'success',
      code: 200,
      data: {
        trains
      },
    });
  };
  
module.exports = searchTrains;