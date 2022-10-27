import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <p className="nav-title">Community Garage</p>
      <div className="navdiv">
        <Link to="/" className="garagelink">
          Garages
        </Link>
        <Link to="/vehicles" className="vehicleslink">
          All Vehicles
        </Link>
        <Link to="/newvehicle" className="addlink">
          Add Vehicle
        </Link>
        <Link to="/about" className="aboutlink">
          About
        </Link>
      </div>
    </nav>
  )
}

export default Nav
