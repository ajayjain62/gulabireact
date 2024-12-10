import React from 'react'
import './Technology.css'
import ''

function Section1() {
  return (
    <section className="part-1">
    <div className="image-carousel">
        <div className="image-row">
            <img src="./Assets/Images/1.jpg" alt="Image 1" />
            <img src="./Assets/Images/2.jpg" alt="Image 2" />
            <img src="./Assets/Images/3.jpg" alt="Image 3" />
            <img src="./Assets/Images/4.jpg" alt="Image 4" />
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
