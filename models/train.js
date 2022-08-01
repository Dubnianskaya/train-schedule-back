const { Schema, model } = require('mongoose');
const Joi = require('joi')

// const pattern = /^([0-9]{2}):([0-9]{2})$/

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
      date: {
        type: Date,
        default: new Date(),
        required: true
      },
      hours: {
        type: Number,
        min: 0,
        max: 23,
        required: true
      },
      minutes: {
        type: Number,
        min: 0,
        max: 59,
        required: true
      }
    },
    { versionKey: false, timestamps: true },
);

const trainJoiSchema = Joi.object({
departure: Joi.string().required(),
arrival: Joi.string().required(),
date: Joi.date().required(),
hours: Joi.number().min(0).max(23).required(),
minutes: Joi.number().min(0).max(59).required(),
})

const Train = model('train', trainSchema);

module.exports = {Train, trainJoiSchema};