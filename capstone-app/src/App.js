import React from 'react';
import './App.css';
import AboutUs from './aboutUs';
import LogIn from './LogIn';
import Payment from './PayMent';
import BookingForm from './BookingForm';
import BookingPage from './BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<homePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </Router>
    );
}

export default App;
