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
                  label="Physical Processings"
                  imgSrc="https://tirupatigroup.co.in/wp-content/custom/images/RnD/physical_icon.svg"
                  largeImageSrc="https://i.postimg.cc/x17q4wxs/1d1367b44f5ac7b1bba3aaac333d4cfd.jpg"
                />
                <FactItem
                  label="Layering & Coating"
                  imgSrc="https://tirupatigroup.co.in/wp-content/custom/images/RnD/layering_icon.svg"
                  largeImageSrc="https://i.postimg.cc/sDhLW7Fv/b15138ffc80e281dc6b08152c6a66193.jpg"
                />
              </div>
              <div className="facts-flex">
                <FactItem
                  label="Capsules Technology"
                  imgSrc="https://tirupatigroup.co.in/wp-content/custom/images/RnD/capsules_icon.svg"
                  largeImageSrc="https://i.postimg.cc/t45G1WPF/c4566893b212316793cbea531db04ef8.jpg"
                />
                <FactItem
                  label="Packaging Technology"
                  imgSrc="https://tirupatigroup.co.in/wp-content/custom/images/RnD/packaging_icon.svg"
                  largeImageSrc="https://i.postimg.cc/fRHgnKmq/670c3ab6639af19fb8ad61fec5aec0e4.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FactItem = ({ label, imgSrc, largeImageSrc }) => {
  return (
    <div className="fact-item">
      <img alt={label} src={largeImageSrc} className="large-image" />
      <div className="fact-details">
        <img alt={label} src={imgSrc} className="fact-icon" />
        <span className="fact-label">{label}</span>
      </div>
    </div>
  );
};

export default OverviewSection;
