const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('This is Groot!')
})

router.post('/newgarage', controllers.createGarage)

router.post('/newvehicle', controllers.createVehicle)

module.exports = router
