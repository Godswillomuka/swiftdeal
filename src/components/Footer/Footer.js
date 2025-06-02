import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-content">
        {/* Logo wrapped in Link */}
        <div className="footer-logo">
          <Link to="/" className="footer-logo-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>SwiftDeal</h3>
            <p>-Global Marketplace-</p>
          </Link>
        </div>

        {/* Internal Page Links */}
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* External Social Media Links */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>

      <p className="footer-copy">&copy; 2025 SwiftDeal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
