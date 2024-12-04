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
      src: "//goanutritions.com/cdn/shop/files/82.jpg?v=1732013593&width=1946",
      label: "R-Alpha Tablets",
      link: "/category/body-detox",
    },
    {
      src: "//goanutritions.com/cdn/shop/files/1_525b7e53-90a1-4cba-8268-15404213f40b.jpg?v=1732079477&width=1946",
      label: "Rhodiola Rosea",
      link: "/category/body-detox",
    },
    {
      src: "//goanutritions.com/cdn/shop/files/66.jpg?v=1732011620&width=1946",
      label: "Lipo Boost",
      link: "/category/body-detox",
    },
    {
      src: "//goanutritions.com/cdn/shop/files/65.jpg?v=1732011997&width=1946",
      label: "Ubiquinol Tablet",
      link: "/category/body-detox",
    },
    {
      src: "//goanutritions.com/cdn/shop/files/62.jpg?v=1732011952&width=1946",
      label: "Ubiquinol Capsules",
      link: "/category/body-detox",
    },
    {
      src: "//goanutritions.com/cdn/shop/files/76.jpg?v=1732013242&width=1946",
      label: "NAC Vitality",
      link: "/category/body-detox",
    },
    {
      src: "//goanutritions.com/cdn/shop/files/11_a6adfba9-e4a3-48ba-9577-e3f25dac1b62.jpg?v=1732081409&width=1946",
      label: "Triphala Tablets",
      link: "/category/body-detox",
    },
    {
      src: "//goanutritions.com/cdn/shop/files/33.jpg?v=1732079389&width=1946",
      label: "Noni Juice Tablets",
      link: "/category/body-detox",
    },
    {
      src: "https://goanutritions.com/cdn/shop/products/LUNGSDETOX5.jpg?v=1675936431&width=1946",
      label: "Lung Detox tablets",
      link: "/category/body-detox",
    },
    {
      src: "//goanutritions.com/cdn/shop/files/38.jpg?v=1732014686&width=1946",
      label: "Liver Detox Tablets",
      link: "/category/body-detox",
    },
    {
      src: "https://goanutritions.com/cdn/shop/products/20395c42bb877591cdd49ab5a02d9265.jpg?v=1676114405&width=1946",
      label: "Grape Seed Extract",
      link: "/category/height-enhancer",
    },
    {
      src: "https://goanutritions.com/cdn/shop/products/a0684901e9f4303e60e4796da488e1c2.jpg?v=1676114377&width=1946",
      label: "Glutathione Tablets",
      link: "/category/immunity-booster",
    },
    {
      src: "https://goanutritions.com/cdn/shop/products/8af93504edf5effff2a51eb62663785b.jpg?v=1676114390&width=1946",
      label: "Skin Whitening",
      link: "/category/joint-care",
    },
    {
      src: "https://goanutritions.com/cdn/shop/products/N-ACITYLCYSTEINE7.jpg?v=1675923841&width=1946",
      label: "NAC Supplement",
      link: "/category/male-vitality",
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
