const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const middleware = require('../middleware')

router.get('/', (req, res) => {
  res.send('This is Groot!')
})

router.post(
  '/newgarage',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.createGarage
)
router.get('/garages', controllers.getGarages)
router.get('/garage/:id', controllers.getGarageById)
router.get('/garagevehicles/:id', controllers.getVehiclesByGarageId)
router.put(
  '/garage/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.updateGarage
)
router.put(
  '/garage/:id/:vehicle_id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.addVehicleToGarage
)

router.post(
  '/newvehicle',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.createVehicle
)
router.get('/vehicles', controllers.getVehicles)
router.get('/vehicle/:id', controllers.getVehicleById)
router.put(
  '/vehicle/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.updateVehicle
)
router.delete(
  '/vehicle/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.deleteVehicle
)

module.exports = router
