import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Welcome Back</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                required 
              />
            </div>
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
          <div className="login-footer">
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;