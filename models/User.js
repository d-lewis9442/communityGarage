const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    passwordDigest: { type: String, required: true },
    vehicles: [{ type: Schema.Types.ObjectId, ref: 'Vehicle' }]
  },
  { timestamps: true }
)

module.exports = userSchema
