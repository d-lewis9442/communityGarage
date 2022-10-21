const { Garage, Vehicle } = require('../models')

// Garage Controllers
const createGarage = async (req, res) => {
  try {
    const garage = await new Garage(req.body)
    await garage.save()
    return res.status(200).json({ garage })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const getGarages = async (req, res) => {
  try {
    const garages = await Garage.find()
    return res.status(200).json({ garages })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getGarageById = async (req, res) => {
  try {
    const { id } = req.params
    const garage = await Garage.findById(id)
    if (garage) {
      return res.status(200).json({ garage })
    }
    return res.status(404).send('Garage with specified ID does not exist.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Vehicle Controllers

const createVehicle = async (req, res) => {
  try {
    const vehicle = await new Vehicle(req.body)
    await vehicle.save()
    return res.status(200).json({ vehicle })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    return res.status(200).json({ vehicles })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createGarage,
  createVehicle,
  getGarages,
  getVehicles,
  getGarageById
}
