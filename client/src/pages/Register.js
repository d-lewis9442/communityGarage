import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  const initialState = {
    email: '',
    password: ''
  }
  const [formValue, setFormValue] = useState(initialState)
  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    await RegisterUser({
      email: formValue.email,
      password: formValue.password
    })
    setFormValue(initialState)
    navigate('/login')
  }

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <div className="garage-title">Register</div>
      <form className="registerform" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={formValue.email}
          type="email"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          value={formValue.password}
          type="password"
          id="password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
