import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VehicleCard from '../components/VehicleCard'

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([])

  let navigate = useNavigate()

  const getVehicles = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/vehicles`)
      setVehicles(response.data.vehicles)
    } catch (error) {
      console.log(error)
    }
  }

  const viewVehicle = (id) => {
    navigate(`/vehicle/${id}`)
  }

  useEffect(() => {
    getVehicles()
  }, [])

  return (
    <div className="vehicles">
      <h2>Vehicles</h2>
      <section className="display-grid">
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
      </section>
    </div>
  )
}

export default Vehicles
