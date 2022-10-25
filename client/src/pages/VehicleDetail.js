import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const VehicleDetail = () => {
  const [vehicle, setVehicle] = useState()

  let navigate = useNavigate()
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

  const deleteVehicle = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/vehicle/${vehicleId}`
      )
      console.log(response.data.vehicle)
      window.alert(`You have deleted ${vehicle.nickname}`)
      navigate('/')
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
      <div className="button-div">
        <button>Add to Garage</button>
        <button
          onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to delete ${vehicle.nickname}?`
              )
            ) {
              deleteVehicle()
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ) : null
}

export default VehicleDetail
