import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="row full-width-container credo"
        style={{
          boxSizing: "border-box",
          outline: "none",
          padding: "100px 0px 0px",
          margin: "30px 0px",
          position: "relative",
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            outline: "none",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
            width: "1170px",
          }}
        >
          <div
            className="col-md-6"
            style={{
              boxSizing: "border-box",
              outline: "none",
              position: "relative",
              minHeight: "1px",
              paddingRight: "15px",
              paddingLeft: "15px",
              cssFloat: "left",
              width: "50%",
            }}
          >
            <div
              className="image-section blog-image"
              style={{
                boxSizing: "border-box",
                outline: "none",
                position: "relative",
                padding: "0px",
              }}
            >
              <div
                className="dropdown-bg aos-init aos-animate"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  transitionProperty: "width",
                  position: "absolute",
                  height: "675px",
                  width: "100%",
                  top: "0px",
                  transitionTimingFunction: "ease",
                  transitionDuration: "1s",
                  display: "none",
                  transitionDelay: "0.5s",
                }}
              />
              <div
                className="image-section-wrap"
                style={{ boxSizing: "border-box", outline: "none" }}
              >
                <a
                  href="https://www.cipla.com/about-us"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    color: "rgb(51, 122, 183)",
                    outline: "none",
                  }}
                >
                  <picture style={{ boxSizing: "border-box", outline: "none" }}>
                    <source
                      media="(min-width: 680px)"
                      srcSet="https://www.cipla.com/sites/default/files/2021-08/About-Credo.webp"
                      style={{ boxSizing: "border-box", outline: "none" }}
                    />
                    <source
                      media="(max-width: 680px)"
                      srcSet="https://www.cipla.com/sites/default/files/2021-08/About-Credo.webp"
                      style={{ boxSizing: "border-box", outline: "none" }}
                    />
                    <img
                      className="img-responsive full-width"
                      alt="About-Credo"
                      src="https://www.cipla.com/sites/default/files/2021-08/About-Credo.webp"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        borderStyle: "none",
                        border: "0px",
                        verticalAlign: "middle",
                        display: "block",
                        height: "auto",
                        width: "100%",
                        maxWidth: "460px",
                        boxShadow: "rgba(0, 0, 0, 0.75) 2px 3px 20px -7px",
                      }}
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div
              className="editor-content-section custom-article-editor"
              style={{
                boxSizing: "border-box",
                outline: "none",
                maxWidth: "460px",
                marginBottom: "0px",
              }}
            >
              <h4
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  fontFamily: "inherit",
                  fontWeight: 500,
                  color: "inherit",
                  marginBottom: "10px",
                  fontSize: "22px",
                  lineHeight: "32px",
                  marginTop: "22px",
                }}
              >
                "Our work is not just making medicines. It is about making a
                difference."
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  margin: "0px 0px 10px",
                  marginBottom: "20px",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "26px",
                  color: "rgb(26, 25, 25)",
                }}
              >
                Dr. Y K Hamied | Chairman Cipla
              </p>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              boxSizing: "border-box",
              outline: "none",
              position: "relative",
              minHeight: "1px",
              paddingRight: "15px",
              paddingLeft: "15px",
              cssFloat: "left",
              width: "50%",
            }}
          >
            <div
              className="editor-content-section custom-article-editor"
              style={{
                boxSizing: "border-box",
                outline: "none",
                marginBottom: "0px",
              }}
            >
              <div
                className="credo-block-right"
                style={{ boxSizing: "border-box", outline: "none" }}
              >
                <div
                  className="credo-head"
                  style={{ boxSizing: "border-box", outline: "none" }}
                >
                  <h2
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      fontFamily: "inherit",
                      marginTop: "20px",
                      marginBottom: "10px",
                      fontWeight: 600,
                      lineHeight: "48px",
                      fontSize: "44px",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Credo
                  </h2>
                  <p
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      margin: "0px 0px 10px",
                      marginBottom: "20px",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: "24px",
                      maxWidth: "450px",
                    }}
                  >
                    Our core values guide every conversation, organisational
                    decision and anchor the actions of our employees.
                    <br style={{ boxSizing: "border-box", outline: "none" }} />
                    {
                      "We consistently revisit them and recalibrate strategies to stay ever-relevant to our stakeholders."
                    }
                  </p>
                  <a
                    className="btn-rounded"
                    href="https://www.cipla.com/about-us/onecipla-credo"
                    style={{
                      boxSizing: "border-box",
                      background:
                        'url("https://www.cipla.com/themes/cipla/images/read-more-arrow.svg") 88% center / 12px no-repeat rgb(0, 90, 165)',
                      borderRadius: "42px",
                      padding: "18px 25px",
                      transition: "0.34s",
                      backgroundColor: "rgb(0, 90, 165)",
                      fontSize: "14px",
                      width: "200px",
                      height: "55px",
                      display: "block",
                      textAlign: "left",
                      textTransform: "capitalize",
                      marginTop: "50px",
                      boxShadow: "rgb(2, 39, 59) 0px 5px 20px -11px",
                      cursor: "pointer",
                      outline: "none",
                      border: "none",
                      textDecoration: "none",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Read More
                  </a>
                  <div style={{ boxSizing: "border-box", outline: "none" }}>
                    <div
                      className="credo-list"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        padding: "95px 0px 20px",
                        borderBottom: "1px solid rgb(242, 242, 242)",
                      }}
                    >
                      <h5
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          fontFamily: "inherit",
                          fontWeight: 500,
                          lineHeight: 1.1,
                          color: "inherit",
                          marginTop: "10px",
                          marginBottom: "10px",
                          fontSize: "14px",
                        }}
                      >
                        We are a
                      </h5>
                      <div
                        className="credo-text-wrapper"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          display: "flex",
                        }}
                      >
                        <ul
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginTop: "0px",
                            marginBottom: "10px",
                            width: "50%",
                            paddingLeft: "0px",
                            borderRight: "1px solid rgb(242, 242, 242)",
                          }}
                        >
                          <li
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              listStyle: "none",
                              margin: "10px 0px",
                              paddingLeft: "40px",
                              position: "relative",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              paddingBottom: "0px",
                            }}
                          >
                            Purpose - Inspired
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              listStyle: "none",
                              margin: "10px 0px",
                              paddingLeft: "40px",
                              position: "relative",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              paddingBottom: "0px",
                            }}
                          >
                            Responsibility - Centered
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              listStyle: "none",
                              margin: "10px 0px",
                              paddingLeft: "40px",
                              position: "relative",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              paddingBottom: "0px",
                            }}
                          >
                            Innovation - Driven
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              listStyle: "none",
                              margin: "10px 0px",
                              paddingLeft: "40px",
                              position: "relative",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              paddingBottom: "0px",
                            }}
                          >
                            Integrity & Trust - Anchored
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              listStyle: "none",
                              margin: "10px 0px",
                              paddingLeft: "40px",
                              position: "relative",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              paddingBottom: "0px",
                            }}
                          >
                            Excellence - Focused
                          </li>
                        </ul>
                        <div
                          className="credo-text"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            lineHeight: "24px",
                            width: "50%",
                            paddingTop: "20px",
                            paddingLeft: "30px",
                          }}
                        >
                          global pharmaceutical firm that consistently Cares for
                          Life and delivers on its commitment to all our
                          stakeholders- patients, regulators, customers,
                          partners, employees, investors and community.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
