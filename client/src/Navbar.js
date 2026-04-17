import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo">🩺 MediCare</div>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/booking">Bookings</Link>
        <Link to="/mybookings">My Bookings</Link>

        {user && user.role === "admin" && (
          <Link to="/admin">Admin Login</Link>
        )}

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;