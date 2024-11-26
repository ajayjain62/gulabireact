import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import gsap from "gsap";

const CSRPage = () => {
  const sections = [
    {
      title: "Philanthropic Responsibility",
      content:
        "Participate in philanthropic causes and give back to the community.",
    },
    {
      title: "Environmental Responsibility",
      content: "Support eco-friendly initiatives and reduce carbon footprints.",
    },
    {
      title: "Ethical Responsibility",
      content: "Uphold human rights and ensure ethical business practices.",
    },
    {
      title: "Economic Responsibility",
      content:
        "Create positive economic value and contribute to sustainable growth.",
    },
    {
      title: "Community Engagement",
      content:
        "Forge stronger bonds between employees and the community, boosting morale and building a positive brand.",
    },
  ];

  // GSAP animation hook
  React.useEffect(() => {
    gsap.fromTo(
      ".animated-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div
      className="csr-page"
      style={{ fontFamily: "Arial, sans-serif", overflowX: "hidden" }}
    >
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          position: "relative",
          height: "100vh",
          background: "linear-gradient(135deg, #1e293b, #4f46e5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
            Corporate Social Responsibility
          </h1>
          <p
            style={{ fontSize: "1.5rem", maxWidth: "600px", margin: "0 auto" }}
          >
            A commitment to improving social, environmental, and economic
            development.
          </p>
        </motion.div>
        {/* 3D Sphere in Hero Section */}
        <div
          style={{
            position: "absolute",
            right: "10%",
            bottom: "10%",
            width: "30%",
          }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Sphere args={[1.5, 32, 32]} scale={2}>
              <meshStandardMaterial
                attach="material"
                color="#4f46e5"
                wireframe
              />
            </Sphere>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>
      </div>

      {/* CSR Sections */}
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="csr-section"
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "100px",
            backgroundColor: index % 2 === 0 ? "#f8fafc" : "#e2e8f0",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "#1e293b",
                marginBottom: "1rem",
              }}
            >
              {section.title}
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#475569" }}>
              {section.content}
            </p>
          </div>
          <div style={{ flex: 1, padding: "20px" }}>
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 5, 2]} />
              <Sphere args={[0.8, 32, 32]}>
                <meshStandardMaterial attach="material" color="#4f46e5" />
              </Sphere>
            </Canvas>
          </div>
        </motion.div>
      ))}

      {/* Call to Action */}
      <div
        className="cta-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px",
          backgroundColor: "#1e293b",
          color: "#fff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Join Us in Making a Difference
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "600px",
              marginBottom: "1.5rem",
            }}
          >
            Help us create a positive impact in the world through sustainable
            and responsible practices.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              padding: "15px 30px",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "#4f46e5",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CSRPage;
