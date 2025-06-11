import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ContactUs.css'; // Import the new CSS file

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API)
    console.log('Form submitted:', formData);
    // You might want to add a success message or clear the form here
    setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    alert('Message sent successfully!'); // Simple alert for demo
  };

  return (
    <>
    <Navbar />
    <div className="contact-us-container">
      <div className="contact-content-wrapper">
        <div className="max-w-4xl mx-auto">
          <h1 className="contact-title">Contact Us</h1>
          
          {/* Contact Information Cards */}
          <div className="contact-info-grid">
            <div className="info-card">
              <div className="info-icon-wrapper">
                <Phone className="info-icon" />
              </div>
              <h3 className="info-title">Phone</h3>
              <p className="info-text">+254 722 960 044</p> {/* Generic placeholder */}
            </div>
            
            <div className="info-card">
              <div className="info-icon-wrapper">
                <Mail className="info-icon" />
              </div>
              <h3 className="info-title">Email</h3>
              <p className="info-text">info@swiftdeal.co.ke</p> {/* Updated brand email */}
            </div>
            
            <div className="info-card">
              <div className="info-icon-wrapper">
                <MapPin className="info-icon" />
              </div>
              <h3 className="info-title">Address</h3>
              <p className="info-text">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="form-input"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="submit-button"
              >
                <Send className="submit-icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ContactUs;