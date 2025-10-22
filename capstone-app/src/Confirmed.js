import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Confirmed.css';

const Confirmed = () => {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    // Get booking data from localStorage
    const savedBooking = localStorage.getItem('Bookings');
    if (savedBooking) {
      setBookingData(JSON.parse(savedBooking));
    }
  }, []);

  // Generate a random order number
  const generateOrderNumber = () => {
    return `#LL-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format time for display
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Calculate total (mock calculation)
  const calculateTotal = (guests) => {
    const basePrice = 25; // Base price per person
    return (guests * basePrice).toFixed(2);
  };
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
          
          <h1>Reservation Confirmed!</h1>
          <p className="confirmation-message">
            Thank you for your reservation! Your table has been confirmed and you will receive 
            a confirmation email shortly.
          </p>
          
          <div className="order-details">
            <h3>Reservation Details</h3>
            {bookingData ? (
              <>
                <div className="detail-item">
                  <span>Reservation Number:</span>
                  <span>{generateOrderNumber()}</span>
                </div>
                <div className="detail-item">
                  <span>Date:</span>
                  <span>{formatDate(bookingData.date)}</span>
                </div>
                <div className="detail-item">
                  <span>Time:</span>
                  <span>{formatTime(bookingData.time)}</span>
                </div>
                <div className="detail-item">
                  <span>Guests:</span>
                  <span>{bookingData.guests} {bookingData.guests === 1 ? 'person' : 'people'}</span>
                </div>
                <div className="detail-item">
                  <span>Occasion:</span>
                  <span>{bookingData.occasion.charAt(0).toUpperCase() + bookingData.occasion.slice(1)}</span>
                </div>
                <div className="detail-item">
                  <span>Estimated Total:</span>
                  <span>${calculateTotal(bookingData.guests)}</span>
                </div>
              </>
            ) : (
              <div className="detail-item">
                <span>No booking data found</span>
              </div>
            )}
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