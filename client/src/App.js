import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import Garage from './pages/Garage'
import VehicleDetail from './pages/VehicleDetail'
import VehicleForm from './pages/VehicleForm'
import About from './pages/About'

const App = () => {
  return (
    <div className="App">
      <header className="sticky-nav">
        <Nav />
      </header>
      <main className="main">
        <Routes>
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
