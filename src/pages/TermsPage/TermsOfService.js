import React from 'react';
import { Shield } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar'; 
import Footer from '../../components/Footer/Footer';   
import './TermsOfService.css'; // Adjust the path as necessary


function TermsOfService() {
  return (
    <>
      <Navbar />
    <div className="terms-of-service-container">
      <div className="terms-content-wrapper">
        <div className="max-w-4xl mx-auto">
          <div className="terms-header">
            <Shield className="header-icon" />
            <h1 className="header-title">Terms of Service</h1>
            <p className="last-updated">Last updated: March 15, 2025</p>
          </div>

          <div className="terms-body-card">
            <section>
              <h2 className="section-heading">1. Introduction</h2>
              <p className="section-text">
                Welcome to SwiftDeal. By accessing our website at swiftdeal.co.ke, you agree to these terms of service.
                These terms apply to all users of the site, including buyers, sellers, and visitors.
              </p>
            </section>

            <section>
              <h2 className="section-heading">2. User Accounts</h2>
              <div className="section-content-list">
                <p className="section-text">
                  When you create an account with us, you guarantee that the information you provide is accurate and complete.
                  You are responsible for maintaining the confidentiality of your account and password.
                </p>
                <ul className="terms-list">
                  <li>You must be at least 18 years old to use this service</li>
                  <li>You are responsible for all activities under your account</li>
                  <li>You must notify us of any security breaches</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-heading">3. Seller Obligations</h2>
              <div className="section-content-list">
                <p className="section-text">
                  As a seller on SwiftDeal, you agree to:
                </p>
                <ul className="terms-list">
                  <li>Provide accurate product descriptions and images</li>
                  <li>Maintain fair pricing practices</li>
                  <li>Process orders in a timely manner</li>
                  <li>Handle customer service professionally</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-heading">4. Buyer Guidelines</h2>
              <div className="section-content-list">
                <p className="section-text">
                  As a buyer on SwiftDeal, you agree to:
                </p>
                <ul className="terms-list">
                  <li>Provide accurate payment information</li>
                  <li>Complete transactions you initiate</li>
                  <li>Respect seller policies and terms</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-heading">5. Prohibited Activities</h2>
              <div className="section-content-list">
                <p className="section-text">
                  Users are prohibited from:
                </p>
                <ul className="terms-list">
                  <li>Posting illegal or unauthorized content</li>
                  <li>Engaging in fraudulent activities</li>
                  <li>Harassing other users</li>
                  <li>Attempting to hack or disrupt the service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-heading">6. Termination</h2>
              <p className="section-text">
                We reserve the right to terminate or suspend access to our service immediately, without prior notice,
                for any breach of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="section-heading">7. Changes to Terms</h2>
              <p className="section-text">
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating
                the date at the top of this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>);
}

export default TermsOfService;