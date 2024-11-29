import React from 'react';
import './ConsumerHealthcareBrands.css'; // Import the CSS file

const ConsumerHealthcareBrands = () => {
  return (
    <section className="tp_healthcare_brands_section">
      <div className="grid">
        <div className="flex-container">
          <div className="text-section">
            <a className="header-link" href="#">
              <p className="header-text">Consumer Healthcare Brands</p>
              <div className="arrow-container">
                <svg height="14" width="7" fill="none" viewBox="0 0 7 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z" fill="#363678" />
                </svg>
              </div>
            </a>
            <p className="sub-header-text">We care about your overall health</p>
          </div>
          <div className="our_brands_wrapper">
            <BrandCard
              className="tedibar"
              imgSrc="https://i.postimg.cc/9QHPzNHN/glutathione.png"
              imgAlt="Tedibar"
              brandImgSrc="https://i.postimg.cc/XN9cKLXT/goa-nutrition.png"
              brandAlt="Tedibar Product"
              arrowImgSrc="https://www.torrentpharma.com/assets/whitearrow_b698995a15.svg"
              arrowAlt="Brands Arrow"
            />
            <BrandCard
              className="shalcal"
              imgSrc="https://i.postimg.cc/T2V36zgn/Untitled-192-x-40-px.png"
              imgAlt="Shelcal"
              brandImgSrc="https://i.postimg.cc/25ssLGX0/Untitled-design-18.png"
              brandAlt="Shelcal Product"
              arrowImgSrc="https://www.torrentpharma.com/assets/whitearrow_b698995a15.svg"
              arrowAlt="Brands Arrow"
            />
            <BrandCard
              className="unienzyme"
              imgSrc="https://i.postimg.cc/hPdbDR6d/biotin.png"
              imgAlt="Unienzyme"
              brandImgSrc="	https://i.postimg.cc/d3PyhhCb/goa-nutrition-3.png"
              brandAlt="Unienzyme Product"
              arrowImgSrc="https://www.torrentpharma.com/assets/whitearrow_b698995a15.svg"
              arrowAlt="Brands Arrow"
            />
            <BrandCard
              className="ahaglow"
              imgSrc="https://i.postimg.cc/3xjXGCKr/collagen.png"
              imgAlt="Ahaglow"
              brandImgSrc="https://i.postimg.cc/D0XX58HH/goa.png"
              brandAlt="Ahaglow Product"
              arrowImgSrc="https://www.torrentpharma.com/assets/whitearrow_b698995a15.svg"
              arrowAlt="Brands Arrow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BrandCard = ({ className, imgSrc, imgAlt, brandImgSrc, brandAlt, arrowImgSrc, arrowAlt }) => {
  return (
    <a className={`brand-card ${className}`} href="#">
      <div className="brand-content">
        <img className="brand-image" alt={imgAlt} src={imgSrc} />
        <img className="arrow-image" alt={arrowAlt} src={arrowImgSrc} />
      </div>
      <img className={`brand-product ${className}`} alt={brandAlt} src={brandImgSrc} />
    </a>
  );
};

export default ConsumerHealthcareBrands;