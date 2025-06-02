import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter,} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-content">
        <div className="footer-logo">
          <h3>SwiftDeal</h3>
          <p>-Global Marketplace-</p>
        </div>

        <div className="footer-links">
          <a href="#About">About Us</a>
          <a href="#Contact">Contact Us</a>
          <a href="#Terms">Terms of Services</a>
          <a href="#Policy">Privacy Policy</a>
        </div>

        <div className="footer-social">
          <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
          <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
          <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
        </div>
      </div>

      <p className="footer-copy">&copy; 2025 SwiftDeal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
