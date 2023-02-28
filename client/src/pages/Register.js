import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    email: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await RegisterUser({
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/login')
  }

  return (
    <div>
      <div className="garage-title">Register</div>
      <form className="registerform" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={formValues.email}
          type="email"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          value={formValues.password}
          type="password"
          id="password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
