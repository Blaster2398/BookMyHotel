import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    console.log("User logged out");
  };

  const handleClick_register = () => {
    if (user) {
    } else {
      navigate("/register");
    }
  };
  

  const handleClick = () => {
    if (user) {
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        {user ? (
          <div className="userActions">
            <span>{user.username}</span>
            <button onClick={handleLogout} className="navButton">Logout</button>
          </div>
        ) : (
          <div className="navButtons">
            <button onClick={handleClick_register} className="navButton">Register</button>
            <button onClick={handleClick} className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
