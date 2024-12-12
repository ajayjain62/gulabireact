import React from "react";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 1.6,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.3,
      delayChildren: 0.5,
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

export default function Component() {
  const features = [
    {
      iconClass: "li_like",
      title: "Optimal Absorption Formula",
      description:
        "Acetylated Glutathione enhances absorption, cleanses, improves skin elasticity, youthful glow!",
    },
    {
      iconClass: "li_user",
      title: "Tailored for Your Needs",
      description:
        "Repairs skin, fights aging, supports immunity, promotes vibrant, healthy skin!",
    },
    {
      iconClass: "li_clock",
      title: "Maximum Effectiveness",
      description:
        "Enteric-coated tablets ensure stability, absorption, providing essential nutrients for skin health!",
    },
  ];

  return (
    <>
      <motion.section
        className="row left-right-contents"
        style={{
          boxSizing: "border-box",
          display: "block",
          padding: "0px 0px 30px",
          background: "rgb(248, 251, 253)",
          margin: "0px",
          marginRight: "0px",
          marginLeft: "0px",
          fontFamily: "poppins, sans-serif",
          marginTop: "30px",
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            marginRight: "auto",
            marginLeft: "auto",
            paddingLeft: "15px",
            paddingRight: "15px",
            width: "1170px",
            marginTop: "-100px",
          }}
        >
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              marginLeft: "-15px",
              marginRight: "-15px",
            }}
          >
            <motion.div
              className="col-sm-12 col-md-4 col-md-push-4 text-center wow fadeIn"
              style={{
                boxSizing: "border-box",
                textAlign: "center",
                position: "relative",
                minHeight: "1px",
                paddingLeft: "15px",
                paddingRight: "15px",
                cssFloat: "left",
                width: "33.3333%",
                left: "33.3333%",
                visibility: "visible",
                animationName: "fadeIn",
                marginTop: "130px",
              }}
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <img
                src="src/assets/img/3dmockups/14.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                }}
              />
            </motion.div>
            <motion.div
              className="col-md-4 col-sm-6 col-md-pull-4 left-content"
              style={{
                boxSizing: "border-box",
                position: "relative",
                minHeight: "1px",
                paddingLeft: "15px",
                paddingRight: "15px",
                cssFloat: "left",
                width: "33.3333%",
                right: "33.3333%",
              }}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {[
                {
                  icon: "li_key",
                  title: "Flawless Skin Support",
                  description:
                    "Achieve skin goals with Glutathione, Alpha Lipoic Acid, Biotin, Hyaluronic Acid!",
                },
                {
                  icon: "li_megaphone",
                  title: "Radiant Complexion Booster",
                  description:
                    "Brighten skin, reduce hyperpigmentation, boost collagen, protect, glow naturally!.",
                },
                {
                  icon: "li_diamond",
                  title: "Detox and Revitalize",
                  description:
                    "Packed with Grapeseed, Pomegranate Peel Extracts, detoxifies, boosts immunity, rejuvenates!",
                },
              ].map((item, index) => (
                <motion.div
                  className="media wow fadeInUp"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    zoom: 1,
                    marginTop: index === 0 ? "78px" : "65px",
                  }}
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={animationVariants}
                >
                  <div
                    className="media-left"
                    style={{
                      boxSizing: "border-box",
                      display: "table-cell",
                      verticalAlign: "top",
                      padding: "0px",
                      paddingRight: "0px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "70px",
                        fontSize: "32px",
                        color: "rgb(147, 0, 255)",
                      }}
                    >
                      <i
                        className={item.icon}
                        style={{ boxSizing: "border-box" }}
                      />
                    </span>
                  </div>
                  <div
                    className="media-body"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      zoom: 1,
                      width: "10000px",
                      display: "table-cell",
                      verticalAlign: "top",
                    }}
                  >
                    <h4
                      style={{
                        boxSizing: "border-box",
                        margin: "0px 0px 6px",
                        font: "600 20px / 1 Poppins, sans-serif",
                        marginTop: "0px",
                        marginBottom: "6px",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: 1,
                        fontFamily: "Poppins, sans-serif",
                        color: "rgb(55, 64, 72)",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        font: "300 14px / 22px Poppins, sans-serif",
                        color: "rgb(130, 137, 143)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="col-md-4 col-sm-6 right-content"
              style={{
                boxSizing: "border-box",
                position: "relative",
                minHeight: "1px",
                paddingLeft: "15px",
                paddingRight: "15px",
                float: "left",
                width: "33.33%",
              }}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  className="media wow fadeInUp"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    zoom: 1,
                    marginTop: index === 0 ? "78px" : "65px",
                  }}
                  key={index}
                  custom={index}
                  variants={fadeInUpVariants}
                >
                  <div
                    className="media-left"
                    style={{
                      boxSizing: "border-box",
                      display: "table-cell",
                      verticalAlign: "top",
                      padding: "0px",
                      paddingRight: "0px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "70px",
                        fontSize: "32px",
                        color: "rgb(147, 0, 255)",
                      }}
                    >
                      <i
                        className={feature.iconClass}
                        style={{ boxSizing: "border-box" }}
                      />
                    </span>
                  </div>
                  <div
                    className="media-body"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      zoom: 1,
                      width: "10000px",
                      display: "table-cell",
                      verticalAlign: "top",
                    }}
                  >
                    <h4
                      style={{
                        boxSizing: "border-box",
                        margin: "0px 0px 6px",
                        font: "600 20px / 1 Poppins, sans-serif",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: 1,
                        fontFamily: "Poppins, sans-serif",
                        color: "rgb(55, 64, 72)",
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        font: "300 14px / 22px Poppins, sans-serif",
                        color: "rgb(130, 137, 143)",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
