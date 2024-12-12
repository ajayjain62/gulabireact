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
          <h2 className="five-title">Introducing Natural Solutions for Diabetes Management</h2>
          <p className="five-description">
           Managing diabetes effectively involves a holistic approach, combining lifestyle changes, balanced nutrition, and innovative anti-diabetic solutions to help stabilize blood sugar levels and promote overall health.{" "}
          </p>
          <div className="five-product-image-container">
            <img
              src="https://i.postimg.cc/3wd7WJRS/glutathione.png"
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
          Anti-diabetic solutions work by regulating blood sugar levels, enhancing insulin sensitivity, and supporting pancreatic health.
        </p>
        <div className="five-steps">
          <div className="five-step">
            <img
              src="https://demo.web3canvas.com/themeforest/proland/images/desktop.png"
              alt="Connect Device"
              className="five-step-icon"
            />
            <h3 className="five-step-title">Effective Glucose Control</h3>
            <p className="five-step-description">
            It involves maintaining balanced blood sugar levels through healthy eating, regular exercise, stress management, and proper use of medications or supplements.
            </p>
          </div>
          <div className="five-step">
            <img
              src="https://demo.web3canvas.com/themeforest/proland/images/toggles.png"
              alt="Configure It"
              className="five-step-icon"
            />
            <h3 className="five-step-title">Beating Diabetes Naturally</h3>
            <p className="five-step-description">
            Beating diabetes naturally focuses on holistic approaches like a balanced diet, regular exercise, stress management, and natural supplements to regulate blood sugar levels and improve overall health sustainably.
            </p>
          </div>
          <div className="five-step">
            <img
              src="https://demo.web3canvas.com/themeforest/proland/images/trophy.png"
              alt="Done"
              className="five-step-icon"
            />
            <h3 className="five-step-title">Living Diabetes-Free Life</h3>
            <p className="five-step-description">
            Living a diabetes-free life starts with proactive care, including balanced nutrition, regular exercise, and stress management. 
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
            Experience the ultimate in skin health with our advanced formula. Packed with powerful ingredients, it supports your journey toward radiant, youthful skin.
            </p>
            <ul className="five-watch-features">
              <li>✅ Supports All Skin Types</li>
              <li>✅ Powerful Antioxidant Protection</li>
              <li>✅ Boosts Collagen & Skin Elasticity</li>
              <li>✅ Improves Absorption & Effectiveness</li>
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
