const { User } = require('../models/User.js')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ email, passwordDigest })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  Register,
  Login
}
