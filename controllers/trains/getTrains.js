const {Train} = require('../../models')

const getTrains = async (req, res) => {
  const {sort} = req.query;
  let trains;
  switch (sort) {
    case 'departure':
    trains = await Train.find({}).populate('departure arrival', '_id station').sort({departure: 1});
    break;
    case 'departureDate':
    trains = await Train.find({}).populate('departure arrival', '_id station').sort({departureDate: 1});
    break;
    case 'updatedAt':
    trains = await Train.find({}).populate('departure arrival', '_id station').sort({updatedAt: -1});
    break;
    case 'createdAt':
    trains = await Train.find({}).populate('departure arrival', '_id station').sort({createdAt: 1});
    break;
    case 'createdAtDec':
    trains = await Train.find({}).populate('departure arrival', '_id station').sort({createdAt: -1});
    break;
    default:
    trains = await Train.find({}).populate('departure arrival', '_id station');
    break;
  }
  
    res.json({
      status: 'success',
      code: 200,
      data: {
        trains
      },
    });
  };
  
module.exports = getTrains;
  