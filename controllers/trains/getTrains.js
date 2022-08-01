const {Train} = require('../../models')

const getTrains = async (req, res) => {
    const trains = await Train.find({}).populate('departure arrival', '_id station');
  
    res.json({
      status: 'success',
      code: 200,
      data: {
        trains
      },
    });
  };
  
module.exports = getTrains;
  