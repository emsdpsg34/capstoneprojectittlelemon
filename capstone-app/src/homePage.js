import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional 
              recipes served with a modern twist.
            </p>
            <Link to="/bookings" className="cta-button">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image">
            <img src="/dishnumber2.jpg" alt="One of our delicious dishes" />
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials" id="menu">
        <div className="container">
          <div className="specials-header">
            <h2>This Week's Specials!</h2>
            <Link to="/menu" className="menu-button">Online Menu</Link>
          </div>
          <div className="specials-grid">
            <div className="special-card">
              <img src="/dishnumber1.jpg" alt="Greek Salad" />
              <div className="card-content">
                <div className="card-header">
                  <h3>Greek Salad</h3>
                  <span className="price">$12.99</span>
                </div>
                <p>
                  Our famous Greek salad of crispy lettuce, peppers, olives and our 
                  Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </p>
                <Link to="/menu" className="order-button">Order Now</Link>
              </div>
            </div>
            
            <div className="special-card">
              <img src="/dishnumber2.jpg" alt="Bruschetta" />
              <div className="card-content">
                <div className="card-header">
                  <h3>Bruschetta</h3>
                  <span className="price">$5.99</span>
                </div>
                <p>
                  Our Bruschetta is made from grilled bread that has been smeared with 
                  garlic and seasoned with salt and olive oil.
                </p>
                <Link to="/menu" className="order-button">Order Now</Link>
              </div>
            </div>
            
            <div className="special-card">
              <img src="/dishnumber3.jpg" alt="Grilled Fish" />
              <div className="card-content">
                <div className="card-header">
                  <h3>Grilled Fish</h3>
                  <span className="price">$20.00</span>
                </div>
                <p>
                  Our fish is grilled with fresh herbs and served with seasonal 
                  vegetables and lemon butter sauce.
                </p>
                <Link to="/menu" className="order-button">Order Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

<div className="story-section">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved 
                to the United States to pursue their shared dream of owning a restaurant.
              </p>
              <p>
                To craft the menu, Mario relies on family recipes and his experience as a 
                chef in Italy. Adrian does all the marketing for the restaurant and led the 
                effort to expand the menu beyond classic Italian to incorporate additional 
                cuisines from the Mediterranean region.
              </p>
              <p>
                The restaurant draws inspiration from the vibrant flavors of the Mediterranean, 
                offering a diverse menu that celebrates the rich culinary traditions of Italy, 
                Greece, Spain, and beyond.
              </p>
            </div>
            <div className="story-images">
              <img src="/Mario_and_Adrian_B.jpg" alt="Mario and Adrian" className="main-image" />
              <img src="/restaurant chef B.jpg" alt="Restaurant Chef" className="secondary-image" />
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Fresh Ingredients</h3>
                <p>We source the finest, freshest ingredients to create authentic Mediterranean flavors.</p>
              </div>
              <div className="value-card">
                <h3>Family Tradition</h3>
                <p>Our recipes are passed down through generations, preserving authentic cooking methods.</p>
              </div>
              <div className="value-card">
                <h3>Community Focus</h3>
                <p>We're proud to be part of the Chicago community and serve our neighbors with pride.</p>
              </div>
            </div>
          </div>


</div>
  );
};

export default HomePage;
