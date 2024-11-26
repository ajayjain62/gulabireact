import React from 'react';
import './WideRange.css';

const OverviewSection = () => {
  return (
    <div className="background">
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
          Nutritional manufacturer research and development facilities play a critical role in the development of new and improved nutritional products. These facilities are designed to study the effects of various ingredients and formulas on human health, and to ensure that the products produced are safe, effective, and meet all regulatory requirements.
          Goa Nutritions serves Customized Product Development Service (CPDS) and work as Contract Research Organisation (CRO)

Provides end-to-end formulation development services ranging from early development to clinical supplies of new product development for the Pharmaceutical, Ayurveda & Sports Nutrition industry. oral powder oral liquid topical administration.
Formulation development effort revolves around developing the best formulation for your compound, focusing on the desired bioavailability and optimal stability of product.
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
    </div>
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