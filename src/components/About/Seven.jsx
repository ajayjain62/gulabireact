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
          </div>
        </div>
      </div>
    </motion.section>
  );
}

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
