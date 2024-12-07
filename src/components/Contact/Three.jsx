import React, { useState } from "react";
import "./Faqs.css";

export default function FAQCollapsible() {
  const faqItems = [
    {
      question: "What is Unstop?",
      answer:
        "Unstop is a platform that allows organizations to host competitions, recruit talent, and connect with students and professionals.",
    },
    {
      question: "How do I participate in an event?",
      answer:
        "To participate in an event, you can create an account on Unstop, browse events, and register for the ones you're interested in.",
    },
    {
      question: "Can I recruit talent through Unstop?",
      answer:
        "Yes, Unstop provides tools for seamless recruitment by connecting you with talented individuals.",
    },
    {
      question: "What are the benefits of using Unstop?",
      answer:
        "Unstop provides a streamlined platform for event hosting, recruitment, and participation, helping individuals and organizations achieve their goals efficiently.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-collapsible">
      {faqItems.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <p>{item.question}</p>
            <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}
