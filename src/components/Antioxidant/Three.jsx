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
      src: "https://i.postimg.cc/63GSc1fL/r-alpha.jpg",
      label: "R-Alpha Tablets",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/PxwXDyL0/Rhodiola-Rosea.jpg",
      label: "Rhodiola Roses",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/FKYnFn85/lipoic-tablets.jpg",
      label: "Lipoic Tablet",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/9fYJJ56h/26-3.jpg",
      label: "Vital C",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/DZ32hs0h/VITAMINB12-MEN4.jpg",
      label: "Vitamin B12 Men",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/m2kW0VjM/VITAMINB124-women.jpg",
      label: "Vitamin B12 Women",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/BZHC6rgs/grape-seed-capsules.jpg",
      label: "Grape Seed Capsule",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/cLk052wV/ubiquinol-capsules.jpg",
      label: "Ubiquinol Capsule",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/wT6zxgkC/NAC.jpg",
      label: "NAC Tablet",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/wBDBJQbt/M-WOMEN5.jpg",
      label: "Wellness Essentials",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/PqnXt8rd/GRAPESEEDEXTRACT6.jpg",
      label: "Grape Seed Extract",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/Fzd8dDD8/well-c.jpg",
      label: "Kids Tablet",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/WbK5W7t5/TRIPHALA-tablets.jpg",
      label: "Triphala Tablet",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/sX4VKXcJ/Liver-detox.jpg",
      label: "Liver Detox",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/mD8wQY0N/Lung-Detox.jpg",
      label: "Lung Detox",
      link: "/category/antioxidants",
    },
    {
      src: "https://i.postimg.cc/SRZmFvH2/SAWPALMETTO5.jpg",
      label: "Palmetto Tablet",
      link: "/category/antioxidants",
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
