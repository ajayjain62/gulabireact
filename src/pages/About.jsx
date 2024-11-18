import React from "react";
import { Link } from 'react-router-dom';

export default function Component() {
  return (
    <>
      {/* About Section */}
      <section
        className="about-section pt-80 pb-50"
        style={{
          boxSizing: "border-box",
          paddingTop: "80px",
          paddingBottom: "50px",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "calc(1.5rem * .5)",
            paddingLeft: "calc(1.5rem * .5)",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1320px",
          }}
        >
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginRight: "calc(-.5 * 1.5rem)",
              marginLeft: "calc(-.5 * 1.5rem)",
            }}
          >
            <div
              className="col-12 col-xl-11 mx-auto mb-30"
              style={{
                boxSizing: "border-box",
                width: "91.6667%",
                marginBottom: "30px",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <div
                className="about-content text-center"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                <div
                  className="about-left-image mb-30"
                  style={{ marginBottom: "30px" }}
                >
                  <img
                    className="img-responsive"
                    alt="img"
                    src="http://127.0.0.1:5500/assets/img/blog-post/5.webp"
                    style={{
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      transition: "0.3s",
                    }}
                  />
                </div>
                <h2
                  className="title mb-30"
                  style={{
                    fontFamily: "Raleway",
                    color: "rgb(17, 17, 17)",
                    fontSize: "30px",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    maxWidth: "900px",
                    margin: "0px auto 20px",
                  }}
                >
                  Crafting Elegance with Every Thread.
                </h2>
                <p
                  className="mb-30"
                  style={{
                    lineHeight: 1.715,
                    marginBottom: "30px",
                  }}
                >
                  At Gulabi Decor, we specialize in creating premium home furnishings that blend timeless craftsmanship with modern aesthetics. From exquisite bedsheets to elegant home decor, our products reflect a commitment to superior materials and meticulous attention to detail.
                </p>
                <img
                  src="http://127.0.0.1:5500/assets/img/blog-post/signature.png"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    transition: "0.3s",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section
        className="service-section pt-80 pb-50"
        style={{
          boxSizing: "border-box",
          paddingTop: "80px",
          paddingBottom: "50px",
        }}
      >
        <div className="container" style={{ maxWidth: "1320px", margin: "auto" }}>
          <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            {/* Service Item 1 */}
            <div className="col-sm-6 col-lg-4 mb-4" style={{ width: "33.3333%" }}>
              <div className="single-blog">
                <div className="single-thumb mb-25 zoom-in d-block overflow-hidden">
                  <img
                    alt="single-thumb-naile"
                    src="http://127.0.0.1:5500/assets/img/service/1.webp"
                    style={{ width: "100%", transition: "0.3s linear" }}
                  />
                </div>
                <div className="single-service">
                  <h3 className="title text-capitalize mb-20" style={{ fontSize: "22px" }}>
                    What do we do?
                  </h3>
                  <p>
                    We create premium home furnishings like bedsheets, cushion covers, and more, blending craftsmanship with modern design.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="col-sm-6 col-lg-4 mb-4" style={{ width: "33.3333%" }}>
              <div className="single-blog">
                <div className="single-thumb mb-20 zoom-in d-block overflow-hidden">
                  <img
                    alt="single-thumb-naile"
                    src="http://127.0.0.1:5500/assets/img/service/2.webp"
                    style={{ width: "100%", transition: "0.3s linear" }}
                  />
                </div>
                <div className="single-service">
                  <h3 className="title text-capitalize mb-20" style={{ fontSize: "22px" }}>
                    Our Mission
                  </h3>
                  <p>
                    Our mission is to enhance homes with beautifully crafted furnishings that blend tradition with contemporary design.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="col-sm-6 col-lg-4 mb-4" style={{ width: "33.3333%" }}>
              <div className="single-blog">
                <div className="single-thumb mb-20 zoom-in d-block overflow-hidden">
                  <img
                    alt="single-thumb-naile"
                    src="http://127.0.0.1:5500/assets/img/service/3.webp"
                    style={{ width: "100%", transition: "0.3s linear" }}
                  />
                </div>
                <div className="single-service">
                  <h3 className="title text-capitalize mb-20" style={{ fontSize: "22px" }}>
                    Our Vision
                  </h3>
                  <p>
                    To become a global leader in quality home furnishings, valued for our craftsmanship, quality, and design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
