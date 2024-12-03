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
      src: "public/assets/img/categories/anti anemic.jpg",
      label: "Anti Anemic",
      link: "/category/anti-anemic",
    },
    {
      src: "public/assets/img/categories/anti diabtic.jpg",
      label: "Anti Diabetic",
      link: "/category/anti-diabetic",
    },
    {
      src: "public/assets/img/categories/antioxidents.jpg",
      label: "Antioxidants",
      link: "/category/antioxidants",
    },
    {
      src: "public/assets/img/categories/BODY DETIX.jpg",
      label: "Body Detox",
      link: "/category/body-detox",
    },
    {
      src: "public/assets/img/categories/collegen suppliment.jpg",
      label: "Collagen Supplement",
      link: "/category/collagen-supplement",
    },
    {
      src: "public/assets/img/categories/dendruff.jpg",
      label: "Dandruff",
      link: "/category/dandruff",
    },
    {
      src: "public/assets/img/categories/extracts.jpg",
      label: "Extracts",
      link: "/category/extracts",
    },
    {
      src: "public/assets/img/categories/eye health.jpg",
      label: "Eye Health",
      link: "/category/eye-health",
    },
    {
      src: "public/assets/img/categories/female vitality.jpg",
      label: "Female Vitality",
      link: "/category/female-vitality",
    },
    {
      src: "public/assets/img/categories/hairfall control.jpg",
      label: "Hairfall Control",
      link: "/category/hairfall-control",
    },
    {
      src: "public/assets/img/categories/height enhancer.jpg",
      label: "Height Enhancer",
      link: "/category/height-enhancer",
    },
    {
      src: "public/assets/img/categories/IMMUNITY BOOSTER.jpg",
      label: "Immunity Booster",
      link: "/category/immunity-booster",
    },
    {
      src: "public/assets/img/categories/joint care.jpg",
      label: "Joint Care",
      link: "/category/joint-care",
    },
    {
      src: "public/assets/img/categories/male vitality.jpg",
      label: "Male Vitality",
      link: "/category/male-vitality",
    },
    {
      src: "public/assets/img/categories/memory enhancer.jpg",
      label: "Memory Enhancer",
      link: "/category/memory-enhancer",
    },
    {
      src: "public/assets/img/categories/performance.jpg",
      label: "Performance",
      link: "/category/performance",
    },
    {
      src: "public/assets/img/categories/skin glow .jpg",
      label: "Skin Glow",
      link: "/category/skin-glow",
    },
    {
      src: "public/assets/img/categories/superfood.jpg",
      label: "Superfood",
      link: "/category/superfood",
    },
    {
      src: "public/assets/img/categories/weight loss.jpg",
      label: "Weight Loss",
      link: "/category/weight-loss",
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
