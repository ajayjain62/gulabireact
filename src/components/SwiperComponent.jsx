import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function SwiperComponent() {
  return (
    <Carousel interval={4000} controls={true} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
src="https://i.postimg.cc/k4wxNnz5/Untitled-1349-x-575-px-2.jpg" // Use forward slashes
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
          src="https://i.postimg.cc/wMvD0CYQ/Untitled-1349-x-575-px-1.jpg"
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
