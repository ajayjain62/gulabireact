import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./fanta.css"
function Six() {
  useEffect(() => {
    // Register ScrollTrigger with gsap
    gsap.registerPlugin(ScrollTrigger);

    // Timeline 1
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
      },
    });

    tl.to(
      "#fanta",
      {
        top: "120%",
        left: "0%",
        scale: 1.2,
        rotate: "45deg",
        skewX: "10deg",
        ease: "power4.inOut",
      },
      "orange"
    )
      .to(
        "#orange-cut",
        {
          top: "160%",
          left: "23%",
          scale: 1.5,
          rotate: "360deg",
          ease: "back.out(1.7)",
        },
        "orange"
      )
      .to(
        "#orange",
        {
          width: "15%",
          top: "160%",
          right: "10%",
          scale: 1.3,
          opacity: 0.8,
          ease: "elastic.out(1, 0.3)",
        },
        "orange"
      )
      .to(
        "#leaf",
        {
          top: "110%",
          rotate: "130deg",
          left: "70%",
          scale: 1.2,
          ease: "bounce.out",
        },
        "orange"
      )
      .to(
        "#leaf2",
        {
          top: "110%",
          rotate: "130deg",
          left: "0%",
          scale: 1.2,
          ease: "bounce.out",
        },
        "orange"
      );

    // Timeline 2
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
      },
    });

    tl2
      .from(
        ".lemon1",
        {
          rotate: "-90deg",
          left: "-100%",
          top: "110%",
          scale: 0.8,
          opacity: 0,
          ease: "power2.out",
        },
        "ca"
      )
      .from(
        "#cocacola",
        {
          rotate: "-90deg",
          top: "110%",
          left: "-100%",
          scale: 0.8,
          opacity: 0,
          ease: "power2.out",
        },
        "ca"
      )
      .from(
        ".lemon2",
        {
          rotate: "90deg",
          left: "100%",
          top: "110%",
          scale: 0.8,
          opacity: 0,
          ease: "power2.out",
        },
        "ca"
      )
      .from(
        "#pepsi",
        {
          rotate: "90deg",
          top: "110%",
          left: "100%",
          scale: 0.8,
          opacity: 0,
          ease: "power2.out",
        },
        "ca"
      )
      .to(
        "#orange-cut",
        {
          width: "18%",
          left: "42%",
          top: "204%",
          rotate: "360deg",
          skewY: "15deg",
          scale: 1.3,
          ease: "power3.inOut",
        },
        "ca"
      )
      .to(
        "#fanta",
        {
          width: "35%",
          top: "210%",
          left: "33%",
          scale: 1.5,
          rotate: "-45deg",
          ease: "power3.inOut",
        },
        "ca"
      )
      .to("#orange", {
        width: "35%",
        top: "210%",
        left: "33%",
        scale: 1.5,
        rotate: "-45deg",
        ease: "power3.inOut",
      });
  }, []);

  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="fanta.css" />
        <title>FANTA</title>
        <div id="main">
          <div className="one">
            <h1>FANTA</h1>
            <img id="orange-cut" src="Assets/orange2.png" alt="" />
            <img id="fanta" src="Assets/fanta.png" alt="" />
            <img id="orange" src="Assets/orange.webp" alt="" />
            <img id="leaf" src="Assets/leaf.webp" alt="" />
            <img id="leaf2" src="Assets/leaf2.png" alt="" />
            <img id="leaf3" src="Assets/coconoutleaf.png" alt="" />
          </div>
          <div className="two">
            <div className="lft-two">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#e04428"
                  d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="rght-two">
              <h1>Flavour Updated</h1>
              <p>
                Embrace the invigorating twist of our revamped orange flavor.
                Delight in its rejuvenated tang and succulent sweetness,
                crafting an irresistible symphony of citrusy goodness. Our
                reimagined orange offers a thrilling burst of refreshment,
                elevating your every sip to new heights of satisfaction.
              </p>
            </div>
          </div>
          <div className="three">
            <div className="card">
              <img className="lemon lemon1" src="Assets/lemon.webp" alt="" />
              <img id="cocacola" src="Assets/cocacola.png" alt="" />
              <h1>CocaCola</h1>
              <button>Buy Now</button>
            </div>
            <div className="card">
              <h1>Fanta</h1>
              <button>Buy Now</button>
            </div>
            <div className="card">
              <img className="lemon lemon2" src="Assets/lemon.webp" alt="" />
              <img id="pepsi" src="Assets/pepsi.png" alt="" />
              <h1>Pepsi</h1>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Six;
