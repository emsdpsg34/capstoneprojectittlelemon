import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <div>
            <img src="dishnumber2.jpg" alt="dish number2" name="dish number 2" width={270} height={480}/>
          </div>
          <Link to="/BookingForm">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;