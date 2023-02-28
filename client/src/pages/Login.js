import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const Login = ({ setUser }) => {
  let navigate = useNavigate()
  const initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues(initialState)
    navigate('/')
  }

  return (
    <div>
      <div className="garage-title">Login</div>
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
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
