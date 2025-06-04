import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Shield, Clock, Star, TrendingUp, Store, ShoppingBag, Wrench } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Home.css';

// --- useInterval Hook (remains the same) ---
function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() { savedCallback.current(); }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
// --- End useInterval Hook ---

// Expanded Placeholder Image Data (remains the same as your input)
const imageData = [
  // --- All Categories (General Marketplace Vibe) ---
  { url: 'https://i.pinimg.com/736x/22/fb/78/22fb7858f90a79c917a4a2efae786ce1.jpg', category: 'All categories' },
  { url: 'https://i.pinimg.com/736x/90/a7/14/90a7149542f59305b8035b2296f57ff8.jpg', category: 'All categories' },
  { url: 'https://i.pinimg.com/736x/9a/32/51/9a3251e176544a068d5d6c9f46d51a8e.jpg', category: 'All categories' },
  { url: 'https://i.pinimg.com/73x/1d/a7/7a/1da77a25e2147c6b908ccdfe84012bbb.jpg', category: 'All categories' },
  { url: 'https://i.pinimg.com/73x/67/bc/3b/67bc3bbec41d895ba9e1d795fb194037.jpg', category: 'All categories' },

  // --- Electronics ---
  { url: 'https://i.pinimg.com/736x/cc/f3/f2/ccf3f24d450b41f8ca9f65a1bfdbf88a.jpg', category: 'Electronics' },
  { url: 'https://i.pinimg.com/736x/a8/33/7f/a8337f50ffaf22a9f4c350ed63362ec8.jpg', category: 'Electronics' },
  { url: 'https://i.pinimg.com/736x/ef/99/65/ef996542a1bb55c3d4f97928fa198276.jpg', category: 'Electronics' },
  { url: 'https://i.pinimg.com/736x/d0/91/6d/d0916d83f8fac27348a957e0e58db938.jpg', category: 'Electronics' },
  { url: 'https://i.pinimg.com/736x/bb/31/c2/bb31c26fcffdf72b62c5895e96d42b7a.jpg', category: 'Electronics' },

  // --- Fashion ---
  { url: 'https://i.pinimg.com/736x/7d/46/18/7d461808f381dca36dc271ca2494c9cd.jpg', category: 'Fashion' },
  { url: 'https://i.pinimg.com/736x/a7/80/dc/a780dccf3dc3548021248546a200cc5d.jpg', category: 'Fashion' },
  { url: 'https://i.pinimg.com/736x/b1/12/5b/b1125be85b26a460afde9aeaf6596c77.jpg', category: 'Fashion' },
  { url: 'https://i.pinimg.com/736x/f1/14/ec/f114ec1db5edacae5c72f4306eeef319.jpg', category: 'Fashion' },
  { url: 'https://i.pinimg.com/736x/15/87/f2/1587f2855a2c1c531f895cc4b6da5d33.jpg', category: 'Fashion' },

  // --- Home & Living ---
  { url: 'https://ke.jumia.is/cms/homepage/jme/new/cms-2023/week-39/CAT_HomeOffice_KE_230925_1.jpg', category: 'Home & Living' },
  { url: 'https://www.swiftdeal.com/placeholder-images/home-furniture.jpg', category: 'Home & Living' },
  { url: 'https://www.swiftdeal.com/placeholder-images/home-kitchenware.jpg', category: 'Home & Living' },
  { url: 'https://www.swiftdeal.com/placeholder-images/home-decor.jpg', category: 'Home & Living' },
  { url: 'https://ke.jumia.is/cms/homepage/jme/new/cms-2023/week-40/CAT_Appliances_KE_231002_1.jpg', category: 'Home & Living' },

  // --- Vehicles ---
  { url: 'https://www.topgear.com/sites/default/files/2022/08/BMW-iX1-001.jpg', category: 'Vehicles' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Toyota_Corolla_E120_front_20071118.jpg/800px-Toyota_Corolla_E120_front_20071118.jpg', category: 'Vehicles' },
  { url: 'https://www.swiftdeal.com/placeholder-images/vehicles-motorbike.jpg', category: 'Vehicles' },
  { url: 'https://www.swiftdeal.com/placeholder-images/vehicles-truck.jpg', category: 'Vehicles' },

  // --- Services ---
  { url: 'https://www.kenyayp.com/img/ke/c/_1487111090-19-plumbing-nairobi.jpg', category: 'Services' },
  { url: 'https://www.expertsinkenya.com/wp-content/uploads/2018/06/best-cleaning-services-nairobi-kenya.jpg', category: 'Services' },
  { url: 'https://www.swiftdeal.com/placeholder-images/services-tutoring.jpg', category: 'Services' },
  { url: 'https://www.swiftdeal.com/placeholder-images/services-digital.jpg', category: 'Services' },

  // --- Health & Beauty ---
  { url: 'https://www.swiftdeal.com/placeholder-images/health-beauty-cosmetics.jpg', category: 'Health & Beauty' },
  { url: 'https://www.swiftdeal.com/placeholder-images/health-beauty-skincare.jpg', category: 'Health & Beauty' },
  { url: 'https://www.swiftdeal.com/placeholder-images/health-beauty-supplements.jpg', category: 'Health & Beauty' },

  // --- Sports & Outdoors ---
  { url: 'https://www.swiftdeal.com/placeholder-images/sports-gym.jpg', category: 'Sports & Outdoors' },
  { url: 'https://www.swiftdeal.com/placeholder-images/sports-camping.jpg', category: 'Sports & Outdoors' },
  { url: 'https://www.swiftdeal.com/placeholder-images/sports-running.jpg', category: 'Sports & Outdoors' },

  // --- Books, Movies & Music ---
  { url: 'https://www.swiftdeal.com/placeholder-images/books-movies-music-book.jpg', category: 'Books, Movies & Music' },
  { url: 'https://www.swiftdeal.com/placeholder-images/books-movies-music-dvd.jpg', category: 'Books, Movies & Music' },
  { url: 'https://www.swiftdeal.com/placeholder-images/books-movies-music-vinyl.jpg', category: 'Books, Movies & Music' },

  // --- Toys & Kids ---
  { url: 'https://www.swiftdeal.com/placeholder-images/toys-kids-toy.jpg', category: 'Toys & Kids' },
  { url: 'https://www.swiftdeal.com/placeholder-images/toys-kids-babygear.jpg', category: 'Toys & Kids' },
  { url: 'https://www.swiftdeal.com/placeholder-images/toys-kids-stroller.jpg', category: 'Toys & Kids' },

  // --- Property ---
  { url: 'https://www.swiftdeal.com/placeholder-images/property-house.jpg', category: 'Property' },
  { url: 'https://www.swiftdeal.com/placeholder-images/property-apartment.jpg', category: 'Property' },
  { url: 'https://www.swiftdeal.com/placeholder-images/property-land.jpg', category: 'Property' },

  // --- Industrial & Scientific ---
  { url: 'https://www.swiftdeal.com/placeholder-images/industrial-tools.jpg', category: 'Industrial & Scientific' },
  { url: 'https://www.swiftdeal.com/placeholder-images/industrial-lab.jpg', category: 'Industrial & Scientific' },

  // --- Food & Groceries ---
  { url: 'https://www.swiftdeal.com/placeholder-images/food-groceries-fresh.jpg', category: 'Food & Groceries' },
  { url: 'https://www.swiftdeal.com/placeholder-images/food-groceries-packaged.jpg', category: 'Food & Groceries' },

  // --- Pet Supplies ---
  { url: 'https://www.swiftdeal.com/placeholder-images/pet-food.jpg', category: 'Pet Supplies' },
  { url: 'https://www.swiftdeal.com/placeholder-images/pet-accessories.jpg', category: 'Pet Supplies' },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [filteredImages, setFilteredImages] = useState(imageData);
  const [imagePositions, setImagePositions] = useState([]);

  const updateImagePositions = useCallback((index, images) => {
    if (!images || images.length === 0) {
      setImagePositions([]);
      return;
    }

    const newPositions = images.map((img, idx) => {
      let positionClass = 'hidden-off-screen';

      const activeIdx = index;
      const prevIdx = (index - 1 + images.length) % images.length;
      const nextIdx = (index + 1) % images.length;
      const furtherPrevIdx = (index - 2 + images.length) % images.length; // More prev for visual stack
      const furtherNextIdx = (index + 2) % images.length; // More next for visual stack


      if (idx === activeIdx) {
        positionClass = 'active-slide';
      } else if (idx === prevIdx) {
        positionClass = 'previous-slide';
      } else if (idx === nextIdx) {
        positionClass = 'next-slide';
      }
      // Add classes for more images in the stack
      else if (idx === furtherPrevIdx) {
        positionClass = 'further-previous-slide'; // Further below, more blurred/smaller
      } else if (idx === furtherNextIdx) {
        positionClass = 'further-next-slide'; // Further above, more blurred/smaller
      }

      return { ...img, positionClass };
    });
    setImagePositions(newPositions);
  }, []);

  useEffect(() => {
    updateImagePositions(currentImageIndex, filteredImages);
  }, [currentImageIndex, filteredImages, updateImagePositions]);

  const filterImages = useCallback((category) => {
    setSelectedCategory(category);
    if (category === 'All categories') {
      setFilteredImages(imageData);
    } else {
      // --- FIX: Only show images for the selected category ---
      setFilteredImages(imageData.filter(img => img.category === category));
    }
    setCurrentImageIndex(0); // Reset index when category changes
  }, []);

  const handleCategoryChange = (event) => {
    filterImages(event.target.value);
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  }, [filteredImages.length]);

  useInterval(nextImage, filteredImages.length > 0 ? 3000 : null);

  return (
    <div className="home-page">
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-left">
            <h1 className="fade-in">Your One-Stop Shop for Everything in Kenya</h1>
            <p className="fade-in">
              Join millions of buyers and sellers on SwiftDeal Kenya’s most trusted online platform.
              Discover unbeatable deals on electronics, fashion, vehicles, services, and more.
            </p>
            <div className="hero-buttons fade-in">
              <button className="get-started">Get Started</button>
              <button className="learn-more">Learn more</button>
            </div>
            <div className="stats fade-in">
              <div><span>50K+</span><br />Active Users</div>
              <div><span>100K+</span><br />Products</div>
              <div><span>24/7</span><br />Support</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="search-bar fade-in">
              <select className="category-select" value={selectedCategory} onChange={handleCategoryChange}>
                <option>All categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Living</option>
                <option>Vehicles</option>
                <option>Services</option>
                <option>Health & Beauty</option>
                <option>Sports & Outdoors</option>
                <option>Books, Movies & Music</option>
                <option>Toys & Kids</option>
                <option>Property</option>
                <option>Industrial & Scientific</option>
                <option>Food & Groceries</option>
                <option>Pet Supplies</option>
              </select>
              <input type="text" placeholder="What are you looking for?" />
              <button className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            <div className="carousel-wrapper">
              {filteredImages.length > 0 ? (
                imagePositions.map((img, index) => (
                  <div
                    key={img.url + index}
                    className={`carousel-slide ${img.positionClass}`}
                  >
                    <img src={img.url} alt={`SwiftDeal Item ${index}`} />
                  </div>
                ))
              ) : (
                <div className="hero-image-placeholder">No images found for this category.</div>
              )}
            </div>
          </div>
        </section>
         {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h3>Why Choose SwiftDeal?</h3>
            <p>
              We provide the best platform for buyers and sellers to connect,
              with features that make online commerce safe and easy.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-box"><Shield size={24} /></div>
              <h4>Secure Trading</h4>
              <p>Protected payments and verified sellers for your peace of mind</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Clock size={24} /></div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer service to assist you anytime</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Star size={24} /></div>
              <h4>Quality Products</h4>
              <p>Curated marketplace with high-quality items and services</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><TrendingUp size={24} /></div>
              <h4>Growing Fast</h4>
              <p>Join Kenya's fastest-growing online marketplace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="roles-section">
        <div className="container">
          <div className="section-header">
            <h3>Get Started Today</h3>
            <p>Choose your role and begin your journey with Brand Blast</p>
          </div>
          <div className="roles-grid">
            <div className="role-card">
              <div className="icon-box"><Store size={24} /></div>
              <h4>Sell Your Products</h4>
              <p>Start your online business for just 4000 KSH/month. Reach thousands of buyers and grow your brand.</p>
              <Link to="/dashboard/seller" className="role-btn">
                <Store size={20} />
                Go to Seller Dashboard
              </Link>
            </div>
            <div className="role-card">
              <div className="icon-box"><ShoppingBag size={24} /></div>
              <h4>Shop Smart</h4>
              <p>Find the best deals on electronics, fashion, home goods, and more. Shop with confidence.</p>
              <Link to="/dashboard/buyer" className="role-btn">
                <ShoppingBag size={20} />
                Go to Buyer Dashboard
              </Link>
            </div>
            <div className="role-card">
              <div className="icon-box"><Wrench size={24} /></div>
              <h4>Offer Services</h4>
              <p>List your professional services and connect with clients who need your expertise.</p>
              <Link to="/dashboard/seller" className="role-btn">
                <Wrench size={20} />
                Go to Services Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;