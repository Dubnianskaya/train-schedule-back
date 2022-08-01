const { NotFound } = require('http-errors')
const { Station } = require('../../models');

const getAllStations = async (req, res) => {
  const { station = "" } = req.query;

  const searchString = station.replace(
    /[-[\]{}()*+?.,\\^$|#\s]/g,
    '\\$&',
  );

  const searchPattern = `^${searchString}`
 
  const result = await Station.find({
    station: { $regex: searchPattern, $options: 'i' },
  });

  if(result.length === 0) {
      throw new NotFound(`Station with name ${station} not found`)
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      total: result.length,
      result,
    },
  });
};

module.exports = getAllStations;