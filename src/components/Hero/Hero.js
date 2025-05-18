import React, { useState, useEffect } from 'react';
import './Hero.css';

const imagesByCategory = {
  'All categories': [
    'https://i.pinimg.com/736x/a0/51/26/a051268c7f24f8d2185f2721a3134c60.jpg',
    'https://i.pinimg.com/736x/4b/96/10/4b96106b73e7d41f69d912225191f26d.jpg',
    'https://i.pinimg.com/736x/29/55/2f/29552f5effbec209c7d70c35ccf63510.jpg',
    'https://i.pinimg.com/736x/9b/f1/10/9bf110d0d3d10d5fbc5cd43259012253.jpg',
    'https://i.pinimg.com/736x/67/bc/3b/67bc3bbec41d895ba9e1d795fb194037.jpg',
    'https://i.pinimg.com/736x/7b/12/4f/7b124f42aefb35999bab0f52ebf07e85.jpg',
    'https://i.pinimg.com/736x/36/41/5d/36415d1b12c6976a037b6dd82474fb1e.jpg'
  ],
  'Electronics': [
    'https://i.pinimg.com/736x/7b/12/4f/7b124f42aefb35999bab0f52ebf07e85.jpg',
    'https://i.pinimg.com/736x/36/41/5d/36415d1b12c6976a037b6dd82474fb1e.jpg'
  ],
  'Fashion': [
    'https://i.pinimg.com/736x/9b/f1/10/9bf110d0d3d10d5fbc5cd43259012253.jpg',
    'https://i.pinimg.com/736x/67/bc/3b/67bc3bbec41d895ba9e1d795fb194037.jpg'
  ],
};

const categories = Object.keys(imagesByCategory);

function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = imagesByCategory[selectedCategory] || [];

  useEffect(() => {
    if (currentImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % currentImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImages.length, selectedCategory]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentImageIndex(0);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm, 'in category:', selectedCategory);
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-headline">Your One-Stop Shop</h1>
          <h2 className="hero-subheadline">for Everything in Kenya</h2>
          <p className="hero-description">
            Join millions of buyers and sellers on SwiftDeal, Kenya's most trusted online platform. 
            Discover unbeatable deals on electronics, fashion, vehicles, services, and more. 
            Whether you're looking to buy, sell, or grow your business, SwiftDeal is your go-to destination.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="stats">
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">  
              <h3>100K+</h3>
              <p>Products</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="category-select"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={handleSearchInputChange}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          <div className="image-carousel">
            {currentImages.length > 0 ? (
              <div className="carousel-slide">
                <img
                  src={currentImages[currentImageIndex]}
                  alt={`Featured ${selectedCategory} product`}
                  className="carousel-image"
                />
                {currentImages.length > 1 && (
                  <div className="carousel-indicators">
                    {currentImages.map((_, index) => (
                      <span
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="no-images">No images available for this category</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;