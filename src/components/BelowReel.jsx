import React, { useState } from 'react';
import './Blowreel.css';



const CiplaVision = () => {
  const [selectedVision, setSelectedVision] = useState({
    id: "686",
    title: "Our Purpose ‘Caring for Life’",
    content:
      "Our humanitarian approach for healthcare in pursuit of our purpose ‘Caring for Life’ makes us a partner of choice for global health bodies and stakeholders.",
    image: "https://i.postimg.cc/qRnTvYGv/671140ebd9074655bea422dcba0404dd.jpg",
    link: "#",
  });

  const visionTypes = [
    {
      id: "686",
      title: "Our Purpose ‘Caring for Life’",
      content:
        "Our humanitarian approach for healthcare in pursuit of our purpose ‘Caring for Life’ makes us a partner of choice for global health bodies and stakeholders.",
      image: "https://i.postimg.cc/qRnTvYGv/671140ebd9074655bea422dcba0404dd.jpg",
      link: "#",
      icon: "https://www.cipla.com/sites/default/files/2022-09/icon-purpose.svg",
    },
    {
      id: "687",
      title: "Journey from illness to wellness.",
      image: "https://i.postimg.cc/Z5hwdqhm/205ef5e27daa2642ff80d059fc4df267.jpg",
      content:
        "Advancing wellness and holistic healthcare solutions to empower healthier lives, enhance well-being, and build a brighter, more sustainable future for individuals, families.",
      link: "#",
      icon: "https://www.cipla.com/sites/default/files/2022-09/icon-illness-to-wellness.svg",
    },
    {
      id: "688",
      title: "Our People,Our Pride,Our Inspire.",
      content:
        "Recognizing the talented individuals whose unwavering dedication and innovation have propelled Goa Nutrition to global leadership in delivering exceptional and transformative.",
      image: "https://www.cipla.com/sites/default/files/2022-11/people_0.webp",
      link: "#",
      icon: "https://www.cipla.com/sites/default/files/2022-09/icon-our-people.svg",
    },
    {
      id: "689",
      title: "BREATHE. Think Immune Science",
      content: "Driving excellence in respiratory health through innovative solutions, compassionate care, and an unwavering commitment to enhancing lives and well-being on a global scale.",
      image: "https://i.postimg.cc/T3DhZRyK/213b59b15f1e0c9300e67b3c1b4edbc6.jpg",
      link: "#",
      icon: "https://www.cipla.com/sites/default/files/2022-09/icon-breathefree.svg",
    },
    {
      id: "690",
      title: "Towards A Sustainable Future",
      content: "Building a sustainable, equitable, and inclusive world to secure a healthier, brighter future, empowering generations with opportunities for well-being, prosperity.",
      image:
        "https://i.postimg.cc/BQDXzSPX/6db9f4fc064816f90deea1cda908d5de.jpg",
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
        <div className="containeri">
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
