import React from "react";
import "./CareerPage.css";

const CareerPage = () => {
  return (
    <div className="careerPage-container">
      <header className="careerPage-header">
        <h1 className="careerPage-title">Join Our Team</h1>
        <p className="careerPage-subtitle">
          Be part of a mission-driven company revolutionizing healthcare.
        </p>
      </header>

      <section className="careerPage-opportunities">
        <h2 className="careerPage-sectionTitle">Current Openings</h2>
        <div className="careerPage-jobList">
          <div className="careerPage-jobCard">
            <h3 className="careerPage-jobTitle">Pharmaceutical Sales Representative</h3>
            <p className="careerPage-jobLocation">Location: New York, NY</p>
            <p className="careerPage-jobDescription">
              Build relationships with healthcare providers and drive sales of our top-tier products.
            </p>
            <button className="careerPage-applyButton">Apply Now</button>
          </div>
          <div className="careerPage-jobCard">
            <h3 className="careerPage-jobTitle">Research Scientist</h3>
            <p className="careerPage-jobLocation">Location: San Francisco, CA</p>
            <p className="careerPage-jobDescription">
              Lead groundbreaking research and development in pharmaceuticals.
            </p>
            <button className="careerPage-applyButton">Apply Now</button>
          </div>
          <div className="careerPage-jobCard">
            <h3 className="careerPage-jobTitle">Quality Assurance Specialist</h3>
            <p className="careerPage-jobLocation">Location: Remote</p>
            <p className="careerPage-jobDescription">
              Ensure the highest standards of quality and compliance in our operations.
            </p>
            <button className="careerPage-applyButton">Apply Now</button>
          </div>
        </div>
      </section>

      <section className="careerPage-values">
        <h2 className="careerPage-sectionTitle">Why Work With Us</h2>
        <div className="careerPage-valuesContainer">
          <div className="careerPage-valueCard">
            <div className="careerPage-valueIcon">🌟</div>
            <h3 className="careerPage-valueTitle">Impactful Work</h3>
            <p className="careerPage-valueDescription">
              Make a real difference in global healthcare.
            </p>
          </div>
          <div className="careerPage-valueCard">
            <div className="careerPage-valueIcon">🤝</div>
            <h3 className="careerPage-valueTitle">Collaborative Culture</h3>
            <p className="careerPage-valueDescription">
              Work with passionate, driven professionals.
            </p>
          </div>
          <div className="careerPage-valueCard">
            <div className="careerPage-valueIcon">📚</div>
            <h3 className="careerPage-valueTitle">Growth Opportunities</h3>
            <p className="careerPage-valueDescription">
              Advance your career with our tailored development programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
