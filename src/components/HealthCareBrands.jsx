import React from 'react';
import './HealthcareBrandsSection.css';

const HealthcareBrandsSection = () => {
  return (
    <section className="tp_healthcare_brands_section">
      <div className="grid mx-auto">
        <div className="flex flex-col justify-center items-center self-stretch gap-[60px]">
          <div className="flex flex-col items-start w-full">
            <a
              className="flex items-center justify-start gap-6"
              href="https://www.torrentpharma.com/ourproducts/our-brands/"
            >
              <p className="header-title">Consumer Healthcare Brands</p>
              <div className="arrow-icon">
                <svg
                  height="14"
                  width="7"
                  fill="none"
                  viewBox="0 0 7 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z" fill="#363678" />
                </svg>
              </div>
            </a>
            <p className="sub-title">We care about your overall health</p>
          </div>
          <div className="our_brands_wrapper">
            <a
              className="brand-card tedibar_box"
              href="https://tedibar.com/"
              target="_blank"
            >
              <div className="brand-content">
                <img
                  className="brand-logo"
                  alt="Tedibar"
                  src="https://www.torrentpharma.com/assets/Tedibar1_a5dc321917.svg"
                />
                <img
                  className="arrow-icon-small"
                  alt="Brandsarrow"
                  src="https://www.torrentpharma.com/assets/whitearrow_b698995a15.svg"
                />
              </div>
              <img
                className="product-image tedibar_prod_1"
                alt="CLIENT_TEDIBAR_SPOO Shampoo_MERGED (1).svg"
                src="https://www.torrentpharma.com/assets/CLIENT_TEDIBAR_SPOO_Shampoo_MERGED_1_bc834e36c0.svg"
              />
              <img
                className="product-image tedibar_prod_2"
                alt="Bathing bar.svg"
                src="https://www.torrentpharma.com/assets/Bathing_bar_8730b46f63.svg"
              />
            </a>

            {/* Additional brand cards can be added here in a similar manner */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareBrandsSection;