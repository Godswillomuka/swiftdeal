import React from 'react';
import { Lock } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './PrivacyPolicy.css'; // Import the new CSS file

function PrivacyPolicy() {
  return (
    <>
    <Navbar />
    <div className="privacy-policy-container">
      <div className="privacy-content-wrapper">
        <div className="max-w-4xl mx-auto">
          <div className="privacy-header">
            <Lock className="header-icon" />
            <h1 className="header-title">Privacy Policy</h1>
            <p className="last-updated">Last updated: March 15, 2025</p>
          </div>

          <div className="privacy-body-card">
            <section>
              <h2 className="section-heading">1. Information We Collect</h2>
              <div className="section-content-group">
                <p className="section-text">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="policy-list">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Transaction history</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-heading">2. How We Use Your Information</h2>
              <div className="section-content-group">
                <p className="section-text">
                  We use the information we collect to:
                </p>
                <ul className="policy-list">
                  <li>Process your transactions</li>
                  <li>Provide customer support</li>
                  <li>Send important updates</li>
                  <li>Improve our services</li>
                  <li>Prevent fraud</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-heading">3. Information Sharing</h2>
              <p className="section-text">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="policy-list mt-4">
                <li>Service providers who assist our operations</li>
                <li>Law enforcement when required by law</li>
                <li>Other users as needed to complete transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="section-heading">4. Data Security</h2>
              <p className="section-text">
                We implement appropriate security measures to protect your personal information.
                This includes encryption, secure servers, and regular security audits.
              </p>
            </section>

            <section>
              <h2 className="section-heading">5. Your Rights</h2>
              <div className="section-content-group">
                <p className="section-text">
                  You have the right to:
                </p>
                <ul className="policy-list">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-heading">6. Cookies</h2>
              <p className="section-text">
                We use cookies and similar technologies to improve user experience and analyze website traffic.
                You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="section-heading">7. Contact Us</h2>
              <p className="section-text">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="contact-info">
                <p>Email: privacy@swiftdeal.co.ke</p>
                <p>Phone: +254 722 960 044</p> {/* Changed to generic placeholder */}
                <p>Address: Nairobi, Kenya</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default PrivacyPolicy;