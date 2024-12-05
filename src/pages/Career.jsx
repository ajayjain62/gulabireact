import React, { useState } from "react";
import "./CareerPage.css";

const CareerPage = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handlePopupOpen = (content) => {
    setPopupContent(content);
  };

  const handlePopupClose = () => {
    setPopupContent(null);
  };

  const whyWorkWithUsContent = [
    {
      title: "Impactful Work",
      image: "/images/impactful-work.jpg",
      description:
        "Contribute to life-saving pharmaceutical solutions and make a meaningful impact in global healthcare.",
    },
    {
      title: "Collaborative Culture",
      image: "/images/collaborative-culture.jpg",
      description:
        "Be part of a dynamic team that values collaboration, innovation, and shared success.",
    },
    {
      title: "Growth Opportunities",
      image: "/images/growth-opportunities.jpg",
      description:
        "Grow your career with tailored learning programs, mentorship, and leadership opportunities.",
    },
  ];

  return (
    <div className="careerPage-container">
      {/* Header Section */}
      <header className="careerPage-header">
        <div className="careerPage-headerContent">
          <h1 className="careerPage-title">Explore Careers with Us</h1>
          <p className="careerPage-subtitle">
            Join a team that's committed to improving lives through innovative healthcare solutions.
          </p>
          <button className="careerPage-ctaButton">View Open Positions</button>
        </div>
      </header>

      {/* About Working Here Section */}
      <section className="careerPage-about">
        <div className="careerPage-aboutContent">
          <h2>Why Work at [Company Name]</h2>
          <p>
            At [Company Name], we strive to foster a collaborative and inclusive environment where 
            you can make a meaningful impact on the world of healthcare. Join us to work on 
            life-saving innovations and achieve your professional aspirations.
          </p>
        </div>
        <div className="careerPage-aboutImage">
          <img src="/images/teamwork.jpg" alt="Teamwork" />
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="careerPage-openings">
        <h2>Open Positions</h2>
        <div className="careerPage-jobList">
          <div className="careerPage-jobCard">
            <h3 className="careerPage-jobTitle">Clinical Research Associate</h3>
            <p className="careerPage-jobLocation">Location: Boston, MA</p>
            <p className="careerPage-jobDescription">
              Coordinate and oversee clinical trials to advance our groundbreaking treatments.
            </p>
            <button className="careerPage-applyButton">Learn More</button>
          </div>
          <div className="careerPage-jobCard">
            <h3 className="careerPage-jobTitle">Pharmaceutical Scientist</h3>
            <p className="careerPage-jobLocation">Location: San Diego, CA</p>
            <p className="careerPage-jobDescription">
              Conduct research and develop innovative drug formulations.
            </p>
            <button className="careerPage-applyButton">Learn More</button>
          </div>
          <div className="careerPage-jobCard">
            <h3 className="careerPage-jobTitle">Regulatory Affairs Specialist</h3>
            <p className="careerPage-jobLocation">Location: Remote</p>
            <p className="careerPage-jobDescription">
              Ensure compliance with global regulatory requirements for our products.
            </p>
            <button className="careerPage-applyButton">Learn More</button>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="careerPage-values">
        <h2>Why Work With Us</h2>
        <div className="careerPage-valuesList">
          {whyWorkWithUsContent.map((item, index) => (
            <div
              key={index}
              className="careerPage-valueCard"
              onClick={() => handlePopupOpen(item)}
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Section */}
      {popupContent && (
        <div className="careerPage-popup">
          <div className="careerPage-popupContent">
            <button
              className="careerPage-popupClose"
              onClick={handlePopupClose}
            >
              &times;
            </button>
            <img
              src={popupContent.image}
              alt={popupContent.title}
              className="careerPage-popupImage"
            />
            <h3 className="careerPage-popupTitle">{popupContent.title}</h3>
            <p className="careerPage-popupDescription">
              {popupContent.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
