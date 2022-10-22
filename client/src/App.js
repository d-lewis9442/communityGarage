import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import GarageForm from './components/GarageForm'
import VehicleForm from './components/VehicleForm'

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newgarage" element={<GarageForm />} />
          <Route path="/newvehicle" element={<VehicleForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
