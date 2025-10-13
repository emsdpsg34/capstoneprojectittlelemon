import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer className="footer">
            <section>
            <div className="company-info">
                <img src="/littlelemonpnglogo.png" alt="Little Lemon Logo" className="footer-logo"/>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutUs">About</Link></li>
                <li><Link to="/dishMenu">Menu</Link></li>
                <li><Link to="/BookingForm">Reservations</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/LogIn">Login</Link></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li>
                <li>Phone: <br/> +00 123 456 789</li>
                <li>Email: <br/> little@lemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;