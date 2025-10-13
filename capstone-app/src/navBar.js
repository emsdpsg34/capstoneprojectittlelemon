import React, { useState } from "react";
import { Link } from "react-router-dom";

const navBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <Link to="/" className="nav-brand">
        <img src="/littlelemonpnglogo.png" alt="Little Lemon" className="logo" />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/aboutUs" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/dishMenu" className="nav-link">Menu</Link>
        </li>
        <li>
          <Link to="/BookingForm" className="nav-link">Reservations</Link>
        </li>
        <li>
          <Link to="/booking" className="nav-link">Booking</Link>
        </li>
        <li>
          <Link to="/LogIn" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navBar;