import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo wrapped in Link */}
      <div className="nav-logo">
        <Link to="/" className="nav-logo-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>SwiftDeal</h1>
          <span className="nav-sublogo">-Global Marketplace-</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/sell">Sell</Link></li>
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
