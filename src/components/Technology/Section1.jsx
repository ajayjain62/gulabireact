import React from 'react'
import './Technology.css'

import { motion } from "framer-motion";


function Section1() {
  return (
    <section className="part-1">
    <div className="image-carousel">
        <div className="image-row">
            <img src="src/assets/img/Technology/9D62JjLITDmIdGABaTDVkg.jpg" alt="Image 1" />
            <img src="src/assets/img/Technology/ZQoQ_5RHSLOSaOJkl9kZDA.jpg" alt="Image 2" />
            <img src="src/assets/img/Technology/hOwxaa7ETDqWce4v6tt15Q.webp" alt="Image 3" />
            <img src="src/assets/img/Technology/RlmHaw4dTbSPoUXMBSpltw.jpg" alt="Image 4" />
        </div>
    </div>
    <div className="overlay">
        <h1>Layering and Coating</h1>
        <div className="scroll-indicator">
            <span>Scroll Down</span>
        </div>
    </div>
</section>
)
}

export default Section1

