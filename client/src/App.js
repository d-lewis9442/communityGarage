import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import Garage from './pages/Garage'
import Vehicle from './pages/Vehicle'
// import VehicleForm from './pages/VehicleForm'

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/garage/:garageId" element={<Garage />} />
          <Route path="/vehicle/:vehicleId" element={<Vehicle />} />
          {/* <Route path="/newvehicle" element={<VehicleForm />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
