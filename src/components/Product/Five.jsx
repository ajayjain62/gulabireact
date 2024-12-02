import React, { useState } from "react";
import "./Five.css";

const Five = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspotContent = {
    1: "Feature 1: High-resolution display for clear visuals.",
    2: "Feature 2: Long battery life ensures uninterrupted use.",
    3: "Feature 3: Water-resistant design for durability.",
  };

  const handleHotspotClick = (id) => {
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  return (
    <section>
      {/* Product Section */}
      <div className="five-product-section">
        <div className="five-container">
          <h2 className="five-title">THE PRODUCT</h2>
          <p className="five-description">
            Introduce the product here. A small description about what it is and how it helps the user. You can also add some photos below.
          </p>
          <div className="five-product-image-container">
            <img
              src="https://i.postimg.cc/3wd7WJRS/glutathione.png"
              alt="Smart Watch"
              className="five-product-image"
            />
            <div className="five-hotspots">
              <div
                className={`five-hotspot ${activeHotspot === 1 ? "active" : ""}`}
                style={{ top: "20%", left: "10%" }}
                onClick={() => handleHotspotClick(1)}
              ></div>
              <div
                className={`five-hotspot ${activeHotspot === 2 ? "active" : ""}`}
                style={{ top: "50%", right: "15%" }}
                onClick={() => handleHotspotClick(2)}
              ></div>
              <div
                className={`five-hotspot ${activeHotspot === 3 ? "active" : ""}`}
                style={{ bottom: "15%", left: "20%" }}
                onClick={() => handleHotspotClick(3)}
              ></div>
            </div>
            <div className="five-hotspot-content">
              {activeHotspot && <p>{hotspotContent[activeHotspot]}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="five-how-it-works">
        <h2 className="five-title">HOW IT WORKS</h2>
        <p className="five-description">
          Everybody loves tech gadgets, but ours is different. Here is how it works.
          It should be simple. Add how easy it is to install your product.
        </p>
        <div className="five-steps">
          <div className="five-step">
            <img
              src="https://demo.web3canvas.com/themeforest/proland/images/desktop.png"
              alt="Connect Device"
              className="five-step-icon"
            />
            <h3 className="five-step-title">Connect Device</h3>
            <p className="five-step-description">
              Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="five-step">
            <img
              src="https://demo.web3canvas.com/themeforest/proland/images/toggles.png"
              alt="Configure It"
              className="five-step-icon"
            />
            <h3 className="five-step-title">Configure It</h3>
            <p className="five-step-description">
              Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="five-step">
            <img
              src="https://demo.web3canvas.com/themeforest/proland/images/trophy.png"
              alt="Done"
              className="five-step-icon"
            />
            <h3 className="five-step-title">Yay! Done.</h3>
            <p className="five-step-description">
              Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* The Watch Section */}
      <div className="five-watch-section">
        <div className="five-watch-container">
          <div className="five-watch-content">
            <h2 className="five-title">GLUTATHIONE</h2>
            <p className="five-description">
              With an image on the side of this content, you can use this section
              to write about some cool things about your product or its features.
            </p>
            <ul className="five-watch-features">
              <li>✅ Compatible with all devices</li>
              <li>✅ Android and iOS Support</li>
              <li>✅ Activity & Health Tracker</li>
              <li>✅ Read & reply to messages</li>
            </ul>
          </div>
          <div className="five-watch-image">
            <img
              src="https://i.postimg.cc/XN9cKLXT/goa-nutrition.png"
              alt="Smart Watch"
              className="five-watch-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Five;
