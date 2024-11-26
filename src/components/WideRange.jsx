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
            Immune Science, a leading force in the global pharmaceutical industry, is pioneering in niche markets with a focus on therapeutic areas such as cardiovascular (CV), central nervous system (CNS), gastro-intestinal (GI), women’s healthcare (WHC), vitamins, minerals, nutritionals (VMN), and cosmo-dermatology. Our expertise also extends to diabetology, pain management, gynaecology, oncology, and anti-infective segments. With a presence in over 50 countries, Immune Science holds a top market position, especially in key regions like Brazil and Germany.
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