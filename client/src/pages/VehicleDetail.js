import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AddToGarageForm from '../components/AddToGarageForm'

const VehicleDetail = () => {
  const [vehicle, setVehicle] = useState()

  let navigate = useNavigate()
  let { vehicleId } = useParams()

  const getVehicleById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/vehicle/${vehicleId}`
      )
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
          {vehicle.year} {vehicle.make} {vehicle.model}
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
        {vehicle.garage_id ? (
          <p>
            Garage:{' '}
            <Link to={`/garage/${vehicle.garage_id._id}`}>
              {vehicle.garage_id.name}
            </Link>
          </p>
        ) : null}
      </div>
      <div className="button-div">
        {vehicle.garage_id ? null : <AddToGarageForm vehicle={vehicle} />}
        <br />
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
      {vehicle.garage_id ? null : <Link to="/vehicles">Vehicles</Link>}
    </div>
  ) : null
}

export default VehicleDetail
