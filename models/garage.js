const { Schema } = require('mongoose')

const garageSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    capacity: { type: String, required: true },
    image: { type: String, required: true },
    vehicles: [{ type: Schema.Types.ObjectId, ref: 'Vehicle' }]
  },
  { timestamps: true }
)

module.exports = garageSchema
