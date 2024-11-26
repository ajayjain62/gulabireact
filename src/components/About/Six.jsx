import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import styled from "styled-components";

const WhatsTheDifference = () => {
  const [color, setColor] = useState("rgb(104, 52, 128)");
  const sphereRef = useRef();

  const handleSphereClick = () => {
    // Change to a random color on click
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    setColor(randomColor);
  };

  const handleHover = () => {
    // Slight scale-up effect on hover
    if (sphereRef.current) {
      sphereRef.current.scale.set(1.2, 1.2, 1.2);
    }
  };

  const handleHoverOut = () => {
    // Reset scale
    if (sphereRef.current) {
      sphereRef.current.scale.set(1, 1, 1);
    }
  };

  return (
    <Section>
      <div className="difference-content">
        <h2 className="difference-title">What’s the Difference?</h2>
        <p className="difference-description">
          Our nutritions are more expensive because they’re newer, generally
          groundbreaking, often for conditions that are difficult to treat and
          are free of Sugar, unwanted fillers, preservatives, and gelatin. They
          are vegan and do not contain any artificial flavors. This
          nutrient-packed powerhouse serves up the essentials you need to
          thrive daily, supporting your brain, heart, immune system, hair, skin,
          and bones. Over time, these same innovative medicines transition into
          turnaround nutritions.
        </p>
      </div>
      <div className="threejs-container">
        <Canvas>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} />

          {/* 3D Object */}
          <Sphere
            visible
            args={[1.5, 32, 32]}
            onClick={handleSphereClick}
            onPointerOver={handleHover}
            onPointerOut={handleHoverOut}
            ref={sphereRef}
          >
            <meshStandardMaterial color={color} roughness={0.5} />
          </Sphere>

          {/* Controls */}
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div className="sphere-status">
          Current Sphere Color: <span>{color}</span>
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

  .threejs-container {
    width: 300px;
    height: 300px;
    text-align: center;
  }

  .sphere-status {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
  }

  .sphere-status span {
    font-weight: bold;
    color: rgb(104, 52, 128);
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .difference-content {
      margin-right: 0;
      text-align: center;
      margin-bottom: 40px;
    }

    .threejs-container {
      margin: 0 auto;
    }
  }
`;

export default WhatsTheDifference;
