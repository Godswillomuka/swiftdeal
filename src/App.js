import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AboutUs from './pages/AboutUs /AboutUs';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
      </Routes>
    </div>
  );
}

export default App;