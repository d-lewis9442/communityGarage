const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('This is Groot!')
})

router.post('/newgarage', controllers.createGarage)
router.post('/newvehicle', controllers.createVehicle)
router.get('/garages', controllers.getGarages)
router.get('/vehicles', controllers.getVehicles)
router.get('/garage/:id', controllers.getGarageById)

module.exports = router
