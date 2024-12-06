<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './CoreValuesCard.css'; // Import the CSS file

// Variants for parent (container)
const containerVariants = {
  hidden: {}, // No animation on the parent itself
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger each child animation by 0.3s
    },
  },
};

// Variants for child (each card)
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function CoreValuesCard() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const section = document.querySelector('.corevalues_section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <motion.section
      className="corevalues_section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="corevalues_content">
        <div className="py-8 md:py-20 px-4 container mx-auto">
          <div className="grid grid-cols-1 gap-10">
            <motion.div variants={cardVariants}>
              <h3 className="core_values_title">Core Values</h3>
              <p className="core_values_para">
                The Company's core values serve as the foundation and guiding principles, leading to longevity and success in the pharmaceutical industry.
              </p>
            </motion.div>
            <motion.div className="core_values_card_wrapper" variants={containerVariants}>
              {/* Core Value Card Example */}
              <CoreValueCard
                imageSrc="https://www.torrentpharma.com/assets/Integrity_c8e18a533a.svg"
                title="Integrity"
                description="Thoughts and actions entail doing the right thing at all times and in all circumstances; whether or not anyone is watching. This requires inner courage and conviction, no matter what the consequences are."
                strongText="When Truth is Paramount"
              />
              <CoreValueCard
                imageSrc="https://www.torrentpharma.com/assets/Passion_for_Excellence_bdee25b1f5.png"
                title="Passion for Excellence"
                description="Passion for excellence means not doing extra-ordinary things, but doing ordinary things in all pursuits exceedingly well. Passion and excellence are forces that fuel each other on the exclusive path to leadership."
                strongText="When best is not enough"
              />
              <CoreValueCard
                imageSrc="https://www.torrentpharma.com/assets/Decision_Making_4fe4435f64.svg"
                title="Participative Decision Making"
                description="An ideal organization facilitates participation and involvement of each of its members in various decision making processes, thus ensuring their commitment to such decisions as well as its outcome."
                strongText="Involvement that engenders effectiveness"
              />
              <CoreValueCard
                imageSrc="https://www.torrentpharma.com/assets/Society_Environment_7f8ecaa70a.svg"
                title="Concern for Society & Environment"
                description="Concern for Society & Environment is a sense of responsibility and contribution to society that defines our existence. It entails making a difference in the quality of lives and environment surrounding us."
                strongText="When every smile matters"
              />
              <CoreValueCard
                imageSrc="https://www.torrentpharma.com/assets/Fairnesswith_Care_11e602d2c3.svg"
                title="Fairness with Care"
                description="Fairness and Care towards all fellow members are inextricably linked. Weaving the threads of equality, irrespective of caste, creed, religion and gender, into the day to day fabric, ensures fairness for each and every individual."
                strongText="Harnessing equality"
              />
              <CoreValueCard
                imageSrc="https://www.torrentpharma.com/assets/Transparency_9890454f1e.png"
                title="Transparency"
                description="Transparency implies openness. It is the opposite of secrecy. It encourages more informed decision making and aids in creating enduring trust among all stakeholders."
                strongText="Openness that builds enduring trust"
              />
            </motion.div>
=======
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function CoreValuesCard() {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // GSAP animations for the card
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power4.out" },
    });

    // Card entry animation
    tl.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 8px 24px",
        duration: 1,
      }
    );

    // Image animation
    tl.fromTo(
      imageRef.current,
      { scale: 0.8, rotate: "45deg", opacity: 0 },
      {
        scale: 1,
        rotate: "0deg",
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.8"
    );

    // Title animation
    tl.fromTo(
      titleRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        color: "#ffeb3b",
        textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
      },
      "-=0.5"
    );
  }, []);
  return (
    <>
      <section
        className="corevalues_section"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          letterSpacing: "0.02em",
          fontFamily: "Lato, sans-serif",
        }}
      >
        <div
          className="corevalues_content"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            letterSpacing: "0.02em",
            fontFamily: "Lato, sans-serif",
          }}
        >
          <div
            className="py-8 md:py-20 px-4 container mx-auto"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "1140px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              letterSpacing: "0.02em",
              paddingTop: "2rem",
              paddingBottom: "5rem",
              fontFamily: "Lato, sans-serif",
            }}
          >
            <div
              className="grid grid-cols-1 gap-10"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "grid",
                gridTemplateColumns: "repeat(1, minmax(0px, 1fr))",
                gap: "2.5rem",
                letterSpacing: "0.02em",
                fontFamily: "Lato, sans-serif",
              }}
            >
              <div
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  letterSpacing: "0.02em",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <h3
                  className="core_values_title text-lg md:text-2xl font-bold leading-[28.8px] mb-6"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginBottom: "1.5rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    fontSize: "2.5rem",
                    lineHeight: "2rem",
                    color: "rgb(104, 52, 128)",
                    textAlign: "left",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  Core Values
                </h3>
                <p
                  className="core_values_para text-sm xl:text-base 2xl:text-lg font-normal leading-normal"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    fontSize: "16px",
                    lineHeight: "1.5rem",
                    color: "rgb(113, 113, 112)",
                    textAlign: "left",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  The Companys core values serve as the foundation and guiding
                  principles, leading to longevity and success in the
                  pharmaceutical industry.
                </p>
              </div>
              <div
                className="core_values_card_wrapper grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7 2xl:grid-cols-3 2xl:gap-10 justify-items-center"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "grid",
                  justifyItems: "center",
                  letterSpacing: "0.02em",
                  gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                  gap: "1.75rem",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <div
                  className="core_values_card_box rounded-3xl overflow-hidden"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    borderRadius: "1.5rem",
                    letterSpacing: "0.02em",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 24px 0px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <motion.div
                    className="card_header rounded-t-3xl px-6 flex items-center justify-start gap-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "1rem",
                      borderTopLeftRadius: "1.5rem",
                      borderTopRightRadius: "1.5rem",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      letterSpacing: "0.02em",
                      background:
                        "linear-gradient(129.27deg, rgb(104, 52, 128) 7.77%, rgb(145, 101, 170) 88.92%)",
                      height: "96px",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <motion.div
                      className="w-[99px] h-[68px]"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        height: "68px",
                        width: "99px",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        alt="integrity"
                        src="https://www.torrentpharma.com/assets/Integrity_c8e18a533a.svg"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </motion.div>
                    <motion.div
                      className="header_title text-lg md:text-2xl font-bold leading-[28.8px]"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        fontSize: "1.5rem",
                        lineHeight: "2rem",
                        color: "rgb(255, 255, 255)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <motion.h3
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontSize: "2.5rem",
                          fontWeight: "inherit",
                          margin: "0px",
                          color: "#fff",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      >
                        Integrity
                      </motion.h3>
                    </motion.div>
                  </motion.div>
                  <div
                    className="card_body bg-white p-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      backgroundColor: "rgb(255 255 255/1)",
                      padding: "1.5rem",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="core_values_para text-sm xl:text-base 2xl:text-lg font-normal leading-normal"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        fontSize: "16px",
                        lineHeight: "1.5rem",
                        color: "rgb(113, 113, 112)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        <strong
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontWeight: "bolder",
                            letterSpacing: "0.02em",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          When Truth is Paramount
                        </strong>
                      </p>
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Thoughts and actions entail doing the right thing at all
                        times and in all circumstances; whether or not anyone is
                        watching. This requires inner courage and conviction, no
                        matter what the consequences are.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="core_values_card_box rounded-3xl overflow-hidden"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    borderRadius: "1.5rem",
                    letterSpacing: "0.02em",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 24px 0px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <div
                    className="card_header rounded-t-3xl px-6 flex items-center justify-start gap-4"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "1rem",
                      borderTopLeftRadius: "1.5rem",
                      borderTopRightRadius: "1.5rem",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      letterSpacing: "0.02em",
                      background:
                        "linear-gradient(129.27deg, rgb(104, 52, 128) 7.77%, rgb(145, 101, 170) 88.92%)",
                      height: "96px",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="w-[99px] h-[68px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        height: "68px",
                        width: "99px",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        alt="integrity"
                        src="https://www.torrentpharma.com/assets/Passion_for_Excellence_bdee25b1f5.png"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </div>
                    <div
                      className="header_title text-lg md:text-2xl font-bold leading-[28.8px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        fontSize: "1.5rem",
                        lineHeight: "2rem",
                        color: "rgb(255, 255, 255)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <h3
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontSize: "2.5rem",
                          fontWeight: "inherit",
                          margin: "0px",
                          color: "#fff",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Passion for Excellence
                      </h3>
                    </div>
                  </div>
                  <div
                    className="card_body bg-white p-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      backgroundColor: "rgb(255 255 255/1)",
                      padding: "1.5rem",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="core_values_para text-sm xl:text-base 2xl:text-lg font-normal leading-normal"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        fontSize: "16px",
                        lineHeight: "1.5rem",
                        color: "rgb(113, 113, 112)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        <strong
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontWeight: "bolder",
                            letterSpacing: "0.02em",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          When best is not enough
                        </strong>
                      </p>
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Passion for excellence means not doing extra-ordinary
                        things, but doing ordinary things in all pursuits
                        exceedingly well. Passion and excellence are forces that
                        fuel each other on the exclusive path to leadership.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="core_values_card_box rounded-3xl overflow-hidden"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    borderRadius: "1.5rem",
                    letterSpacing: "0.02em",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 24px 0px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <div
                    className="card_header rounded-t-3xl px-6 flex items-center justify-start gap-4"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "1rem",
                      borderTopLeftRadius: "1.5rem",
                      borderTopRightRadius: "1.5rem",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      letterSpacing: "0.02em",
                      background:
                        "linear-gradient(129.27deg, rgb(104, 52, 128) 7.77%, rgb(145, 101, 170) 88.92%)",
                      height: "96px",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="w-[99px] h-[68px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        height: "68px",
                        width: "99px",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        alt="integrity"
                        src="https://www.torrentpharma.com/assets/Decision_Making_4fe4435f64.svg"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </div>
                    <div
                      className="header_title text-lg md:text-2xl font-bold leading-[28.8px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        fontSize: "1.5rem",
                        lineHeight: "2rem",
                        color: "rgb(255, 255, 255)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <h3
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontSize: "2.5rem",
                          fontWeight: "inherit",
                          margin: "0px",
                          color: "#fff",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Participative Decision Making
                      </h3>
                    </div>
                  </div>
                  <div
                    className="card_body bg-white p-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      backgroundColor: "rgb(255 255 255/1)",
                      padding: "1.5rem",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="core_values_para text-sm xl:text-base 2xl:text-lg font-normal leading-normal"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        fontSize: "16px",
                        lineHeight: "1.5rem",
                        color: "rgb(113, 113, 112)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        <strong
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontWeight: "bolder",
                            letterSpacing: "0.02em",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Involvement that engenders effectiveness
                        </strong>
                      </p>
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        An ideal organization facilitates participation and
                        involvement of each of its members in various decision
                        making processes, thus ensuring their commitment to such
                        decisions as well as its outcome.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="core_values_card_box rounded-3xl overflow-hidden"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    borderRadius: "1.5rem",
                    letterSpacing: "0.02em",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 24px 0px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <div
                    className="card_header rounded-t-3xl px-6 flex items-center justify-start gap-4"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "1rem",
                      borderTopLeftRadius: "1.5rem",
                      borderTopRightRadius: "1.5rem",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      letterSpacing: "0.02em",
                      background:
                        "linear-gradient(129.27deg, rgb(104, 52, 128) 7.77%, rgb(145, 101, 170) 88.92%)",
                      height: "96px",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="w-[99px] h-[68px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        height: "68px",
                        width: "99px",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        alt="integrity"
                        src="https://www.torrentpharma.com/assets/Society_Environment_7f8ecaa70a.svg"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </div>
                    <div
                      className="header_title text-lg md:text-2xl font-bold leading-[28.8px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        fontSize: "1.5rem",
                        lineHeight: "2rem",
                        color: "rgb(255, 255, 255)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <h3
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontSize: "2.5rem",
                          fontWeight: "inherit",
                          margin: "0px",
                          color: "#fff",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Concern for Society & Environment
                      </h3>
                    </div>
                  </div>
                  <div
                    className="card_body bg-white p-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      backgroundColor: "rgb(255 255 255/1)",
                      padding: "1.5rem",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="core_values_para text-sm xl:text-base 2xl:text-lg font-normal leading-normal"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        fontSize: "16px",
                        lineHeight: "1.5rem",
                        color: "rgb(113, 113, 112)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        <strong
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontWeight: "bolder",
                            letterSpacing: "0.02em",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          When every smile matters
                        </strong>
                      </p>
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Concern for Society & Environment is a sense of
                        responsibility and contribution to society that defines
                        our existence. It entails making a difference in the
                        quality of lives and environment surrounding us.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="core_values_card_box rounded-3xl overflow-hidden"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    borderRadius: "1.5rem",
                    letterSpacing: "0.02em",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 24px 0px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <div
                    className="card_header rounded-t-3xl px-6 flex items-center justify-start gap-4"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "1rem",
                      borderTopLeftRadius: "1.5rem",
                      borderTopRightRadius: "1.5rem",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      letterSpacing: "0.02em",
                      background:
                        "linear-gradient(129.27deg, rgb(104, 52, 128) 7.77%, rgb(145, 101, 170) 88.92%)",
                      height: "96px",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="w-[99px] h-[68px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        height: "68px",
                        width: "99px",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        alt="integrity"
                        src="https://www.torrentpharma.com/assets/Fairnesswith_Care_11e602d2c3.svg"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </div>
                    <div
                      className="header_title text-lg md:text-2xl font-bold leading-[28.8px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        fontSize: "1.5rem",
                        lineHeight: "2rem",
                        color: "rgb(255, 255, 255)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <h3
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontSize: "2.5rem",
                          fontWeight: "inherit",
                          margin: "0px",
                          color: "#fff",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Fairness with Care{" "}
                      </h3>
                    </div>
                  </div>
                  <div
                    className="card_body bg-white p-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      backgroundColor: "rgb(255 255 255/1)",
                      padding: "1.5rem",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="core_values_para text-sm xl:text-base 2xl:text-lg font-normal leading-normal"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        fontSize: "16px",
                        lineHeight: "1.5rem",
                        color: "rgb(113, 113, 112)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        <strong
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontWeight: "bolder",
                            letterSpacing: "0.02em",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Harnessing equality
                        </strong>
                      </p>
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Fairness and Care towards all fellow members are
                        inextricably linked. Weaving the threads of equality,
                        irrespective of caste, creed, religion and gender, into
                        the day to day fabric, ensures fairness for each and
                        every individual.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="core_values_card_box rounded-3xl overflow-hidden"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    borderRadius: "1.5rem",
                    letterSpacing: "0.02em",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 24px 0px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <div
                    className="card_header rounded-t-3xl px-6 flex items-center justify-start gap-4"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "1rem",
                      borderTopLeftRadius: "1.5rem",
                      borderTopRightRadius: "1.5rem",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      letterSpacing: "0.02em",
                      background:
                        "linear-gradient(129.27deg, rgb(104, 52, 128) 7.77%, rgb(145, 101, 170) 88.92%)",
                      height: "96px",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="w-[99px] h-[68px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        height: "68px",
                        width: "99px",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        alt="integrity"
                        src="https://www.torrentpharma.com/assets/Transparency_9890454f1e.png"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </div>
                    <div
                      className="header_title text-lg md:text-2xl font-bold leading-[28.8px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        fontSize: "1.5rem",
                        lineHeight: "2rem",
                        color: "rgb(255, 255, 255)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <h3
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontSize: "2.5rem",
                          fontWeight: "inherit",
                          margin: "0px",
                          color: "#fff",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Transparency
                      </h3>
                    </div>
                  </div>
                  <div
                    className="card_body bg-white p-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      backgroundColor: "rgb(255 255 255/1)",
                      padding: "1.5rem",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="core_values_para text-sm xl:text-base 2xl:text-lg font-normal leading-normal"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        fontSize: "16px",
                        lineHeight: "1.5rem",
                        color: "rgb(113, 113, 112)",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        <strong
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontWeight: "bolder",
                            letterSpacing: "0.02em",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Openness that builds enduring trust
                        </strong>
                      </p>
                      <p
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Transparency implies openness. It is the opposite of
                        secrecy. It encourages more informed decision making and
                        aids in creating enduring trust among all stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );



const CoreValueCard = ({ imageSrc, title, description, strongText }) => (
  <motion.div className="core_values_card_box" variants={cardVariants}>
    <div className="card_header">
      <div className="w-[99px] h-[68px]">
        <img
          className="h-full w-full object-cover"
          alt={title}
          src={imageSrc}
        />
      </div>
      <div className="header_title">
        <h3>{title}</h3>
      </div>
    </div>
    <div className="card_body">
      <div className="core_values_para">
        <p>
          <strong>{strongText}</strong>
        </p>
        <p>{description}</p>
      </div>
    </div>
  </motion.div>
);
=======

