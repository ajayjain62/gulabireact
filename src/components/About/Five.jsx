import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const HowDifferent = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".how-different-animate");

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
      <h2 className="how-different-title how-different-animate">How is Goa Nutritions Different?</h2>
      <div className="how-different-content-wrapper">
        <p className="how-different-description how-different-animate">
          The difference between our approach and that of many other companies is that when a nutrition becomes a generic, we still assume responsibility. 
          Rather than focus solely on what’s in development, we continue to closely monitor the quality, safety, and reliability of our supplements.
        </p>
        <div className="how-different-highlight how-different-animate">
          <p>
            Our dedication goes beyond innovation – it’s about ensuring that every product we deliver consistently exceeds expectations.
          </p>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #ffffff;
  color: #333333;
  padding: 80px 20px;
  text-align: center;

  .how-different-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: rgb(104, 52, 128); /* Custom heading color */
    margin-bottom: 20px;
    position: relative;
  }

  .how-different-title::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: rgb(104, 52, 128); /* Accent color for underline */
    margin: 10px auto 0;
    border-radius: 2px;
  }

  .how-different-content-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .how-different-description {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #555555;
  }

  .how-different-highlight {
    background: rgba(104, 52, 128, 0.1); /* Light purple highlight */
    padding: 20px;
    border-radius: 8px;
    border: 1px solid rgba(104, 52, 128, 0.3);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: rgb(104, 52, 128); /* Text in accent color */
      font-weight: bold;
      margin: 0;
    }
  }
`;

export default HowDifferent;
