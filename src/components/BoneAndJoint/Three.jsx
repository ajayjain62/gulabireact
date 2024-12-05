import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import * as THREE from "three";
import { useNavigate } from "react-router-dom"; // for React Router
import "./Category.css";

const ThreeJsCarousel = () => {
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const splideRef = useRef(null); // Reference for Splide instance
  const navigate = useNavigate(); // Initialize navigation for React Router

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      opacity: 0.7,
      transparent: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 10;

    const animate = () => {
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (sceneRef.current && renderer.domElement) {
        sceneRef.current.removeChild(renderer.domElement);
      }

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const categories = [
    {
      src: "https://i.postimg.cc/fyRXBr6q/MSM-Tablet.jpg",
      label: "MSM Tablet",
      link: "/category/anti-anemic",
    },
    {
      src: "https://i.postimg.cc/vB3xgvcr/joint-support.jpg",
      label: "Joint Support",
      link: "/category/anti-diabetic",
    },
    {
      src: "https://i.postimg.cc/D0RZLpFX/PLANTBASEDCALCIUM8.jpg",
      label: "Calcium tablets",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/W3BmbnK5/4-cb98ac15-e491-46f5-95e6-1b0907.jpg",
      label: "CalciBoost Kids",
      link: "/category/body-detox",
    },
    {
      src: "https://i.postimg.cc/5tcfgQZZ/WOMENCALCIUM4.jpg",
      label: "Calcium Tablet Women",
      link: "/category/collagen-supplement",
    },
    {
      src: "https://i.postimg.cc/gJzFtV4B/6-a5a0384b-2d27-4e0d-b9b4-71153d.jpg",
      label: "Vitamin D3 Kids",
      link: "/category/dandruff",
    },
    {
      src: "https://i.postimg.cc/mrqpC7JH/8-010e76c5-771f-47ef-9346-bde370.jpg",
      label: "Multivitamins Kids",
      link: "/category/extracts",
    },
    {
      src: "https://i.postimg.cc/bvKLspS0/633e07b793871cfd9fa92cc5f8e76937.jpg",
      label: "Collagen peptides Tablets",
      link: "/category/eye-health",
    },
    {
      src: "https://i.postimg.cc/Z5X6LjY4/LONGTEENAGERBOYS7.jpg",
      label: "Height Increase Capsules Kids",
      link: "/category/female-vitality",
    },
   
  ];

  const handlePrev = () => {
    if (splideRef.current) splideRef.current.go("<");
  };

  const handleNext = () => {
    if (splideRef.current) splideRef.current.go(">");
  };

  return (
    <div className="threejs-carousel">
      <div ref={sceneRef} className="threejs-background"></div>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePrev}>
          &#8249;
        </button>
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 5,
            focus: "center",
            gap: "30px",
            breakpoints: {
              1200: { perPage: 4, gap: "20px" },
              768: { perPage: 3, gap: "15px" },
              480: { perPage: 2, gap: "10px" },
            },
            arrows: false,
            pagination: false,
          }}
        >
          {categories.map((item, index) => (
            <SplideSlide key={index}>
              <div
                onClick={() => navigate(item.link)}
                className="carousel-slide"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="carousel-image"
                />
                <div className="carousel-label">{item.label}</div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <button className="carousel-button next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ThreeJsCarousel;
