import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GarageCard from '../components/GarageCard'

const Home = () => {
  const [garages, setGarages] = useState([])

  let navigate = useNavigate()

  const getGarages = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/garages`)
      setGarages(response.data.garages)
    } catch (error) {
      console.log(error)
    }
  }

  const viewGarage = (id) => {
    navigate(`/garage/${id}`)
  }

  useEffect(() => {
    getGarages()
  }, [])

  return (
    <div className="garages">
      <div className="garage-title">Garages</div>
      <section className="display-grid">
        {garages.map((garage) => (
          <GarageCard
            key={garage._id}
            name={garage.name}
            image={garage.image}
            description={garage.description}
            onClick={viewGarage}
            id={garage._id}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
