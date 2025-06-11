import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react'; // Keep other Lucide icons
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import Font Awesome 6 Eye icons
import Navbar from '../../components/Navbar/Navbar'; // Import Navbar
import Footer from '../../components/Footer/Footer'; // Import Footer
import './Login.css'; // Import the CSS file

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handles changes to form input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value
    }));
  };

  // Toggles the visibility of the password input field
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);

    // --- SIMULATED LOGIN LOGIC ---
    // In a real application, this logic would involve calling an authentication API.
    // For demonstration, we're simulating user types based on hardcoded emails.
    let userType = null;

    if (formData.email === 'seller@example.com' && formData.password === 'password123') {
      userType = 'seller';
    } else if (formData.email === 'buyer@example.com' && formData.password === 'password123') {
      userType = 'buyer';
    } else {
      // Alert for invalid credentials
      alert('Invalid credentials. Try seller@example.com or buyer@example.com with password: password123');
      return; // Stop further execution if login fails
    }

    // Success alert and redirection based on user type
    alert(`Login successful as a ${userType}!`);

    if (userType === 'seller') {
      navigate('/seller-dashboard'); // Redirect to seller dashboard
    } else if (userType === 'buyer') {
      navigate('/buyer-dashboard'); // Redirect to buyer dashboard
    }
  };

  return (
    <>
      <Navbar /> {/* Renders the navigation bar at the top */}
      {/* Outer container for consistent page layout and background */}
      <div className="auth-page-container">
        {/* The main card containing the login form */}
        <div className="auth-card">
          {/* User icon displayed above the title */}
          <User className="auth-header-icon" />
          <h1 className="auth-title">Login to your SwiftDeal account</h1>
          <form onSubmit={handleSubmit} className="auth-form">
            {/* Email input group */}
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email Address</label>
              <div className="input-with-icon">
                <Mail className="input-icon" /> {/* Mail icon */}
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="auth-input"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password input group with toggle */}
            <div className="input-group">
              <label htmlFor="password" className="input-label">Password</label>
              <div className="input-with-icon">
                <Lock className="input-icon" /> {/* Lock icon */}
                <input
                  type={showPassword ? 'text' : 'password'} // Toggles between text and password type
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="auth-input password-input" // Added class for specific padding
                  placeholder="Enter your password"
                  required
                />
                {/* Password visibility toggle button */}
                <button type="button" onClick={togglePasswordVisibility} className="password-toggle-button">
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Changes icon based on visibility */}
                </button>
              </div>
              <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
            </div>

            {/* Login submission button */}
            <button type="submit" className="auth-button">Login</button>
          </form>

          {/* Alternate text for navigation to signup pages */}
          <p className="auth-alt-text">
            Don't have an account? <Link to="/signup" className="auth-alt-link">Sign Up as Buyer</Link> or{' '}
            <Link to="/seller-signup" className="auth-alt-link">Register as Seller</Link>
          </p>
        </div>
      </div>
      <Footer /> {/* Renders the footer at the bottom */}
    </>
  );
}

export default Login;
