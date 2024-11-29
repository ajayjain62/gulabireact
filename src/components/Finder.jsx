import React from "react";
import "./Finder.css"; // Importing CSS module

const Portfolio = () => {
  return (
    <div className="view view-home-page">
      <div className="view-header">
        <h3 className="portfolio-title">OUR PORTFOLIO OF CARE</h3>
      </div>
      <div className="home-page view-content">
        <div className="our-portfolio-wrapper">
          <div className="container">
            <div className="our-portfolio-grid-wrapper our-portfolio-items">
              <PortfolioItem
                title="From care to cure"
                description="Immune Science pioneers groundbreaking therapies across various areas, including respiratory, HIV/AIDS, oncology, and more, empowering patients with new beginnings through innovative treatments for rare diseases and general health."
                imageUrl="https://i.postimg.cc/zBFCN2Ws/cfa9327f7711a76c6b36dc9586306cd6.jpg"
              />
              <PortfolioItemWithLink
                title="Environmental responsibility"
                imageUrl="https://i.postimg.cc/zBFCN2Ws/cfa9327f7711a76c6b36dc9586306cd6.jpg"
                link="#"
              />
              <PortfolioItemWithLink
                title="Philanthropic causes"
                imageUrl="https://i.postimg.cc/pTfwHvsP/45ad575a044828afb1423d549645ef91.jpg"
                link="#"
              />
              <PortfolioItemWithLink
                title="Ethical/human rights responsibility"
                imageUrl="https://i.postimg.cc/zD9xk67j/man-woman-holding-half-earth-globe-1343-158.jpg"
                link="#"
              />
              <PortfolioItemWithLink
                title="Boost morale"
                imageUrl="https://i.postimg.cc/zXgcZ8v6/2040ead323baf678ccad099d9110e147.jpg"
                link="#"
              />
              <PortfolioItemWithLink
                title="Build a positive brand"
                imageUrl="https://i.postimg.cc/5yc8wdJQ/76f941f1315dfb8991fb99787185c019.jpg"
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioItem = ({ title, description, imageUrl }) => (
  <div className="our-portfolio-item">
    <div className="portfolio-content">
      <div className="portfolio-title">{title}</div>
      <div className="portfolio-body">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const PortfolioItemWithLink = ({ title, imageUrl, link }) => (
  <div className="our-portfolio-item">
    <a href={link}>
      <div className="portfolio-image">
        <img className="img-responsive" alt={title} src={imageUrl} />
        <div className="image-overlay"></div>
        <div className="image-title">{title}</div>
      </div>
    </a>
  </div>
);

export default Portfolio;
