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

  const testimonials = [
    {
      name: "John Doe",
      role: "Senior Scientist",
      text: "Working here has been an incredible journey. The collaborative environment fosters growth and innovation.",
    },
    {
      name: "Jane Smith",
      role: "Regulatory Specialist",
      text: "I’ve always felt valued and supported. This company genuinely cares about its employees.",
    },
    {
      name: "John Doe",
      role: "Senior Scientist",
      text: "Working here has been an incredible journey. The collaborative environment fosters growth and innovation.",
    },
    {
      name: "Jane Smith",
      role: "Regulatory Specialist",
      text: "I’ve always felt valued and supported. This company genuinely cares about its employees.",
    },
  ];

  const benefits = [
    "Competitive Salaries",
    "Comprehensive Health Insurance",
    "Generous Paid Time Off",
    "Flexible Work Arrangements",
    "Retirement Plans",
  ];

  return (
    <div className="careerPage-container">
      {/* Existing Sections */}
      <header className="careerPage-header">
        <div className="careerPage-headerContent">
          <h1 className="careerPage-title">Explore Careers with Us</h1>
          <p className="careerPage-subtitle">
            Join a team that's committed to improving lives through innovative healthcare solutions.
          </p>
          <button className="careerPage-ctaButton">View Open Positions</button>
        </div>
      </header>
{/*
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
*/}
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
            <h3 className="careerPage-jobTitle">Pharmaceutical Scientist</h3>
            <p className="careerPage-jobLocation">Location: San Diego, CA</p>
            <p className="careerPage-jobDescription">
              Conduct research and develop innovative drug formulations.
            </p>
            <button className="careerPage-applyButton">Learn More</button>
          </div>
          
        </div>
      </section>

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

      {/* New Sections */}
      <section className="careerPage-testimonials">
        <h2>What Our Team Says</h2>
        <div className="careerPage-testimonialList">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="careerPage-testimonialCard">
              <p>{testimonial.text}</p>
              <h4>- {testimonial.name}, {testimonial.role}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="careerPage-benefits">
        <h2>Perks and Benefits</h2>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>
      
{/*
      <section className="careerPage-contact">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to our HR team at <a href="mailto:hr@company.com">hr@company.com</a>.</p>
      </section>
*/}
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
