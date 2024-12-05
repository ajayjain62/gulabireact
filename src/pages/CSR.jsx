import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const CSRPage = () => {
  const sections = [
    {
      title: "Philanthropic Responsibility: Giving Back to the Community",
      content:
        "At the core of every thriving business is a deep-rooted commitment to societal betterment. Philanthropic responsibility is not just an act of generosity; it's a strategic investment in the well-being of communities, addressing systemic issues, and paving the way for sustainable growth. This responsibility entails aligning corporate values with social needs, creating a symbiotic relationship that benefits both the company and the community.",
      image: "https://i.postimg.cc/h4yBr8t3/Philanthropic-responsibility.jpg",
    },
    {
      title: "Environmental Responsibility: Supporting a Sustainable Future",
      content:
        "In today’s rapidly changing world, environmental responsibility is a cornerstone of sustainable business practices. It involves more than just adhering to regulations; it’s about actively contributing to the health of the planet by minimizing negative environmental impacts. Supporting eco-friendly initiatives and reducing carbon footprints are essential steps in safeguarding our natural resources for future generations.",
      image: "https://i.postimg.cc/qqjMcWZm/Environmental-responsibility.jpg",
    },
    {
      title: "Ethical Responsibility: Upholding Integrity and Fairness",
      content:
        "Ethical responsibility is the backbone of a sustainable and trustworthy business. It goes beyond legal compliance, focusing on doing what is right by prioritizing human rights, fair practices, and integrity in every aspect of business operations. Upholding ethical standards not only fosters a culture of respect and dignity but also builds long-term trust with employees, customers, and stakeholders.",
      image:
        "https://i.postimg.cc/D0WY5Xxt/Ethicalhuman-rights-responsibility.jpg",
    },
    {
      title: "Economic Responsibility: Driving Sustainable Growth and Value",
      content:
        "Economic responsibility is a core pillar of corporate social responsibility (CSR), focusing on creating lasting economic benefits for all stakeholders. It involves not only generating profits but also contributing to the broader economic well-being of communities, employees, and the environment. Companies that embrace economic responsibility align their growth strategies with sustainable development goals, ensuring long-term prosperity.",
      image: "https://i.postimg.cc/m2BHYshS/Economic-responsibility.jpg",
    },
    {
      title: "Community Engagement: Building Stronger Connections",
      content:
        "Community engagement is an essential aspect of corporate social responsibility (CSR), allowing businesses to foster meaningful relationships with the communities they serve. By actively participating in local initiatives, companies not only enhance their brand reputation but also boost employee morale and create a sense of purpose. Strong community ties benefit everyone involved, fostering mutual growth and understanding.",
      image: "https://i.postimg.cc/YCtTBh0m/Give-back-to-the-community.jpg",
    },
  ];

  React.useEffect(() => {
    gsap.from(".animated-title", {
      y: -50,
      opacity: 0,
      duration: 1.2,
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
          background:
            "linear-gradient(129.27deg, #662D91 7.77%, #9B5DE5 88.92%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1
            className="animated-title"
            style={{
              fontSize: "4rem",
              fontWeight: 700,
              marginBottom: "1rem",
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
            }}
          >
            Corporate Social Responsibility (CSR) refers to a company’s
            commitment to operate ethically, contribute to economic development,
            and improve the quality of life for employees, local communities,
            and society at large.
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
          transition={{ duration: 1, delay: 0.2 * index }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
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
            whileHover={{ scale: 1.1, backgroundColor: "#9B5DE5" }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "15px 30px",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "rgb(104, 52, 128)",
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
