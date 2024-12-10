import React from 'react'
import './Technology.css'

function Section4() {
  return (
    <section className="part-4">
    <h2>Coating Techniques</h2>
    <div className="features">
        {[
            {
                title: "Stability & Controlled Release",
                description: "Improving the stability and timing of release for effective results.",
            },
            {
                title: "Taste Masking & Bioavailability",
                description: "Ensuring better absorption and masking undesirable flavors.",
            },
            {
                title: "Optimized Performance",
                description: "Providing precise dosing and targeted treatments.",
            },
        ].map((feature, index) => (
            <article key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
            </article>
        ))}
    </div>
</section>
  )
}

export default Section4
