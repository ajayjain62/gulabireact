import React from "react";
import styled from "styled-components";

const WhatsTheDifference = () => {
  return (
    <Section>
      <div className="difference-content">
        <h2 className="difference-title">What’s the Difference?</h2>
        <p className="difference-description">
          Our nutritions are more expensive because they’re newer, generally
          groundbreaking, often for conditions that are difficult to treat and
          are free of Sugar, unwanted fillers, preservatives, and gelatin. They
          are vegan and do not contain any artificial flavors. This
          nutrient-packed powerhouse serves up the essentials you need to thrive
          daily, supporting your brain, heart, immune system, hair, skin, and
          bones. Over time, these same innovative medicines transition into
          turnaround nutritions.
        </p>
      </div>
      <div className="banner-container">
        <div className="banner-content">
          <h3>Healthy Choices, Healthy You</h3>
          <p>
            Packed with nutrients and free from artificial additives, our
            products support your overall well-being. Choose innovation, choose
            health!
          </p>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #ffffff;
  color: #333333;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;

  .difference-content {
    max-width: 600px;
    margin-right: 40px;
  }

  .difference-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: rgb(104, 52, 128); /* Accent color */
    margin-bottom: 20px;
    position: relative;
  }

  .difference-title::after {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background: rgb(104, 52, 128);
    margin: 10px auto 0;
    border-radius: 2px;
  }

  .difference-description {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #555555;
  }

  .banner-container {
    width: 100%;
    max-width: 600px;
    height: 300px;
    background: url("https://images.unsplash.com/photo-1594641880265-49dc804e8d7f")
      center/cover no-repeat; /* Replace this URL with an online image URL */
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .banner-content {
    background: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    max-width: 90%;
  }

  .banner-content h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .banner-content p {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .difference-content {
      margin-right: 0;
      text-align: center;
      margin-bottom: 40px;
    }

    .banner-container {
      margin: 0 auto;
      height: 250px;
    }
  }
`;

export default WhatsTheDifference;
