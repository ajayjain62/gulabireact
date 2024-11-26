import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for content
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <Section ref={sectionRef}>
      <div className="background-animation"></div>
      <div className="who-we-are-container">
        <h2 className="who-we-are-title">Who We Are</h2>
        <p className="who-we-are-description">
          Goa Nutritions (GNPL) is a certified Nutraceutical manufacturing
          company, proudly established 25 years ago with a vision to become one
          of India’s most renowned healthcare companies. Our mission is rooted
          in the dedication to improving human health.
        </p>
        <p className="who-we-are-description">
          At GNPL, we provide comprehensive end-to-end solutions, from concept
          development to the successful launch of products, all within the
          shortest possible time. As a leader in the field, we operate multiple
          state-of-the-art manufacturing facilities located in Santej, Gujarat,
          India.
        </p>
        <p className="who-we-are-description">
          With our in-house capabilities ensuring global regulatory compliance,
          we specialize in manufacturing a versatile range of products
          including tablets, capsules, oral liquids, and protein powders.
          Trusted by strategic partners in the healthcare and food industries,
          GNPL continues to lead the way in innovation and reliability.
        </p>
      </div>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 60px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 1200px;
  margin: 40px auto;

  .background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      120deg,
      #6e44ff,
      #1c1c54,
      #6e44ff,
      #000
    );
    background-size: 300% 300%;
    animation: gradientShift 10s ease infinite;
    z-index: -1;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .who-we-are-container {
    position: relative;
    z-index: 2;
    text-align: center;
    color: #fff;
  }

  .who-we-are-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #ffffff;
    position: relative;
  }

  .who-we-are-description {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #f1f1f1;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  @media (max-width: 768px) {
    .who-we-are-title {
      font-size: 2rem;
    }

    .who-we-are-description {
      font-size: 1rem;
    }
  }
`;

export default WhoWeAre;
