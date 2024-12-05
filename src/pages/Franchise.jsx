import React from "react";
import "./FranchisePage.css";

const FranchisePage = () => {
  return (
    <div className="franchisePage-container">
      <header className="franchisePage-header">
        <h1 className="franchisePage-title">Join Our Franchise Network</h1>
        <p className="franchisePage-subtitle">
          Partner with us to bring quality pharmaceuticals to your community.
        </p>
      </header>

      <section className="franchisePage-benefits">
        <div className="franchisePage-benefitCard">
          <div className="franchisePage-cardIcon">💊</div>
          <h3 className="franchisePage-cardTitle">High-Quality Products</h3>
          <p className="franchisePage-cardDescription">
            Access our premium pharmaceutical products with trusted formulations.
          </p>
        </div>
        <div className="franchisePage-benefitCard">
          <div className="franchisePage-cardIcon">🌐</div>
          <h3 className="franchisePage-cardTitle">Global Network</h3>
          <p className="franchisePage-cardDescription">
            Join a global network of successful franchises and grow your business.
          </p>
        </div>
        <div className="franchisePage-benefitCard">
          <div className="franchisePage-cardIcon">📈</div>
          <h3 className="franchisePage-cardTitle">Growth Opportunities</h3>
          <p className="franchisePage-cardDescription">
            Enjoy exclusive business development support to ensure your success.
          </p>
        </div>
      </section>

      <section className="franchisePage-steps">
        <h2 className="franchisePage-stepsTitle">How to Join</h2>
        <div className="franchisePage-stepsContainer">
          <div className="franchisePage-stepCard">
            <h4 className="franchisePage-stepTitle">Step 1</h4>
            <p className="franchisePage-stepDescription">Submit your application online.</p>
          </div>
          <div className="franchisePage-stepCard">
            <h4 className="franchisePage-stepTitle">Step 2</h4>
            <p className="franchisePage-stepDescription">Meet with our team to discuss your goals.</p>
          </div>
          <div className="franchisePage-stepCard">
            <h4 className="franchisePage-stepTitle">Step 3</h4>
            <p className="franchisePage-stepDescription">
              Launch your franchise with our support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;
