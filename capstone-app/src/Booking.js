import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './Booking.css';

const Booking = () => {
  const [availableTimes, setAvailableTimes] = useState({
    times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  });

  const updateTimes = (action) => {
    if (action.type === 'UPDATE_TIMES') {
      // In a real app, this would fetch available times from an API
      // For now, we'll just return the same times
      setAvailableTimes(prev => ({ ...prev }));
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-hero">
        <div className="container">
          <h1>Reserve a Table</h1>
          <p>Book your table at Little Lemon for an unforgettable dining experience</p>
        </div>
      </div>
      
      <div className="booking-content">
        <div className="container">
          <BookingForm 
            availableTimes={availableTimes} 
            dispatch={updateTimes}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;