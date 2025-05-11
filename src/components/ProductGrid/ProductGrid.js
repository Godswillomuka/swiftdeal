import React from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Smartphone', price: '$299', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Laptop', price: '$899', image: 'https://www.pinterest.com/pin/403142604166539853/' },
    { id: 3, name: 'Headphones', price: '$99', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Smart Watch', price: '$199', image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Camera', price: '$499', image: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Speaker', price: '$149', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <section className="product-grid">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <Link to={`/product/${product.id}`} className="view-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;