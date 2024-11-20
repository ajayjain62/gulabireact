import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="header-subsection clearfix"
        style={{
          boxSizing: "border-box",
          outline: "none",
          margin: "0px auto",
          maxWidth: "1170px",
          paddingBottom: "30px",
        }}
      >
        <div
          className="col-md-7"
          style={{
            boxSizing: "border-box",
            outline: "none",
            position: "relative",
            minHeight: "1px",
            paddingRight: "15px",
            paddingLeft: "15px",
            cssFloat: "left",
            width: "58.3333%",
          }}
        >
          <div
            className="header-subsection-left aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              outline: "none",
              background: "rgb(255, 255, 255)",
              padding: "53px 70px 54px 55px",
              marginTop: "-70px",
              boxShadow: "rgba(0, 0, 0, 0.75) 2px 3px 20px -7px",
              transitionProperty: "transform, opacity",
              opacity: 1,
              transform: "translateY(0px)",
              transitionTimingFunction: "ease",
              transitionDuration: "0.5s",
              transitionDelay: "0.7s",
            }}
          >
            <h1
              className="page-title"
              style={{
                boxSizing: "border-box",
                outline: "none",
                margin: "0.67em 0px",
                lineHeight: 1.1,
                color: "inherit",
                fontSize: "44px",
                marginTop: "0px",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                marginBottom: "20px",
              }}
            >
              <span
                property="schema:name"
                style={{ boxSizing: "border-box", outline: "none" }}
              >
                About Us
              </span>
            </h1>
            <div
              className="clearfix page-subtitle"
              style={{
                boxSizing: "border-box",
                outline: "none",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgb(27, 48, 59)",
              }}
            >
              <p
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  margin: "0px 0px 10px",
                  fontWeight: 300,
                  lineHeight: "24px",
                }}
              >
                <span style={{ boxSizing: "border-box", outline: "none" }}>
                  <span style={{ boxSizing: "border-box", outline: "none" }}>
                    <span style={{ boxSizing: "border-box", outline: "none" }}>
                      At Cipla, we constantly work towards ensuring access to
                      high quality and affordable medicines to support patients
                      in need. Which is why, we have been trusted by health care
                      professionals and patients across geographies for the last
                      8 decades.
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
