import { useState } from 'react'
import axios from 'axios'

const VehicleForm = (props) => {
  const initialState = {
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post(
        `http://localhost:3001/newvehicle`,
        formState
      )
      console.log(response.data)
      setFormState(initialState)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
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
