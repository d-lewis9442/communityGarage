const { model } = require('mongoose')
const garageSchema = require('./Garage')
const vehicleSchema = require('/Vehicle')

const Garage = model('Garage', garageSchema)
const Vehicle = model('Vehicle', vehicleSchema)

module.exports = {
  Garage,
  Vehicle
}
