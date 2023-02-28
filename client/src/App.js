import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import Garage from './pages/Garage'
import VehicleDetail from './pages/VehicleDetail'
import VehicleForm from './pages/VehicleForm'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <header className="sticky-nav">
        <Nav />
      </header>
      <main className="main">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/garage/:garageId" element={<Garage />} />
          <Route path="/vehicle/:vehicleId" element={<VehicleDetail />} />
          <Route path="/newvehicle" element={<VehicleForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
