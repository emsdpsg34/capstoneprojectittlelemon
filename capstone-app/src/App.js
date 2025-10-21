import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './homePage';
import Menu from './Menu';
import Booking from './Booking';
import AboutUs from './AboutUs';
import LogIn from './LogIn';
import SignUp from './SignUp';
import CheckOut from './CheckOut';
import Confirmed from './Confirmed';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/confirmation" element={<Confirmed />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;



