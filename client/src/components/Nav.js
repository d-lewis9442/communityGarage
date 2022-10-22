import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h2>Community Garage</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/newvehicle">Add Vehicle</Link>
        <Link to="/newgarage">Add Garage</Link>
      </div>
    </nav>
  )
}

export default Nav
