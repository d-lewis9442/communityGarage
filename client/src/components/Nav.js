import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>Community Garage</h1>
      <div className="navdiv">
        <Link to="/">Garages </Link>
        <Link to="/vehicles"> All Vehicles </Link>
        <Link to="/newvehicle"> Add Vehicle</Link>
        {/* <Link to="/newgarage">Add Garage</Link> */}
      </div>
    </nav>
  )
}

export default Nav
