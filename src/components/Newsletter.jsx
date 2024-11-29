import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-heading">Stay Inspired</h2>
          <p className="newsletter-subtext">
            Subscribe to our newsletter and be the first to get updates on
            wellness tips, healthcare products, and exclusive offers.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email address"
              aria-label="Email Address"
              required
            />
            <button type="submit" className="newsletter-button">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
