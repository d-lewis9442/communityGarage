import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddToGarageForm = (props) => {
  const initialState = { garage_id: '' }
  const [formState, setFormState] = useState(initialState)
  const [garages, setGarages] = useState([])

  let navigate = useNavigate()

  const getAllGarages = async () => {
    try {
      let response = await axios.get(`http://localhost:3001/garages`)
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
      await addGarageToVehicle()
      alert(`Vehicle added to Garage`)
      navigate(`/garage/${formState.garage_id}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const addGarageToVehicle = async () => {
    try {
      let response = await axios.put(
        `http://localhost:3001/vehicle/${props.vehicle._id}`,
        { garage_id: formState.garage_id }
      )
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
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
