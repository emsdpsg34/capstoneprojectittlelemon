import React from 'react';
import { Link } from 'react-router-dom';
import './Confirmed.css';

const Confirmed = () => {
  return (
    <div className="confirmed-page">
      <div className="confirmed-container">
        <div className="confirmed-content">
          <div className="success-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#F4CE14"/>
              <path d="M9 12l2 2 4-4" stroke="#495E57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1>Order Confirmed!</h1>
          <p className="confirmation-message">
            Thank you for your order! Your reservation has been confirmed and you will receive 
            a confirmation email shortly.
          </p>
          
          <div className="order-details">
            <h3>Order Details</h3>
            <div className="detail-item">
              <span>Order Number:</span>
              <span>#LL-2024-001</span>
            </div>
            <div className="detail-item">
              <span>Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="detail-item">
              <span>Time:</span>
              <span>7:00 PM</span>
            </div>
            <div className="detail-item">
              <span>Guests:</span>
              <span>4 people</span>
            </div>
            <div className="detail-item">
              <span>Total:</span>
              <span>$38.98</span>
            </div>
          </div>
          
          <div className="action-buttons">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <Link to="/menu" className="btn-secondary">
              View Menu
            </Link>
          </div>
          
          <div className="contact-info">
            <p>
              If you have any questions about your order, please contact us at{' '}
              <a href="tel:+1-312-555-0123">+1 (312) 555-0123</a> or{' '}
              <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;