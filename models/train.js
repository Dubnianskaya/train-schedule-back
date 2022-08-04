const { Schema, model } = require('mongoose');
const Joi = require('joi')

const trainSchema = Schema({
      departure: {
        type: Schema.Types.ObjectId,
        ref: 'stations',
        required: true
      },
      arrival: {
        type: Schema.Types.ObjectId,
        ref: 'stations',
        required: true
      },
      departureDate: {
        type: Date,
        min: new Date(),
        required: true
      },
      arrivalDate: {
        type: Date,
        min: new Date(),
        required: true
      }, 
    },
    { versionKey: false, timestamps: true },
);

const trainJoiSchema = Joi.object({
departure: Joi.string().required(),
arrival: Joi.string().required(),
departureDate: Joi.date().required(),
arrivalDate: Joi.date().required(),
})

const Train = model('train', trainSchema);

module.exports = {Train, trainJoiSchema};