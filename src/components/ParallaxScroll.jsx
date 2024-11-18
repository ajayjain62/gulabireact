// src/components/ParallaxScroll.js
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxScroll = () => {
  return (
    <Parallax y={[-20, 20]} tagOuter="figure">
      <div
        style={{
          width: '100%',
          height: '300px',
          backgroundColor: '#e74c3c',
          margin: '50px 0',
        }}
      >
        Parallax Scrolling Effect!
      </div>
    </Parallax>
  );
};

export default ParallaxScroll;
