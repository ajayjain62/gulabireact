import React from "react";
import "./CareerPage.css";

const CareerPage = () => {
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

      {/* Values Section */}
      <section className="careerPage-values">
        <h2>Our Core Values</h2>
        <div className="careerPage-valuesList">
          <div className="careerPage-valueCard">
            <h3>Innovation</h3>
            <p>
              We push boundaries to deliver cutting-edge solutions in healthcare.
            </p>
          </div>
          <div className="careerPage-valueCard">
            <h3>Integrity</h3>
            <p>
              Transparency and ethics guide every aspect of our work.
            </p>
          </div>
          <div className="careerPage-valueCard">
            <h3>Excellence</h3>
            <p>
              We aim for the highest standards in everything we do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
