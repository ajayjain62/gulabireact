import React from "react";
import styles from "./HeroBanner.module.css"; // Importing CSS module

const HeroBanner = () => {
  const slides = [
    {
      image: "https://www.torrentpharma.com/assets/2_6_002fe627e6.jpg",
      text: "Explore Our Consumer Healthcare Range",
    },
    {
      image: "https://www.torrentpharma.com/assets/R_and_D_banner4_desktop_38b7c31173.jpg",
      text: "Creating an Inclusive and Healthy Society",
    },
    {
      image: "https://www.torrentpharma.com/assets/Torrent_Mumbai_1_2_94a04fcfb4.jpg",
      text: "Unleashing Possibilities through Innovation",
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      {slides.map((slide, index) => (
        <div key={index} className={`${styles.slide} ${index === 0 ? styles.activeSlide : ""}`}>
          <img
            src={slide.image}
            alt={`Hero Banner ${index + 1}`}
            className={styles.bannerImage}
          />
          <div className={styles.overlay} />
          <div className={styles.bannerContent}>
            <p className={styles.bannerText}>{slide.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
