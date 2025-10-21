import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Little Lemon</h1>
          <p>Discover our story and the passion behind our Mediterranean cuisine</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
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

          <div className="location-section">
            <h2>Visit Us</h2>
            <div className="location-info">
              <div className="address">
                <h3>Little Lemon Restaurant</h3>
                <address>
                  331 E Chicago<br />
                  LaSalle Street Chicago,<br />
                  Illinois 60602<br />
                  USA
                </address>
                <p>
                  <strong>Phone:</strong> <a href="tel:+1-312-555-0123">+1 (312) 555-0123</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
                </p>
              </div>
              <div className="hours">
                <h3>Opening Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Thursday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Friday - Saturday</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;