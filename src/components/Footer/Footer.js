// Footer.js (Conceptual update)
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
  const location = useLocation(); // Get current location

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info / Logo Section */}
        <div className="footer-group footer-about">
          <Link
            to="/"
            className={`footer-logo-link ${location.pathname === '/' ? 'active-footer-logo' : ''}`} // Apply active class if on homepage
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h2>SwiftDeal</h2>
            <span>-Global Marketplace-</span>
          </Link>
          <p className="footer-description">Kenya's premier marketplace for buying and selling products and services.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-group">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link to="/about" className={location.pathname === '/about' ? 'active-footer-link' : ''}>About Us</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-footer-link' : ''}>Contact Us</Link>
            <Link to="/terms" className={location.pathname === '/terms' ? 'active-footer-link' : ''}>Terms of Service</Link>
            <Link to="/privacy" className={location.pathname === '/privacy' ? 'active-footer-link' : ''}>Privacy Policy</Link>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="footer-group">
          <h3>Contact Us</h3>
          <div className="footer-contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> swiftdeal@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +254 722 960 044</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nairobi, Kenya</p>
          </div>
        </div>

        {/* Social Platforms Section */}
        <div className="footer-group">
          <h3>Our Platforms</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href=" https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-copy">&copy; 2025 SwiftDeal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;