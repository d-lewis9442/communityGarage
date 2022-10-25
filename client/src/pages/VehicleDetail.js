import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const VehicleDetail = () => {
  const initialState = { garage_id: '' }
  const [vehicle, setVehicle] = useState()
  const [formState, setFormState] = useState(initialState)

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.put(
        `http://localhost:3001/garage/:id/:vehicle_id`,
        formState
      )
      console.log(response.data)
      console.log('Test')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
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
        {vehicle.garage_id ? <p>Garage: {vehicle.garage_id.name}</p> : null}
      </div>
      <div className="button-div">
        {vehicle.garage_id ? null : (
          <form className="garageform" onSubmit={handleSubmit}>
            <label htmlFor="garage"> Garages: </label>
            <select id="garage">
              <option value="">Select Garage</option>
              <option>Supercar Garage</option>
              <option>Classic Garage</option>
              <option>Sports Car Shop</option>
              <option>Diesel Garage</option>
              <option>Sport Truck Garage</option>
            </select>
            <button type="submit">Add to Garage</button>
          </form>
        )}
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
    </div>
  ) : null
}

export default VehicleDetail
