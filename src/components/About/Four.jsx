import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".what-we-do-animate");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Section ref={sectionRef}>
      <div className="gradient-overlay" />
      <h2 className="what-we-do-title what-we-do-animate">What We Do</h2>
      <div className="what-we-do-grid">
        <div className="what-we-do-card what-we-do-animate">
          <h3 className="what-we-do-card-title">Innovative Formulations</h3>
          <p className="what-we-do-card-text">
            Custom-developed nutraceutical solutions designed for therapeutic
            and prophylactic use.
          </p>
        </div>
        <div className="what-we-do-card what-we-do-animate">
          <h3 className="what-we-do-card-title">State-of-the-Art Facilities</h3>
          <p className="what-we-do-card-text">
            WHO-GMP certified manufacturing facilities equipped with
            cutting-edge technology.
          </p>
        </div>
        <div className="what-we-do-card what-we-do-animate">
          <h3 className="what-we-do-card-title">Global Reach</h3>
          <p className="what-we-do-card-text">
            Trusted by 100+ clients worldwide, with products in over 1,200
            brands across the globe.
          </p>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: linear-gradient(135deg, rgb(104, 52, 128), rgb(104, 52, 128));
  color: #ffffff;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  text-align: center;

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%);
    pointer-events: none;
    z-index: 1;
  }

  .what-we-do-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
  }

  .what-we-do-title::after {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background: rgb(104, 52, 128);
    margin: 10px auto 0;
    border-radius: 2px;
  }

  .what-we-do-grid {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    z-index: 2;
    position: relative;
  }

  .what-we-do-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  }

  .what-we-do-card-title {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .what-we-do-card-text {
    font-size: 16px;
    color: #dcdcdc;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .what-we-do-title {
      font-size: 2rem;
    }

    .what-we-do-card {
      width: 100%;
    }
  }
`;

export default WhatWeDo;
