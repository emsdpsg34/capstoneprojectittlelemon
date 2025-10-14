import React from 'react';
import './App.css';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import DMenu from './Menu';
import AboutUs from './AboutUs';
import LogIn from './LogIn';
import CheckOut from './CheckOut';
import SignUp from './SignUp';
import ConfOrder from './ConfOrder';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/dishMenu" element={<DMenu />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/BookingForm" element={<Main />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/booking" element={<Main />} />
        <Route path="/confirmed" element={<Main />} />
        <Route path="/ConfOrder" element={<ConfOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



