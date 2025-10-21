import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/footerlogo.jpg" alt="Little Lemon Logo" />
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/bookings">Reservations</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon<br />
                331 E Chicago<br />
                LaSalle Street Chicago,<br />
                Illinois 60602<br />
                USA
              </address>
            </li>
            <li>
              <a href="tel:+1-312-555-0123">
                +1 (312) 555-0123
              </a>
            </li>
            <li>
              <a href="mailto:contact@littlelemon.com">
                contact@littlelemon.com
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Social Media</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Little Lemon. All rights reserved.</p>
        <p>Developed with ❤️ for the Little Lemon family</p>
      </div>
    </footer>
  );
};

export default Footer;