import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  // Define the darkMode state
  const [darkMode, setDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle the state
    document.body.classList.toggle('dark-mode'); // Toggle the class on the body
  };

  // Persist theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []); // Run once on component mount

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode); // Save the theme preference
  }, [darkMode]); // Update localStorage whenever darkMode changes

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

        {/* Theme Toggle Button */}
        <label className="theme-toggle">
          <input
            type="checkbox"
            checked={darkMode} // Bind the checkbox to the darkMode state
            onChange={toggleTheme} // Call toggleTheme when the checkbox changes
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;