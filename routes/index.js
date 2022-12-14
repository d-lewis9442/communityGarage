const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('This is Groot!')
})

router.post('/newgarage', controllers.createGarage)
router.get('/garages', controllers.getGarages)
router.get('/garage/:id', controllers.getGarageById)
router.get('/garagevehicles/:id', controllers.getVehiclesByGarageId)
router.put('/garage/:id', controllers.updateGarage)
router.put('/garage/:id/:vehicle_id', controllers.addVehicleToGarage)

router.post('/newvehicle', controllers.createVehicle)
router.get('/vehicles', controllers.getVehicles)
router.get('/vehicle/:id', controllers.getVehicleById)
router.put('/vehicle/:id', controllers.updateVehicle)
router.delete('/vehicle/:id', controllers.deleteVehicle)

module.exports = router
