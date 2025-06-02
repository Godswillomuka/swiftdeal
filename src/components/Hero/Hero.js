import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Your One-Stop Shop for Everything in Kenya</h1>
        <p>
          Join millions of buyers and sellers on SwiftDeal Kenya’s most trusted online platform.
          Discover unbeatable deals on electronics, fashion, vehicles, services, and more.
        </p>
        <div className="hero-buttons">
          <button className="get-started">Get Started</button>
          <button className="learn-more">Learn more</button>
        </div>
        <div className="stats">
          <div><span>50K+</span><br />Active Users</div>
          <div><span>100K+</span><br />Products</div>
          <div><span>24/7</span><br />Support</div>
        </div>
      </div>

      <div className="hero-right">
        <div className="search-bar">
          <select className="category-select">
            <option>All categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Services</option>
          </select>
          <input type="text" placeholder="What are you looking for?" />
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="hero-image">
          <img src="https://i.pinimg.com/736x/f9/bb/e3/f9bbe3f50c84fbd60ba7f6bdb962e028.jpg" alt="SwiftDeal Items" />
        </div>

        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
