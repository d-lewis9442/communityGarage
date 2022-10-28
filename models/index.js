const { model } = require('mongoose')
const garageSchema = require('./Garage.js')
const vehicleSchema = require('./Vehicle.js')

const Garage = model('Garage', garageSchema)
const Vehicle = model('Vehicle', vehicleSchema)

module.exports = {
  Garage,
  Vehicle
}
