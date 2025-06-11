import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
        >
          {/* Apply active-logo classes based on current path */}
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
            // UPDATED: Link to seller signup page
            to="/seller-signup"
            onClick={closeMenu}
            className={location.pathname === '/seller-signup' ? 'active-link' : ''}
          >
            Sell
          </Link>
        </li>
      </ul>

      {/* Buttons (now Links) - Visible on Desktop/Tablet, hidden/moved on Mobile */}
      <div className="nav-buttons">
        <Link to="/login" className="login-button" onClick={closeMenu}>Sign In</Link>
        <Link to="/signup" className="signup-button" onClick={closeMenu}>Register</Link>
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
              // UPDATED: Link to seller signup page for mobile
              to="/seller-signup"
              onClick={closeMenu}
              className={location.pathname === '/seller-signup' ? 'active-link-mobile' : ''}
            >
              Sell
            </Link>
          </li>
        </ul>

        <div className="nav-buttons-mobile">
          <Link to="/login" className="login-button" onClick={closeMenu}>Sign In</Link>
          <Link to="/signup" className="signup-button" onClick={closeMenu}>Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;