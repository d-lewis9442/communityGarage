import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const initialState = {
    email: '',
    password: ''
  }
  const [formState, setFormState] = useState(initialState)
  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post(
        'http://localhost:3001/auth/register',
        formState
      )
      console.log(response)
      setFormState(initialState)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <div className="garage-title">Register</div>
      <form className="registerform" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={formState.email}
          type="email"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          value={formState.password}
          type="password"
          id="password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
