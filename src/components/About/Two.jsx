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
    <StyledSection>
      {/* Banner */}
      <div className="banner" ref={bannerRef}>
        <h2>25 Years of Excellence in Nutraceuticals</h2>
      </div>

      {/* About Us Section */}
      <div className="header-subsection clearfix" ref={headerRef}>
        <div className="col-md-7">
          <div className="header-subsection-left">
            <h1 className="page-title">About Us</h1>
            <div className="clearfix page-subtitle">
              <p>
                Goa Nutritions, a leading nutraceutical manufacturer for 25
                years, offers end-to-end solutions, regulatory compliance, and
                state-of-the-art facilities to produce tablets, capsules,
                liquids, and powders globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}

// Styled Components for custom styles
const StyledSection = styled.section`
  font-family: "Poppins", sans-serif;

  /* Banner Styles */
  .banner {
    background: linear-gradient(135deg, #6e45e2, #88d3ce);
    color: white;
    text-align: center;
    padding: 20px 0;
    font-size: 24px;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
  }

  .banner h2 {
    margin: 0;
    position: relative;
    z-index: 1;
  }

  /* Header Subsection */
  .header-subsection {
    max-width: 1170px;
    margin: 30px auto;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .col-md-7 {
    width: 58.3333%;
  }

  .header-subsection-left {
    background: #ffffff;
    padding: 53px 70px 54px 55px;
    margin-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.75) 2px 3px 20px -7px;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .page-title {
    font-size: 44px;
    font-weight: 600;
    margin-bottom: 20px;
    color: rgb(104, 52, 128);
  }

  .page-subtitle {
    font-size: 16px;
    font-weight: 300;
    color: rgb(27, 48, 59);
    line-height: 24px;
  }

  /* Animation Enhancements */
  @media (max-width: 768px) {
    .header-subsection {
      flex-direction: column;
      text-align: center;
    }

    .col-md-7 {
      width: 100%;
    }
  }
`;
