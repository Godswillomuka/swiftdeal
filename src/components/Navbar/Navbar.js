import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current location object

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
          // Apply active-link class if current path is '/'
          // and a separate class for hover effect on logo elements
        >
          <h1 className={location.pathname === '/' ? 'active-logo-h1' : ''}>SwiftDeal</h1>
          <span className={`nav-sublogo ${location.pathname === '/' ? 'active-logo-sub' : ''}`}>
            -Global Marketplace-
          </span>
        </Link>
      </div>

      {/* Hamburger menu - Only shown on mobile */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
      </div>

      {/* Nav links - Visible on Desktop/Tablet, hidden/moved on Mobile */}
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            onClick={closeMenu}
            className={location.pathname === '/' ? 'active-link' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={closeMenu}
            className={location.pathname === '/about' ? 'active-link' : ''}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={location.pathname === '/contact' ? 'active-link' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/sell"
            onClick={closeMenu}
            className={location.pathname === '/sell' ? 'active-link' : ''}
          >
            Sell
          </Link>
        </li>
      </ul>

      {/* Buttons - Visible on Desktop/Tablet, hidden/moved on Mobile */}
      <div className="nav-buttons">
        <button className="login-button">Sign In</button>
        <button className="signup-button">Register</button>
      </div>

      {/* Nav menu container (for Mobile only) */}
      <div className={`nav-menu ${menuOpen ? 'nav-active' : ''}`}>
        <ul className="nav-links-mobile">
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === '/' ? 'active-link-mobile' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className={location.pathname === '/about' ? 'active-link-mobile' : ''}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={location.pathname === '/contact' ? 'active-link-mobile' : ''}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/sell"
              onClick={closeMenu}
              className={location.pathname === '/sell' ? 'active-link-mobile' : ''}
            >
              Sell
            </Link>
          </li>
        </ul>

        <div className="nav-buttons-mobile">
          <button className="login-button">Sign In</button>
          <button className="signup-button">Register</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;