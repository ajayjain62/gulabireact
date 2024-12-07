import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Technology.css"; // Ensure your styles are linked

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollAnimation = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP Animations
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-1",
        start: "top top",
        end: "100% 50%",
        scrub: true,
      },
    });

    tl1.to(".rotate-div", { rotate: "360deg" })
       .to(".overlay-div", { marginTop: "-50%", opacity: 0 });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-2",
        start: "50% 50%",
        end: "200% 50%",
        scrub: true,
        pin: true,
      },
    });

    tl2.to(".scroll-img", { marginTop: "-25%", opacity: 1 });

    // Responsive behavior
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        gsap.to(".scroll-img", { scale: 0.8 });
      },
      "(min-width: 769px)": function () {
        gsap.to(".scroll-img", { scale: 1 });
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="main">
    <nav>
      <div className="lft-nav">
        <h1 id="logo">Goa Nutrition</h1>
        <h1>Goa Nutrition</h1>
      </div>
    </nav>
    <div className="part-1">
      <div className="content-part-1">
        <div className="rotate-div">
          <div id="row-div-1" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/1.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/2.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/3.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/4.jpg" alt="" />
            </div>
          </div>
          <div id="row-div-2" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/5.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/7.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/8.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/9.jpg" alt="" />
            </div>
          </div>
          <div id="row-div-3" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/10.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/6.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/11.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/12.jpg" alt="" />
            </div>
          </div>
          <div id="row-div-4" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/1.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/2.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/3.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/4.jpg" alt="" />
            </div>
          </div>
          <div id="row-div-5" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/5.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/7.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/8.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/9.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="overlay-div">
          <h1>Layering and coating
          </h1>
          <div className="scroll-down">
            <h3>SCROLL DOWN</h3>
            <div className="scroll-p">
              <div className="scrolling"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="part-2">
      <div className="rounded-div-wrapper">
        <div className="rounded-div"></div>
      </div>
      <div className="content-2">
        <div className="text-area">
          <h1>Enhancing stability, release</h1>
          <br />
          <h2>and absorption.</h2>
        </div>
        <div className="text-area-hover">
          <h1>Enhancing stability, release</h1>
          <br />
          <h2>and absorption.</h2>
        </div>
      </div>
    </div>
    <div className="part-3">
      <div className="top-part-3">
        <h4>Layering and coating techniques improve product stability, control the release of active ingredients, mask undesirable tastes, and enhance bioavailability, ensuring effective and optimal therapeutic performance for various pharmaceutical applications.</h4>
        <div className="cta">
          <div className="cta-book">
            <div className="cta-txt">
              <h2>Know More</h2>
              <h2>Know More</h2>
            </div>
          </div>
          <div className="cta-book cta-book-2">
            <div className="cta-txt">
              <h2>View More</h2>
              <h2>View More</h2>
            </div>
          </div>
        </div>
      </div>
     
    <div className="part-4">
      <div className="lft-part-4">
        <h1>Coating Techniques
        </h1>
        <div className="cir-part-4">
          <img
            src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64b7d30aa9b24259d10be24d_symbol.svg"
            alt=""
          />
        </div>
      </div>
      <div className="rght-part-4">
        <div className="content-rght-part-4 c-one">
          <h1>Enhanced Stability & Controlled Release</h1>
          <p>
              Layering and coating techniques improve the stability of pharmaceutical products while controlling the release of active ingredients, ensuring consistent therapeutic effects over time.
          </p>
        </div>
        <div className="content-rght-part-4 c-two">
          <h1>Taste Masking & Bioavailability </h1>
          <p>
              These techniques help mask unpleasant tastes and enhance bioavailability, ensuring better absorption of the active ingredients, leading to improved drug efficacy.


          </p>
        </div>
        <div className="content-rght-part-4 c-three">
          <h1>Optimized Therapeutic Performance
          </h1>
          <p>
              By customizing release profiles and protecting sensitive compounds, layering and coating techniques contribute to optimal therapeutic performance, providing precise dosing for targeted treatment outcomes.
          </p>
        </div>
      </div>
      
    </div>
    <div className="part-5">
      <p>Innovative methods for enhanced performance.
      </p>
      <div className="text-area">
        <h1> Partner in Research</h1>
        <br />
        <h2>and Development </h2>
      </div>
      <div className="text-area-hover">
          <h1> Partner in Research</h1>
          <br />
          <h2>and Development </h2>
      </div>
    </div>
    
    <div className="part-7">
      <div className="our-work-txt">
        <h1 id="our">Our</h1>
        <h1 id="work">Work</h1>
      </div>
      <div className="our-work-txt-div">
        <div className="scroll-work">
          <div className="scroll-img">
            <img src="./Assets/Images/1.jpg" alt="" />
            <img src="./Assets/Images/2.jpg" alt="" />
            <img src="./Assets/Images/10.jpg" alt="" />
            <img src="./Assets/Images/11.jpg" alt="" />
            <img src="./Assets/Images/12.jpg" alt="" />
            <img src="./Assets/Images/13.jpg" alt="" />
            <img src="./Assets/Images/14.jpg" alt="" />
          </div>
        </div>
      </div>
      <button id="demo">Book a demo</button>
    </div>
  </div>

  </div>);
};

export default SmoothScrollAnimation;
