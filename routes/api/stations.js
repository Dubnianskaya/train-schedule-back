const express = require('express');

const router = express.Router();

const { stations: ctrl } = require('../../controllers');
const { ctrlWrapper } = require('../../middlewares');

router.get('/', ctrlWrapper(ctrl.getAllStations));

module.exports = router;