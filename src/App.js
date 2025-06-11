// src/App.js
import { Routes, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';// Removed BrowserRouter import
import Home from './pages/HomePage/Home';
import AboutUs from './pages/AboutUs /AboutUs';
import TermsOfService from './pages/TermsPage/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import ContacUs from './pages/ContactUs/ContactUs';

// Authentication & Dashboards
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/SignUp';
import Sell from './pages/SellPage/Sell';
import BuyerDashboard from './pages/BuyerDashboard/BuyerDashboard';
import SellerDashboard from './pages/SellerDashboard/SellerDashboard';


function App() {
  return (
    // <Router> is removed from here
    <div className="app"> {/* You can keep this div or remove it if not needed */}
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContacUs />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller-signup" element={<Sell />} />

        {/* User Dashboards (simulated) */}
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={
          <div style={{minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', color: '#05161a'}}>
            <h2>404 - Page Not Found</h2>
            <Link to="/" style={{fontSize: '1rem', marginTop: '1rem', color: '#1c626e', textDecoration: 'none', fontWeight: 'bold'}}>Go to Home</Link>
          </div>
        } />
      </Routes>
    </div>
    // </Router> is removed from here
  );
}

export default App;