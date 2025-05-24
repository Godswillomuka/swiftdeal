import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <h1>SwiftDeal</h1>
        <span className="nav-sublogo">-Global Marketplace-</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#sell">Sell</a></li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <button className="login-button">Sign In</button>
        <button className="signup-button">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;