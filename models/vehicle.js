const { Schema } = require('mongoose')

const vehicleSchema = new Schema({
  year: { type: Number, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  nickname: { type: String, required: true },
  category: { type: String, required: true },
  engine: { type: String, required: true },
  horsepower: { type: Number, required: true },
  torque: { type: Number, required: true },
  modifications: { type: String, required: true },
  image: { type: String, required: true },
  garage_id: { type: Schema.Types.ObjectId, ref: 'Garage' }
})

module.exports = vehicleSchema
