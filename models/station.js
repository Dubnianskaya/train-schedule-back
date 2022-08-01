const { Schema, model } = require('mongoose');

const stationSchema = Schema({
  station : String,
});

const Station = model('stations', stationSchema);

module.exports = {Station};