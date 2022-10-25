import { useEffect, useState } from 'react'
import axios from 'axios'

const AddToGarageForm = (props) => {
  const initialState = { garage_id: '' }
  const [formState, setFormState] = useState(initialState)
  const [garages, setGarages] = useState([])

  const getAllGarages = async () => {
    try {
      let response = await axios.get(`http://localhost:3001/garages`)
      console.log(response.data.garages)
      setGarages(response.data.garages)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.put(
        `http://localhost:3001/garage/${formState.garage_id}/${props.vehicle._id}`,
        formState
      )
      console.log(response.data)
      console.log('Form Submitted')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  useEffect(() => {
    getAllGarages()
  }, [])

  return (
    <form className="garageform" onSubmit={handleSubmit}>
      <label htmlFor="garages"> Garages: </label>
      <select
        onChange={handleChange}
        value={formState.garage_id}
        id="garage_id"
      >
        <option value="">Select Garage</option>
        {garages.map((garage) => (
          <option value={garage._id} key={garage._id}>
            {garage.name}
          </option>
        ))}
      </select>
      <button type="submit">Add to Garage</button>
    </form>
  )
}

export default AddToGarageForm
