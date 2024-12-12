import React, { useState } from "react";
import "./Five.css";
import { motion } from "framer-motion";

const Five = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
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
          <h2 className="five-title">Introducing Glutathione Skin Health</h2>
          <p className="five-description">
            A powerful blend of Glutathione, Alpha Lipoic Acid, Hyaluronic Acid,
            and Biotin designed to support radiant skin. This product helps
            reduce skin pigmentation, supports overall skin health, and boosts
            antioxidant levels for a glowing complexion.{" "}
          </p>
          <div className="five-product-image-container">
            <img
              src="src/assets/img/3dmockups/14.png"
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

      <motion.div
        className="five-how-it-works"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="five-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HOW IT WORKS
        </motion.h2>
        <motion.p
          className="five-description"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Everybody loves glowing, healthy skin. Here’s how our Flawless
          Collagen Support works! It’s simple and effective.
        </motion.p>
        <motion.div
          className="five-steps"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {[
            {
              title: "Boost & Absorb",
              description:
                "From reducing hyperpigmentation to boosting collagen production, our formula supports overall skin health, delays signs of aging, and enhances your natural glow. Feel confident in your skin every day.",
              imgSrc:
                "https://demo.web3canvas.com/themeforest/proland/images/desktop.png",
              alt: "Connect Device",
            },
            {
              title: "Achieve Radiant Skin",
              description:
                "From reducing hyperpigmentation to boosting collagen production, our formula supports overall skin health, delays signs of aging, and enhances your natural glow. Feel confident in your skin every day.",
              imgSrc:
                "https://demo.web3canvas.com/themeforest/proland/images/toggles.png",
              alt: "Configure It",
            },
            {
              title: "Connect to Radiance",
              description:
                "Our natural dietary supplement features a powerful blend of antioxidants and vitamins, including Glutathione, Alpha Lipoic Acid, Vitamin E, Hyaluronic Acid.",
              imgSrc:
                "https://demo.web3canvas.com/themeforest/proland/images/trophy.png",
              alt: "Done",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="five-step"
              variants={stepVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={step.imgSrc}
                alt={step.alt}
                className="five-step-icon"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h3 className="five-step-title">{step.title}</h3>
              <p className="five-step-description">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* The Watch Section */}
      <motion.div
        className="five-watch-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="five-watch-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="five-watch-content"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="five-title">GLUTATHIONE</h2>
            <p className="five-description">
              Experience the ultimate in skin health with our advanced formula.
              Packed with powerful ingredients, it supports your journey toward
              radiant, youthful skin.
            </p>
            <motion.ul
              className="five-watch-features"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.3 },
                },
              }}
            >
              {[
                " Supports All Skin Types",
                " Powerful Antioxidant Protection",
                " Boosts Collagen & Skin Elasticity",
                " Improves Absorption & Effectiveness",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="five-watch-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="src/assets/img/3dmockups/14.png"
              alt="Smart Watch"
              className="five-watch-img"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Five;
