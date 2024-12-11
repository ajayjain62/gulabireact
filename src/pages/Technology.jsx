import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "./Technology.css"; // Assuming you have a CSS file for styling.

function Technology() {
  useEffect(() => {
    // Register GSAP plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Timeline 1
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-1",
        start: "50% 50%",
        end: "250% 50%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".rotate-div", { rotate: -15, scale: 0.8 }, "a")
      .to("#row-div-2", { marginTop: "5%" }, "a")
      .to("#row-div-3", { marginTop: "-2%" }, "a")
      .to("#row-div-4", { marginTop: "-8%" }, "a")
      .to("#row-div-5", { marginTop: "-10%" }, "a")
      .to(".overlay-div h1", { opacity: "1", delay: 0.2 }, "a")
      .to(".overlay-div", { backgroundColor: "#000000b4" }, "a")
      .to(".scrolling", { width: "100%" }, "a");

    // Timeline 2
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-2",
        start: "0% 70%",
        end: "50% 50%",
        scrub: true,
      },
    });

    tl2.to(".rounded-div-wrapper", { height: 0, marginTop: 0 });

    // Timeline 3
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-2",
        start: "20% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    });

    tl3
      .to(".content-2 .text-area-hover h1", { width: "100%" })
      .to(".content-2 .text-area-hover h2", { delay: -0.4, width: "100%" });

    // Timeline 4
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-4",
        start: "50% 50%",
        end: "200% 50%",
        pin: true,
        scrub: 1,
      },
    });

    tl4
      .to(".c-one", { marginTop: "-25%", opacity: "1" }, "sct-1")
      .to(".c-two", { opacity: "1" }, "sct-2")
      .to(".c-one", { marginTop: "-100", opacity: "0" }, "sct-2")
      .to(".c-three", { opacity: "1" }, "sct-3")
      .to(".c-two", { opacity: "0" }, "sct-3")
      .to(".c-one", { marginTop: "-180%" }, "sct-3")
      .to(".c-one", { marginTop: "-230%" }, "sct-4")
      .to(".c-three", { opacity: "0" }, "sct-4")
      .to(".cir-part-4", { marginLeft: "100%", rotate: 360 }, "sct-4");

    // Timeline 5
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-5",
        start: "20% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    });

    tl5
      .to(".part-5 .text-area-hover h1", { width: "100%" })
      .to(".part-5 .text-area-hover h2", { delay: -0.4, width: "100%" });

    // Timeline 6
    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-6",
        start: "0% 70%",
        end: "15% 50%",
        scrub: 1,
      },
    });

    tl6.to(".rounded-div-wrapper-6", { height: "0%", marginTop: 0 });

    // Timeline 7
    const tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-7",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        scrub: 1,
      },
    });

    tl7
      .to("#demo", { bottom: "7%" })
      .to(".our-work-txt-div", { height: "60vh" }, "height")
      .to(".our-work-txt", { height: "60vh" }, "height")
      .to("#our", { left: "0%" }, "height")
      .to("#work", { right: "0%" }, "height")
      .to(".scroll-img", { marginTop: "-300%" });

    return () => {
      // Clean up ScrollTriggers on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Gravity Coding</title>
      <div id="main">
        <nav>
          <div className="lft-nav">
            <h1 id="logo">Brandbeet</h1>
            <h1>Brandbeet</h1>
          </div>
          <div className="rght-nav">
            <h2 id="nav-contact">contact@gravitycoding.com</h2>
            <h2>contact@gravitycoding.com</h2>
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
              <h1>Brandbeet</h1>
              <div className="scroll-down">
                <h3>SCROLL DOWN</h3>
                <div className="scroll-p">
                  <div className="scrolling" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="part-2">
          <div className="rounded-div-wrapper">
            <div className="rounded-div" />
          </div>
          <div className="content-2">
            <div className="text-area">
              <h1>Strategic design solutions</h1> <br />{" "}
              <h2>that fuel your bottom line.</h2>
            </div>
            <div className="text-area-hover">
              <h1>Strategic design solutions</h1> <br />{" "}
              <h2>that fuel your bottom line.</h2>
            </div>
          </div>
        </div>
        <div className="part-3">
          <div className="top-part-3">
            <h4>Unlock profit with monthly design sprints.</h4>
            <div className="cta">
              <div className="cta-book">
                <div className="cta-txt">
                  <h2>Book a demo</h2>
                  <h2>Book a demo</h2>
                </div>
              </div>
              <div className="cta-book cta-book-2">
                <div className="cta-txt">
                  <h2>View Pricing</h2>
                  <h2>View Pricing</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="btm-part-3">
            <img src="./Assets/Images/apple.svg" alt="" />
            <img src="./Assets/Images/dell.svg" alt="" />
            <img src="./Assets/Images/hp.svg" alt="" />
            <img src="./Assets/Images/ibm.svg" alt="" />
            <img src="./Assets/Images/orbal.svg" alt="" />
          </div>
        </div>
        <div className="part-4">
          <div className="lft-part-4">
            <h1>Expected Outcomes</h1>
            <div className="cir-part-4">
              <img
                src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64b7d30aa9b24259d10be24d_symbol.svg"
                alt=""
              />
            </div>
          </div>
          <div className="rght-part-4">
            <div className="content-rght-part-4 c-one">
              <h1>Growth and ROI</h1>
              <p>
                Expect a team that looks at problems holistically. A team that
                designs solutions directly contributing to your revenue growth
                and business success - not just pretty pictures.
              </p>
            </div>
            <div className="content-rght-part-4 c-two">
              <h1>Growth and ROI</h1>
              <p>
                Expect a team that looks at problems holistically. A team that
                designs solutions directly contributing to your revenue growth
                and business success - not just pretty pictures.
              </p>
            </div>
            <div className="content-rght-part-4 c-three">
              <h1>Growth and ROI</h1>
              <p>
                Expect a team that looks at problems holistically. A team that
                designs solutions directly contributing to your revenue growth
                and business success - not just pretty pictures.
              </p>
            </div>
          </div>
        </div>
        <div className="part-5">
          <p>In summary..</p>
          <div className="text-area">
            <h1>A dedicated team at</h1> <br /> <h2>your disposal.</h2>
          </div>
          <div className="text-area-hover">
            <h1>A dedicated team at</h1> <br /> <h2>your disposal.</h2>
          </div>
        </div>
        <div className="part-6">
          <div className="rounded-div-wrapper-6">
            <div className="rounded-div-6" />
          </div>
          <div className="brand-part-6">
            <div className="top-brand-part-6">
              <div className="lft-top-6">
                <h1>Brand</h1>
              </div>
              <div className="rght-top-6">
                <button>View Pricing</button>
              </div>
            </div>
            <div className="btm-brand-part-6">
              <div className="lft-btm-6" />
              <div className="rght-btm-6">
                <h2>1-2 months average / 8 design sprints</h2>
                <div className="content-rght-btm-6">
                  <p>
                    Logo design <br />
                    Visual Identity <br />
                    Collateral
                    <br />
                    Brand Guidelines
                    <br />
                    Animation
                    <br />
                    Naming
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-part-6">
            <div className="top-brand-part-6">
              <div className="lft-top-6">
                <h1>Brand</h1>
              </div>
              <div className="rght-top-6">
                <button>View Pricing</button>
              </div>
            </div>
            <div className="btm-brand-part-6">
              <div className="lft-btm-6" />
              <div className="rght-btm-6">
                <h2>1-2 months average / 8 design sprints</h2>
                <div className="content-rght-btm-6">
                  <p>
                    Logo design <br />
                    Visual Identity <br />
                    Collateral
                    <br />
                    Brand Guidelines
                    <br />
                    Animation
                    <br />
                    Naming
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-part-6">
            <div className="top-brand-part-6">
              <div className="lft-top-6">
                <h1>Brand</h1>
              </div>
              <div className="rght-top-6">
                <button>View Pricing</button>
              </div>
            </div>
            <div className="btm-brand-part-6">
              <div className="lft-btm-6" />
              <div className="rght-btm-6">
                <h2>1-2 months average / 8 design sprints</h2>
                <div className="content-rght-btm-6">
                  <p>
                    Logo design <br />
                    Visual Identity <br />
                    Collateral
                    <br />
                    Brand Guidelines
                    <br />
                    Animation
                    <br />
                    Naming
                  </p>
                </div>
              </div>
            </div>
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
    </>
  );
}

export default Technology;
