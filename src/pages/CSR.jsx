import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const CSRPage = () => {
  const sections = [
    {
      title: "Philanthropic Responsibility",
      content:
        "Participate in philanthropic causes and give back to the community.",
      image: "public/assets/img/csr/Philanthropic responsibility.jpg", // Replace with actual image paths
    },
    {
      title: "Environmental Responsibility",
      content: "Support eco-friendly initiatives and reduce carbon footprints.",
      image: "public/assets/img/csr/Environmental responsibility.jpg",
    },
    {
      title: "Ethical Responsibility",
      content: "Uphold human rights and ensure ethical business practices.",
      image: "public/assets/img/csr/Ethicalhuman rights responsibility.jpg",
    },
    {
      title: "Economic Responsibility",
      content:
        "Create positive economic value and contribute to sustainable growth.",
      image: "public/assets/img/csr/Economic responsibility.jpg",
    },
    {
      title: "Community Engagement",
      content:
        "Forge stronger bonds between employees and the community, boosting morale and building a positive brand.",
      image: "public/assets/img/csr/Give back to the community.jpg",
    },
  ];

  // GSAP animation on load
  React.useEffect(() => {
    gsap.from(".animated-title", {
      y: -50,
      opacity: 1,
      duration: 1.5,
      stagger: 0.3,
    });
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="csr-page"
      style={{
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          position: "relative",
          height: "60vh",
          background: "linear-gradient(129.27deg, #662D91 7.77%, #9B5DE5 88.92%)",
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
          <h1
            className="animated-title"
            style={{
              fontSize: "4rem",
              fontWeight: 700,
              marginBottom: "1rem",
              opacity: 1,
            }}
          >
            Corporate Social Responsibility
          </h1>
          <p
            className="animated-title"
            style={{
              fontSize: "1.5rem",
              maxWidth: "600px",
              margin: "0 auto",
              opacity: 1,
            }}
          >
            A commitment to improving social, environmental, and economic
            development.
          </p>
        </motion.div>
      </div>

      {/* CSR Sections */}
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="csr-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            padding: "100px",
            backgroundColor: index % 2 === 0 ? "#f9fafb" : "#e5e7eb",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#1f2937",
                marginBottom: "1rem",
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#374151",
                lineHeight: "1.8",
              }}
            >
              {section.content}
            </p>
          </div>
          <div style={{ flex: 1, padding: "20px" }}>
            <img
              src={section.image}
              alt={section.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Call to Action Section */}
      <div
        className="cta-section"
        style={{
          textAlign: "center",
          padding: "100px",
          backgroundColor: "#1f2937",
          color: "#fff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Join Us in Making a Difference
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "600px",
              margin: "0 auto 1.5rem auto",
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
              fontWeight: 600,
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
