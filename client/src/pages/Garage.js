import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import VehicleCard from '../components/VehicleCard'

const Garage = () => {
  const [vehicles, setVehicles] = useState([])

  let { garageId } = useParams()
  let navigate = useNavigate()

  const getVehiclesByGarage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/garagevehicles/${garageId}`
      )
      setVehicles(response.data.garage.vehicles)
    } catch (error) {
      console.log(error)
    }
  }

  const viewVehicle = (id) => {
    navigate(`/vehicle/${id}`)
  }

  useEffect(() => {
    getVehiclesByGarage()
  }, [])

  return (
    <div className="display-grid">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle._id}
          make={vehicle.make}
          model={vehicle.model}
          nickname={vehicle.nickname}
          image={vehicle.image}
          onClick={viewVehicle}
          id={vehicle._id}
          year={vehicle.year}
        />
      ))}
      <div className="vehicles-link">
        <Link to="/">Garages</Link>
      </div>
    </div>
  )
}
export default Garage
