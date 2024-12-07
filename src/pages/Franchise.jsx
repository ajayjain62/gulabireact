import React from 'react';
import './FranchisePage.css';

const FranchisePage = () => {
  return (
    <div className="franchise-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Partner with Us</h1>
          <p>Your gateway to a successful pharmaceutical franchise.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <section className="benefits-section">
        <h2>Why Choose Our Franchise?</h2>
        <div className="benefits">
          <div className="benefit-card">
            <img src="benefit1.png" alt="High-Quality Products" />
            <h3>High-Quality Products</h3>
            <p>We offer a wide range of premium pharmaceutical products.</p>
          </div>
          <div className="benefit-card">
            <img src="benefit2.png" alt="Extensive Support" />
            <h3>Extensive Support</h3>
            <p>Enjoy end-to-end assistance in setting up and operating.</p>
          </div>
          <div className="benefit-card">
            <img src="/show/417099/marketing-hand-give-bar-chart-statistic.svg" alt="Marketing Assistance" />
            <h3>Marketing Assistance</h3>
            <p>Get expert marketing strategies tailored to your needs.</p>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <h2>How to Join?</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Submit Application</h3>
            <p>Complete the online form to express your interest.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Get Approved</h3>
            <p>Our team will evaluate and approve your application.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Launch Franchise</h3>
            <p>Start operating under our guidance and brand.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Pharmaceutical Franchise. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FranchisePage;
