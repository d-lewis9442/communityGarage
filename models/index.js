const { model } = require('mongoose')
const garageSchema = require('./Garage.js')
const vehicleSchema = require('./Vehicle.js')
const userSchema = require('./User.js')

const Garage = model('Garage', garageSchema)
const Vehicle = model('Vehicle', vehicleSchema)
const User = model('User', userSchema)

module.exports = {
  Garage,
  Vehicle,
  User
}
