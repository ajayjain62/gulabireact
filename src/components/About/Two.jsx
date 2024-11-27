import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

export default function Component() {
  const headerRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    ).fromTo(
      bannerRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5 },
      "-=0.5"
    );
  }, []);

  return (
    <StyledWrapper>
      {/* Banner */}
      <div className="custom-banner" ref={bannerRef}>
        <h2 className="banner-heading">
          25 Years of Excellence in Nutraceuticals
        </h2>
      </div>

      {/* About Us Section */}
      <div className="about-section" ref={headerRef}>
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
              Goa Nutritions, a leading nutraceutical manufacturer for 25 years,
              offers end-to-end solutions, regulatory compliance, and
              state-of-the-art facilities to produce tablets, capsules, liquids,
              and powders globally.
            </p>
          </div>
          <div className="about-image">
            {/* Placeholder for an image */}
            <img
              src="https://via.placeholder.com/400x300"
              alt="About Goa Nutritions"
              className="image-placeholder"
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

// Styled Components with unique class names
const StyledWrapper = styled.section`
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;

  /* Banner Styles */
  .custom-banner {
    background: linear-gradient(135deg, rgb(63, 81, 181), rgb(104, 52, 128));
    color: white;
    text-align: center;
    padding: 50px 20px;
    position: relative;
    overflow: hidden;
    width: 100%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .banner-heading {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
  }

  /* About Section Styles */
  .about-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    padding: 40px 20px;
  }

  .about-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    color: rgb(104, 52, 128);
    width: 100%;
    gap: 20px;
  }

  .about-text {
    flex: 1;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .about-title {
    font-size: 32px;
    font-weight: 600;
    color: rgb(104, 52, 128);
    margin-bottom: 15px;
  }

  .about-description {
    font-size: 16px;
    font-weight: 300;
    color: rgb(60, 60, 60);
    line-height: 1.8;
  }

  .about-image {
    flex: 1;
    text-align: center;
  }

  .image-placeholder {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .about-content {
      flex-direction: column;
    }

    .about-text,
    .about-image {
      width: 100%;
      padding: 10px;
    }

    .about-title {
      font-size: 24px;
    }

    .about-description {
      font-size: 14px;
    }
  }
`;
