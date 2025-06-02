import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden'; // prevent scroll when menu open
    } else {
      document.body.style.overflow = 'auto'; // re-enable scroll
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link
          to="/"
          className="nav-logo-link"
          onClick={closeMenu}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h1>SwiftDeal</h1>
          <span className="nav-sublogo">-Global Marketplace-</span>
        </Link>
      </div>

      {/* Hamburger menu */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
      </div>

      {/* Nav menu container (links + buttons) */}
      <div className={`nav-menu ${menuOpen ? 'nav-active' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/sell" onClick={closeMenu}>
              Sell
            </Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <button className="login-button">Sign In</button>
          <button className="signup-button">Register</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
