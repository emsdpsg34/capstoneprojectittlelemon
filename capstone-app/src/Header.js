import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">
            <img src="/littlelemonpnglogo.png" alt="Little Lemon Logo" className="logo" />
          </Link>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'visible' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
          <Link to="/bookings" onClick={() => setIsMenuOpen(false)}>Reservations</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
          <Link to="/checkout" onClick={() => setIsMenuOpen(false)} className="order-btn">
            Order Online
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
