import React, { useState } from "react";
import "./Five.css";

const Five = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      position: { top: "20%", left: "10%" },
      lineClass: "five-line-1",
      text: "Hotspot 1: Cool feature here!",
  },
  {
      id: 2,
      position: { top: "50%", right: "15%" },
      lineClass: "five-line-2",
      text: "Hotspot 2: Learn more about this.",
  },
  {
      id: 3,
      position: { bottom: "15%", left: "20%" },
      lineClass: "five-line-3",
      text: "Hotspot 3: Discover something new.",
  },
];

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
                    Introduce the product here. A small description about what it is and how it helps the user.
                </p>
                <div className="five-product-image-container">
                    <img
                        src="https://i.postimg.cc/3wd7WJRS/glutathione.png"
                        alt="Product"
                        className="five-product-image"
                    />
                    {hotspots.map((hotspot) => (
                        <div key={hotspot.id}>
                            <div
                                className={`five-hotspot ${
                                    activeHotspot === hotspot.id ? "active" : ""
                                }`}
                                style={hotspot.position}
                                onClick={() => handleHotspotClick(hotspot.id)}
                            ></div>
                            <div
                                className={`${hotspot.lineClass} ${
                                    activeHotspot === hotspot.id ? "active" : ""
                                }`}
                                style={{
                                    top: hotspot.position.top || "unset",
                                    bottom: hotspot.position.bottom || "unset",
                                    left: hotspot.position.left || "unset",
                                    right: hotspot.position.right || "unset",
                                    width: "100px", // Adjust for line length
                                }}
                            ></div>
                            <div
                                className={`five-hotspot-content ${
                                    activeHotspot === hotspot.id ? "active" : ""
                                }`}
                                style={{
                                    top: `calc(${hotspot.position.top} + 20px)` || "unset",
                                    bottom: `calc(${hotspot.position.bottom} - 20px)` || "unset",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                }}
                            >
                                {hotspot.text}
                            </div>
                        </div>
                    ))}
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
