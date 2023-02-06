const Schema = require('mongoose')

const User = new Schema({
  email: { type: String, required: true },
  passwordDigest: { type: String, required: true }
})

module.exports = User
