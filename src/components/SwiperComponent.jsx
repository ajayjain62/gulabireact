import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function SwiperComponent() {
  return (
    <Carousel interval={4000} controls={true} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\img\slider\c a r e (1349 x 400 px) (1349 x 450 px) (1) (1).jpg" // Use forward slashes
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Description for the first slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public\assets\img\swiperslide\c a r e (1349 x 400 px) (1349 x 450 px).jpg"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Description for the second slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.cipla.com/sites/default/files/Annual-Report-2023-24-(Double%20page).pdf" // Adjusted image path for variation
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default SwiperComponent;
