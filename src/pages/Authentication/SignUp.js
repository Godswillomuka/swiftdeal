import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react'; // Keep other Lucide icons
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import Font Awesome 6 Eye icons
import Navbar from '../../components/Navbar/Navbar'; // Import Navbar
import Footer from '../../components/Footer/Footer'; // Import Footer
import './Signup.css'; // Import the CSS file

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  // States to manage password visibility for both password fields
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  // Handles changes to form input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value
    }));
  };

  // Toggles the visibility of the main password input field
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggles the visibility of the confirm password input field
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Validate if terms are agreed to
    if (!agreedToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy to create an account.");
      return;
    }

    console.log('Buyer Signup form submitted:', { ...formData, userType: 'buyer' });
    alert('Buyer account created for: ' + formData.email);

    // Simulate successful registration and redirect to buyer dashboard
    navigate('/buyer-dashboard');
  };

  return (
    <>
      <Navbar /> {/* Renders the navigation bar at the top */}
      {/* Outer container for consistent page layout and background */}
      <div className="auth-page-container">
        {/* The main card containing the signup form */}
        <div className="auth-card">
          {/* User icon displayed above the title */}
          <User className="auth-header-icon" />
          <h1 className="auth-title">Create your SwiftDeal account</h1>
          <form onSubmit={handleSubmit} className="auth-form">
            {/* Full Name input group */}
            <div className="input-group">
              <label htmlFor="name" className="input-label">Full Name</label>
              <div className="input-with-icon">
                <User className="input-icon" /> {/* User icon */}
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="auth-input"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  required
                />
                {/* Password visibility toggle button */}
                <button type="button" onClick={togglePasswordVisibility} className="password-toggle-button">
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Changes icon based on visibility */}
                </button>
              </div>
            </div>

            {/* Confirm Password input group with toggle */}
            <div className="input-group">
              <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
              <div className="input-with-icon">
                <Lock className="input-icon" /> {/* Lock icon */}
                <input
                  type={showConfirmPassword ? 'text' : 'password'} // Toggles between text and password type
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="auth-input password-input" // Added class for specific padding
                  placeholder="Re-enter your password"
                  required
                />
                {/* Confirm password visibility toggle button */}
                <button type="button" onClick={toggleConfirmPasswordVisibility} className="password-toggle-button">
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />} {/* Changes icon based on visibility */}
                </button>
              </div>
            </div>

            {/* Terms and Service / Privacy Policy Checkbox */}
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="termsAgree"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="terms-checkbox"
              />
              <label htmlFor="termsAgree" className="terms-label">
                I agree to the <Link to="/terms" className="terms-link">Terms of Service</Link> and{' '}
                <Link to="/privacy" className="terms-link">Privacy Policy</Link>
              </label>
            </div>

            {/* Signup submission button, disabled if terms not agreed */}
            <button
              type="submit"
              className="auth-button"
              disabled={!agreedToTerms}
            >
              Sign Up
            </button>
          </form>

          {/* Alternate text for navigation to login page */}
          <p className="auth-alt-text">
            Already have an account? <Link to="/login" className="auth-alt-link">Log In</Link>
          </p>
        </div>
      </div>
      <Footer /> {/* Renders the footer at the bottom */}
    </>
  );
}

export default Signup;
