import React, { useState } from "react";
import './ShopLook.css';

export default function Component() {
    const [selectedTopic, setSelectedTopic] = useState("AntiBiotics");

    const topicContent = {
        AntiBiotics: {
            heading: "Anti Biotics",
            paragraph: "Our health initiatives focus on improving healthcare access and quality for underserved communities.",
            buttonText: "Read More",
            buttonLink: "https://www.cipla.com/csr/cipla-foundation/health.html",
            image: "https://www.cipla.com/sites/default/files/2023-07/health-image.webp",
            icon: "🌟"
        },
        Cardiology: {
            heading: "Cardiology",
            paragraph: "We provide educational resources and support to empower the next generation.",
            buttonText: "Learn More",
            buttonLink: "https://www.cipla.com/csr/cipla-foundation/education.html",
            image: "https://www.cipla.com/sites/default/files/2022-11/education-banner.webp",
            icon: "🛡️"
        },
        Dendruff: {
            heading: "Dendruff",
            paragraph: "Our skilling programs aim to equip individuals with the necessary skills for employment.",
            buttonText: "Explore More",
            buttonLink: "https://www.cipla.com/csr/cipla-foundation/skilling.html",
            image: "https://www.cipla.com/sites/default/files/2022-11/skill-banner.webp",
            icon: "💧"
        },
        EyeHealth: {
            heading: "Eye Health",
            paragraph: "We are committed to sustainable practices that protect our environment.",
            buttonText: "Discover More",
            buttonLink: "https://www.cipla.com/csr/cipla-foundation/environmental-sustainability.html",
            image: "https://www.cipla.com/sites/default/files/2023-07/environment-resized.webp",
            icon: "👁️"
        },
        MemoryEnhancers: {
            heading: "Memory Enhancers",
            paragraph: "Our disaster management initiatives provide relief and support during crises.",
            buttonText: "Find Out More",
            buttonLink: "https://www.cipla.com/csr/cipla-foundation/disaster-management.html",
            image: "https://www.cipla.com/sites/default/files/2023-07/disaster-relief-resized.webp",
            icon: "🧠"
        },
    };

    return (
        <section className="cipla-vision foundation cus-bg-vision-grey">
            <div className="cipla-vision-wrapper">
                <div className="container">
                    <div className="view-header">
                        <h3>STANDING STRONG. CARING FOR LIFE.</h3>
                        <p>
                            The Company through the Foundation continues its passionate journey of 
                            social change through collaborations. We endeavor to empower vulnerable 
                            communities and keep them at the heart of all our CSR initiatives.
                        </p>
                    </div>
                    <div className="content-container">
                        {/* Image and Content Section */}
                        <div className="banner">
                            <div className="image-container">
                                <img
                                    src={topicContent[selectedTopic].image}
                                    alt={selectedTopic}
                                    className="topic-image"
                                />
                                <div className="overlay">
                                    <h4 className="overlay-heading">{topicContent[selectedTopic].heading}</h4>
                                    <p className="overlay-paragraph">{topicContent[selectedTopic].paragraph}</p>
                                    <a
                                        href={topicContent[selectedTopic].buttonLink}
                                        className="read-more-button"
                                    >
                                        {topicContent[selectedTopic].buttonText}
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Topics Section */}
                        <div className="topics-container">
                            {Object.keys(topicContent).map((topic) => (
                                <div
                                    key={topic}
                                    className={`topic ${selectedTopic === topic ? "active" : ""}`}
                                    onClick={() => setSelectedTopic(topic)}
                                >
                                    <span className="topic-icon">
                                        {topicContent[topic].icon}
                                    </span>
                                    {topic.replace(/([A-Z])/g, ' $1')}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
