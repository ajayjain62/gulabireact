import React, { useState } from "react";
import "./Five.css";

const Five = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      position: { top: "20%", left: "10%" },
      lineClass: "five-line-one",
      textClass: "five-content-one",
      text: "Hotspot 1: Amazing feature here!",
    },
    {
      id: 2,
      position: { top: "50%", left: "50%" },
      lineClass: "five-line-two",
      textClass: "five-content-two",
      text: "Hotspot 2: Learn more about this.",
    },
    {
      id: 3,
      position: { bottom: "10%", right: "20%" },
      lineClass: "five-line-three",
      textClass: "five-content-three",
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
          <h2 className="five-title">Introducing Natural Solutions for Combatting Anemia</h2>
          <p className="five-description">
            Introducing natural solutions for combating anemia, focusing on nutrient-rich foods and supplements that boost iron levels, improve red blood cell production, and support overall energy and vitality.{" "}
          </p>
          <div className="five-product-image-container">
            <img
              src="src/assets/img/products/teen age.jpg"
              alt="Product"
              className="five-product-image"
            />

            {/* Hotspot 1 */}
            <div
              className={`five-hotspot hotspot-1 ${
                activeHotspot === 1 ? "active" : ""
              }`}
              onClick={() => handleHotspotClick(1)}
            ></div>
            {activeHotspot === 1 && (
              <>
                <div className="five-line line-1 active"></div>
                <div className="five-hotspot-content content-1 active">
                Powerful Antioxidant Support

                </div>
              </>
            )}

            {/* Hotspot 2 */}
            <div
              className={`five-hotspot hotspot-2 ${
                activeHotspot === 2 ? "active" : ""
              }`}
              onClick={() => handleHotspotClick(2)}
            ></div>
            {activeHotspot === 2 && (
              <>
                <div className="five-line line-2 active"></div>
                <div className="five-hotspot-content content-2 active">
                Advanced Skin Hydration

                </div>
              </>
            )}

            {/* Hotspot 3 */}
            <div
              className={`five-hotspot hotspot-3 ${
                activeHotspot === 3 ? "active" : ""
              }`}
              onClick={() => handleHotspotClick(3)}
            ></div>
            {activeHotspot === 3 && (
              <>
                <div className="five-line line-3 active"></div>
                <div className="five-hotspot-content content-3 active">
                Comprehensive Wellness

                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="five-how-it-works">
        <h2 className="five-title">HOW IT WORKS</h2>
        <p className="five-description">
          Everybody loves glowing, healthy skin. Here’s how our Flawless
          Collagen Support works! It’s simple and effective.
        </p>
        <div className="five-steps">
          <div className="five-step">
            <img
              src="https://demo.web3canvas.com/themeforest/proland/images/desktop.png"
              alt="Connect Device"
              className="five-step-icon"
            />
            <h3 className="five-step-title">Boost & Absorb</h3>
            <p className="five-step-description">
              From reducing hyperpigmentation to boosting collagen production,
              our formula supports overall skin health, delays signs of aging,
              and enhances your natural glow. Feel confident in your skin every
              day.
            </p>
          </div>
          <div className="five-step">
            <img
              src="https://demo.web3canvas.com/themeforest/proland/images/toggles.png"
              alt="Configure It"
              className="five-step-icon"
            />
            <h3 className="five-step-title">Achieve Radiant Skin</h3>
            <p className="five-step-description">
              From reducing hyperpigmentation to boosting collagen production,
              our formula supports overall skin health, delays signs of aging,
              and enhances your natural glow. Feel confident in your skin every
              day.
            </p>
          </div>
          <div className="five-step">
            <img
              src="https://demo.web3canvas.com/themeforest/proland/images/trophy.png"
              alt="Done"
              className="five-step-icon"
            />
            <h3 className="five-step-title">Connect to Radiance</h3>
            <p className="five-step-description">
              Our natural dietary supplement features a powerful blend of
              antioxidants and vitamins, including Glutathione, Alpha Lipoic
              Acid, Vitamin E, Hyaluronic Acid, and more. These ingredients work
              together to fight dark spots, under-eye circles, and uneven skin
              tones.
            </p>
          </div>
        </div>
      </div>

      {/* The Watch Section */}
      <div className="five-watch-section">
        <div className="five-watch-container">
          <div className="five-watch-content">
            <h2 className="five-title">Anti-Anemic</h2>
            <p className="five-description">
            Anemia, a condition marked by a deficiency in red blood cells or hemoglobin, can lead to fatigue, weakness, and other health issues. Anti-anemic solutions focus on restoring healthy blood cell production, often through dietary adjustments, supplements, and lifestyle changes.
            </p>
            <ul className="five-watch-features">
              <li>✅ Increased Energy Levels</li>
              <li>✅ Improved Immune Function</li>
              <li>✅ Enhanced Cognitive Function</li>
              <li>✅ Better Skin Health</li>
            </ul>
          </div>
          <div className="five-watch-image">
            <img
              src="src/assets/img/products/teen age.jpg"
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
