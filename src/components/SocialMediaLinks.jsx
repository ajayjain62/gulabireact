import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
  return (
    <div
      className="social-media-header"
      style={{
        padding: "0px",
        backgroundColor: "rgb(0, 0, 0)",
        margin: "0px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
      }}
    >
      <div
        className="social-media-wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "300px",
        }}
      >
        {/* Instagram */}
        <a
          href="https://www.pantaloons.com/content/greencard?source=firstband"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
          className="social-media-icon-link"
          style={{
            color: "white",
            fontSize: "24px",
            transition: "transform 0.3s ease, color 0.3s ease",
            margin: "0 10px",
            textDecoration: "none",
          }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="icon-instagram"
            style={{
              transition: "all 0.3s ease",
            }}
          />
        </a>

        {/* Twitter */}
        <a
          href="https://pantaloons.woohoo.in/e-gift-card"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
          className="social-media-icon-link"
          style={{
            color: "white",
            fontSize: "24px",
            transition: "transform 0.3s ease, color 0.3s ease",
            margin: "0 10px",
            textDecoration: "none",
          }}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="icon-twitter"
            style={{
              transition: "all 0.3s ease",
            }}
          />
        </a>

        {/* Facebook */}
        <a
          href="https://www.pantaloons.com/content/store-locators-9?source=firstband"
          title="Facebook"
          target="_blank"
          rel="noreferrer"
          className="social-media-icon-link"
          style={{
            color: "white",
            fontSize: "24px",
            transition: "transform 0.3s ease, color 0.3s ease",
            margin: "0 10px",
            textDecoration: "none",
          }}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="icon-facebook"
            style={{
              transition: "all 0.3s ease",
            }}
          />
        </a>

        {/* YouTube */}
        <a
          href="https://track.pantaloons.com/?source=firstband"
          title="YouTube"
          target="_blank"
          rel="noreferrer"
          className="social-media-icon-link"
          style={{
            color: "white",
            fontSize: "24px",
            transition: "transform 0.3s ease, color 0.3s ease",
            margin: "0 10px",
            textDecoration: "none",
          }}
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="icon-youtube"
            style={{
              transition: "all 0.3s ease",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
