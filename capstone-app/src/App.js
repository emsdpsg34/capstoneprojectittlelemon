import React from 'react';
import './App.css';
import Main from './Main';
import navBar from './NavBar';
import Footer from './Footer';
import Header from './Header';
import DMenu from './Menu';
import AboutUs from './AboutUs';
import LogIn from './LogIn';
import BookingForm from './BookingForm';
import homePage from './homePage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <navBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/homePage" element={<homePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/dishMenu" element={<DMenu />} />
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/booking" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



