import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AboutUs from './pages/AboutUs /AboutUs';
import TermsOfService from './pages/TermsPage/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;