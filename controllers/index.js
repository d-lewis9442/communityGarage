const { Garage, Vehicle } = require('../models')

// Garage Controllers
const createGarage = async (req, res) => {
  try {
    const garage = await new Garage(req.body)
    await garage.save()
    return res.status(200).json({ garage })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// Vehicle Controllers

const createVehicle = async (req, res) => {
  try {
    const vehicle = await new Vehicle(req.body)
    await vehicle.save()
    return res.status(200).json({ vehicle })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createGarage,
  createVehicle
}
