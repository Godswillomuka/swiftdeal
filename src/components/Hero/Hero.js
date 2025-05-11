import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Marketplace for Great Deals</h1>
        <p>Buy and sell with confidence on SwiftDeal</p>
        <div className="hero-buttons">
          <Link to="/products" className="btn-primary">
            Browse Products
          </Link>
          <Link to="/sell" className="btn-secondary">
            Start Selling
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;