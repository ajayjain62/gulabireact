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
      src: "src/assets/img/products/curcumin.jpg",
      label: "Turmeric",
      link: "/category/anti-anemic",
    },
    {
      src: "src/assets/img/products/noni.jpg",
      label: "Noni Tablets",
      link: "/category/anti-diabetic",
    },
    {
      src: "src/assets/img/products/well-c (2).jpg",
      label: "Well C",
      link: "/category/antioxidants",
    },
    {
      src: "src/assets/img/products/well-c (3).jpg",
      label: "Well C",
      link: "/category/body-detox",
    },
    {
      src: "src/assets/img/products/well-c kids.jpg",
      label: "Well C",
      link: "/category/collagen-supplement",
    },
    {
      src: "src/assets/img/products/well-c.jpg",
      label: "Well c",
      link: "/category/dandruff",
    },
    {
      src: "https://goanutritions.com/cdn/shop/products/262db3f25b79dba3e32542808633871c.jpg?v=1676114362&width=1946",
      label: "Skin Hydration",
      link: "/category/extracts",
    },
    {
      src: "https://goanutritions.com/cdn/shop/products/RESVERATROL4.jpg?v=1675923964&width=1946",
      label: "Resveratrol Supplement",
      link: "/category/eye-health",
    },
    {
      src: "https://goanutritions.com/cdn/shop/products/0a5b88b59753b3db1af5d7e248062ec6.jpg?v=1676114400&width=1946",
      label: "NAC Supplement",
      link: "/category/female-vitality",
    },
    {
      src: "https://goanutritions.com/cdn/shop/products/M.V.WOMEN4.jpg?v=1675923814&width=1946",
      label: "Multivitamins",
      link: "/category/hairfall-control",
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
