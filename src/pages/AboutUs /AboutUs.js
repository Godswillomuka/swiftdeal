import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './AboutUs.css';
import { Users, Building, Globe, Award } from 'lucide-react';

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutus-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg"></div>
          <div className="hero-content">
            <h1 className="hero-title">Our Story</h1>
            <p className="hero-text">
              Brand Blast was founded in 2023 with a simple mission: to revolutionize how Kenyans buy and sell online.
              Today, we're Kenya's fastest-growing marketplace, connecting thousands of sellers with millions of buyers.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="vision-mission-section">
          <div className="vision-box">
            <h2>Our Vision</h2>
            <p>
              To become Africa's most trusted and innovative e-commerce platform,
              empowering businesses and consumers to thrive in the digital economy.
            </p>
          </div>
          <div className="mission-box">
            <h2>Our Mission</h2>
            <p>
              To provide a secure, efficient, and user-friendly marketplace that connects
              sellers and buyers, while fostering economic growth in Kenya and beyond.
            </p>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="stats-section">
          <div className="stat-card">
            <div className="stat-icon"><Users size={32} /></div>
            <h3>50K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Building size={32} /></div>
            <h3>1000+</h3>
            <p>Registered Businesses</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Globe size={32} /></div>
            <h3>47</h3>
            <p>Counties Covered</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Award size={32} /></div>
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="CEO" />
              <h3>David Kamau</h3>
              <p className="role">Chief Executive Officer</p>
              <p className="desc">15+ years experience in e-commerce and digital transformation</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" alt="COO" />
              <h3>Sarah Odhiambo</h3>
              <p className="role">Chief Operations Officer</p>
              <p className="desc">Former Operations Director at leading tech companies</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" alt="CTO" />
              <h3>Michael Gitonga</h3>
              <p className="role">Chief Technology Officer</p>
              <p className="desc">Tech innovator with multiple successful startups</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly push boundaries to create better solutions for our users.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We maintain the highest standards of honesty and transparency.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>We're committed to empowering local businesses and communities.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
