import { useState } from 'react'
import axios from 'axios'

const vehicleForm = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post(`http://localhost:3001/newvehicle`)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Add Vehicle</button>
    </form>
  )
}

export default vehicleForm
