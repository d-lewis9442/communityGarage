const mongoose = require('mongoose')
require('dotenv').config()

let MONGODB_URI = 'mongodb://127.0.0.1:27017/communityGarage'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Succesfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
