import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">BookMyHotel</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar