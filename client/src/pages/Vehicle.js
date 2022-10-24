import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Vehicle = () => {
  const [vehicle, setVehicle] = useState()

  let { vehicleId } = useParams()

  const getVehicleById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/vehicle/${vehicleId}`
      )
      console.log(response.data.vehicle)
      setVehicle(response.data.vehicle)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getVehicleById()
  }, [])

  return vehicle ? (
    <div className="vehicle-detail">
      <div className="detail-header">
        <img src={vehicle.image} alt={vehicle.nickname} />
        <h1>
          {vehicle.make} {vehicle.model}
        </h1>
        <h2>{vehicle.nickname}</h2>
      </div>
      <div className="vehicle-info">
        <p>Engine: {vehicle.engine}</p>
        <p>Horsepower: {vehicle.horsepower}</p>
        <p>Torque: {vehicle.torque}</p>
        <p>Category: {vehicle.category}</p>
        <p></p>
        <p>Modifications: {vehicle.modifications}</p>
      </div>
    </div>
  ) : null
}

export default Vehicle
