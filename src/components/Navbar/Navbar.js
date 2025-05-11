import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">SwiftDeal</Link>
      </div>
       <div className="sidebar-links">
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link to="/sell" onClick={() => setIsMenuOpen(false)}>Sell</Link>
          <Link to="/login" className="login-btn" onClick={() => setIsMenuOpen(false)}>
            Login | <span>Register</span>
          </Link>
        </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-links">
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link to="/sell" onClick={() => setIsMenuOpen(false)}>Sell</Link>
          <Link to="/login" className="login-btn" onClick={() => setIsMenuOpen(false)}>
            Login | <span>Register</span>
          </Link>
        </div>
      </div>

      {/* Hamburger Button */}
      <button 
        className="hamburger" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;