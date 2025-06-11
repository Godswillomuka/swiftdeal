import React from 'react';
import { Link } from 'react-router-dom';
import './BuyerDashboard.css'; // Shared CSS for dashboards

function BuyerDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Welcome to Your Buyer Dashboard!</h1>
        <p>This is where buyers manage their purchases, wishlists, and profile.</p>
        <Link to="/" className="dashboard-link">Go to Home</Link>
        <button className="dashboard-logout-button" onClick={() => alert('Logged out!')}>Logout</button>
      </div>
    </div>
  );
}

export default BuyerDashboard;