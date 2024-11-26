import React from 'react';
import './WideRange.css';

const OverviewSection = () => {
  return (
    <section className="overview-section">
      <div className="overview-container">
        <div className="overview-left">
          <div className="overview-header">
            <h2 className="overview-title">Technology Used</h2>
            <a className="overview-arrow" href="#">
              <img 
                alt="therapeuticareasarrow" 
                src="https://www.torrentpharma.com/assets/arrow_right_c02c886861.svg" 
              />
            </a>
          </div>
          <p className="overview-description">
          Corporate Social Responsibility (CSR) is a company's commitment to support activities and resources to improve the social and economic development. CSR can also refer to a company's environmental, social, and economic performance. 
Participate in philanthropic causes
Environmental responsibility
Ethical/human rights responsibility
Philanthropic responsibility
Economic responsibility
Give back to the community
Provide positive social value
Build a positive brand
Forge a stronger bond between employees and corporations
Boost morale
Help employees and employers feel more connected to the world around them
          </p>
        </div>
        <div className="overview-right">
          <div className="overview-facts">
          <div className="facts-flex">
            <FactItem 
              number="8" 
              label="Physical Processings" 
              imgSrc="https://tirupatigroup.co.in/wp-content/custom/images/RnD/physical_icon.svg" 
            />
            <FactItem 
              number="750+" 
              label="Layering & Coating" 
              imgSrc="https://tirupatigroup.co.in/wp-content/custom/images/RnD/layering_icon.svg" 
            /></div>
            <div className="facts-flex">
            <FactItem 
              number="2000+" 
              label="Capsules Technology" 
              imgSrc="https://tirupatigroup.co.in/wp-content/custom/images/RnD/capsules_icon.svg" 
            />
            <FactItem 
              number="50+" 
              label="Packaging Technology" 
              imgSrc="https://tirupatigroup.co.in/wp-content/custom/images/RnD/packaging_icon.svg" 
            /> </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FactItem = ({ number, label, imgSrc }) => {
  return (
    <div className="fact-item">
      <p className="fact-number">{number}</p>
      <div className="fact-details">
        <img alt={label} src={imgSrc} />
        <span className="fact-label">{label}</span>
      </div>
    </div>
  );
};

export default OverviewSection;