import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const VehicleForm = () => {
  const initialState = {
    year: '',
    make: '',
    model: '',
    nickname: '',
    category: '',
    engine: '',
    horsepower: '',
    torque: '',
    modifications: '',
    image: ''
  }
  const [formState, setFormState] = useState(initialState)

  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post(
        `http://localhost:3001/newvehicle`,
        formState
      )
      console.log(response.data.vehicle)
      window.alert(`You have created ${response.data.vehicle.nickname}`)
      setFormState(initialState)
      navigate(`/vehicle/${response.data.vehicle._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form className="vehicleform" onSubmit={handleSubmit}>
      <label htmlFor="year">Year:</label>
      <input
        onChange={handleChange}
        value={formState.year}
        type="number"
        id="year"
      />
      <label htmlFor="make">Make:</label>
      <input
        onChange={handleChange}
        value={formState.make}
        type="text"
        id="make"
      />
      <label htmlFor="model">Model:</label>
      <input
        onChange={handleChange}
        value={formState.model}
        type="text"
        id="model"
      />
      <label htmlFor="nickname">Nickname:</label>
      <input
        onChange={handleChange}
        value={formState.nickname}
        type="text"
        id="nickname"
      />
      <label htmlFor="category">Category:</label>
      <input
        onChange={handleChange}
        value={formState.category}
        type="text"
        id="category"
      />
      <label htmlFor="engine">Engine:</label>
      <input
        onChange={handleChange}
        value={formState.engine}
        type="text"
        id="engine"
      />
      <label htmlFor="horsepower">Horsepower:</label>
      <input
        onChange={handleChange}
        value={formState.horsepower}
        type="number"
        id="horsepower"
      />
      <label htmlFor="torque">Torque:</label>
      <input
        onChange={handleChange}
        value={formState.torque}
        type="number"
        id="torque"
      />
      <label htmlFor="modifications">Modifications:</label>
      <textarea
        onChange={handleChange}
        value={formState.modifications}
        id="modifications"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="image">Image:</label>
      <input
        onChange={handleChange}
        value={formState.image}
        type="text"
        id="image"
      />
      <button type="submit">Add Vehicle</button>
    </form>
  )
}

export default VehicleForm
