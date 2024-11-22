import React, { useState } from 'react';
import './Blowreel.css';



const CiplaVision = () => {
  const [selectedVision, setSelectedVision] = useState({
    id: "686",
    title: "Our Purpose",
    content:
      "Our humanitarian approach for healthcare in pursuit of our purpose ‘Caring for Life’ makes us a partner of choice for global health bodies and stakeholders.",
    image: "https://www.cipla.com/sites/default/files/2022-11/purpose_1.webp",
    link: "https://www.cipla.com/about-us/onecipla-credo",
  });

  const visionTypes = [
    {
      id: "686",
      title: "Our Purpose ‘Caring for Life’",
      content:
        "Our humanitarian approach for healthcare in pursuit of our purpose ‘Caring for Life’ makes us a partner of choice for global health bodies and stakeholders.",
      image: "https://www.cipla.com/sites/default/files/2022-11/purpose_1.webp",
      link: "https://www.cipla.com/about-us/onecipla-credo",
      icon: "https://www.cipla.com/sites/default/files/2022-09/icon-purpose.svg",
    },
    {
      id: "687",
      title: "Illness To Wellness",
      content:
        "Promoting wellness and holistic healthcare solutions for a better tomorrow.",
      image: "https://www.cipla.com/sites/default/files/2022-11/wellness_2.webp",
      link: "#",
      icon: "https://www.cipla.com/sites/default/files/2022-09/icon-illness-to-wellness.svg",
    },
    {
      id: "688",
      title: "Our People. Our Pride.",
      content:
        "Celebrating the people who make Cipla a global leader in healthcare.",
      image: "https://www.cipla.com/sites/default/files/2022-11/people_0.webp",
      link: "#",
      icon: "https://www.cipla.com/sites/default/files/2022-09/icon-our-people.svg",
    },
    {
      id: "689",
      title: "BREATHE. Think Immune Science",
      content: "Championing respiratory health through innovation and care.",
      image: "https://www.cipla.com/sites/default/files/2022-11/breathefree_0.webp",
      link: "#",
      icon: "https://www.cipla.com/sites/default/files/2022-09/icon-breathefree.svg",
    },
    {
      id: "690",
      title: "Towards A Sustainable Future",
      content: "Building a sustainable and equitable world for future generations.",
      image:
        "https://www.cipla.com/sites/default/files/2022-11/sustainability_0.webp",
      link: "#",
      icon: "https://www.cipla.com/sites/default/files/2022-09/icon-sustainability.svg",
    },
  ];

  const handleVisionChange = (visionId) => {
    const vision = visionTypes.find((v) => v.id === visionId);
    setSelectedVision(vision);
  };

  return (
    <section className="cipla-vision cipla-mission">
      <div className="cipla-vision-wrapper">
        <div className="container">
          {/* Vision Banner */}
          <div className="home-page view-content">
            <div className="vision-banner">
              <div className="vision-banner-left">
                <img
                  loading="lazy"
                  src={selectedVision.image}
                  alt={selectedVision.title}
                  className="img-responsive"
                />
              </div>
              <div className="vision-banner-right">
                <h2 className="vision-title">{selectedVision.title}</h2>
                <div className="vision-body">
                  <p>{selectedVision.content}</p>
                </div>
                <a
                  className="read-more-arrow"
                  href={selectedVision.link}
                  title={selectedVision.title}
                  aria-label={selectedVision.title}
                >
                  Read More <span className="screen-reader-text">Details</span>
                </a>
              </div>
            </div>
          </div>

          {/* Vision Menu */}
          <div className="cipla-vision-type-menu">
            <div className="cipla-vision-menu-wrapper">
              <ul className="cipla-vision-menu-items">
                {visionTypes.map((vision) => (
                  <li key={vision.id} className="cipla-vision-menu-item">
                    <button
                      className={`cipla-vision-type-filter ${
                        selectedVision.id === vision.id ? "active" : ""
                      }`}
                      onClick={() => handleVisionChange(vision.id)}
                    >
                      <span className="vision-menu-item">
                        <span className="vision-menu-icon">
                          <img
                            src={vision.icon}
                            alt={`${vision.title} icon`}
                            width="50"
                            height="57"
                          />
                        </span>
                        <span className="vision-menu-title">{vision.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CiplaVision;
