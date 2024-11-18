import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Carousel = () => {
  return (
    <div style={{ padding: '40px 40px' }}>
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          snap: true,
          perPage: 4,
          gap: '20px', // Adds space between slides
          arrows: false, // Hides arrows
          pagination: true, // Enables pagination
        }}
      >
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src="https://i.postimg.cc/d04PTTFv/comforter-c2.jpg"
              alt="Slide 1"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Comforter</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src="https://i.postimg.cc/HW5m6n40/bedsheet-c1.jpg"
              alt="Slide 2"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Bedsheet</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src="https://i.postimg.cc/yNk4c88Z/cushions-c4.jpg"
              alt="Slide 3"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Cushions</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src="https://i.postimg.cc/hjLC7kTm/mattress-protector-c5.jpg"
              alt="Slide 4"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Mattress Protector</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src="https://i.postimg.cc/TPRh6mQX/dohar-c3.jpg"
              alt="Slide 5"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Dohar</div>
          </div>
        </SplideSlide>
        {/* Add more slides as needed */}
      </Splide>
    </div>
  );
};

export default Carousel;
