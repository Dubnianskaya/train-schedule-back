const express = require('express');

const router = express.Router();

const { trains: ctrl } = require('../../controllers');
const { schemaValidation, ctrlWrapper } = require('../../middlewares');
const { trainJoiSchema } = require('../../models')
const validateMiddlewars = schemaValidation(trainJoiSchema)

router.get('/', ctrlWrapper(ctrl.getTrains));
router.post('/add', validateMiddlewars, ctrlWrapper(ctrl.addTrain));
router.delete('/:trainId', ctrlWrapper(ctrl.removeTrain));
router.put('/:trainId', validateMiddlewars, ctrlWrapper(ctrl.updateTrain))

module.exports = router;