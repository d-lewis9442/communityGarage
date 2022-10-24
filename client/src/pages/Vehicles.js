import axios from 'axios'
import { useEffect, useState } from 'react'
import VehicleCard from '../components/VehicleCard'

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([])

  const getVehicles = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/vehicles`)
      setVehicles(response.data.vehicles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getVehicles()
  }, [])

  return (
    <div className="vehicles">
      <h2>Vehicles</h2>
      <section className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle._id}
            make={vehicle.make}
            model={vehicle.model}
            nickname={vehicle.nickname}
            image={vehicle.image}
          />
        ))}
      </section>
    </div>
  )
}

export default Vehicles
