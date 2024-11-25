import React from 'react';
import './OverviewSection.css'; // Import the CSS file
const OurReachSection = () => {
  return (
    <section className="tp-our-reach-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="ourreach-left-content">
            <div className="text-content">
              <p className="title">Our Reach</p>
              <p className="subtitle">Marketing Presence in 50+ Countries</p>
            </div>
            <img
              alt="WorldMap"
              src="https://www.torrentpharma.com/assets/world_map_b60323c440.png"
              className="world-map"
            />
          </div>
          <div className="ourreach-right-content">
            <div className="country-info">
              <a href="https://www.torrentpharma.com/business-area/india-business/" className="country-link">
                <p className="country-name">India</p>
                <div className="arrow-icon">
                  <svg height="14" width="7" fill="none" viewBox="0 0 7 14">
                    <path d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z" fill="white" />
                  </svg>
                </div>
              </a>
              <p className="country-description">
                Immune Science, a flagship company committed to innovation, was founded with a vision to revolutionize the pharmaceutical industry...
              </p>
            </div>
            <img
              alt="ourreachborder2"
              src="https://www.torrentpharma.com/_next/static/media/ourreachborder2.331be6cd.svg"
              className="border-image"
            />
            <div className="country-info">
              <a href="https://www.torrentpharma.com/business-area/international-business/" className="country-link">
                <h6 className="country-name">International</h6>
                <div className="arrow-icon">
                  <svg height="14" width="7" fill="none" viewBox="0 0 7 14">
                    <path d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z" fill="white" />
                  </svg>
                </div>
              </a>
              <p className="country-description">
                Immune Science has a robust presence in over 50 countries, driven by strong technical expertise and international accreditations...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurReachSection;