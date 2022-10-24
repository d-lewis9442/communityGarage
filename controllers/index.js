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

const getVehiclesByGarageId = async (req, res) => {
  try {
    const { id } = req.params
    const garage = await Garage.findById(id).populate('vehicles')
    if (garage) {
      return res.status(200).json({ garage })
    }
    return res.status(404).send('Garage with specified ID does not exist.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateGarage = async (req, res) => {
  try {
    const garage = await Garage.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).send(garage)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addVehicleToGarage = async (req, res) => {
  try {
    const garage = await Garage.findByIdAndUpdate(req.params.id, {
      $push: { vehicles: req.params.vehicle_id }
    })
    res.status(200).send(garage)
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

const getVehicleById = async (req, res) => {
  try {
    const { id } = req.params
    const vehicle = await Vehicle.findById(id)
    if (vehicle) {
      return res.status(200).json({ vehicle })
    }
    return res.status(404).send('Vehicle with specified ID does not exist.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).send(vehicle)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Vehicle.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Vehicle Deleted')
    }
    throw new Error('Vehicle Not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createGarage,
  getGarages,
  getGarageById,
  getVehiclesByGarageId,
  updateGarage,
  addVehicleToGarage,
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle
}
