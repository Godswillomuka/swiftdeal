import React from 'react';
import { Link } from 'react-router-dom';
import './SellerDashboard.css'; // Shared CSS for dashboards

function SellerDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Welcome to Your Seller Dashboard!</h1>
        <p>This is where sellers manage their products, orders, and business details.</p>
        <Link to="/" className="dashboard-link">Go to Home</Link>
        <button className="dashboard-logout-button" onClick={() => alert('Logged out!')}>Logout</button>
      </div>
    </div>
  );
}

export default SellerDashboard;