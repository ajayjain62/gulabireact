import React from "react";

export default function Component() {
  return (
    <section
      className="row the-watch"
      style={{
        boxSizing: "border-box",
        display: "block",
        padding: "102px 0 94px",
        background: "rgb(248, 251, 253)",
        margin: "0",
        fontFamily: "poppins, sans-serif",
      }}
    >
      <div
        className="container"
        style={{
          boxSizing: "border-box",
          margin: "0 auto",
          paddingLeft: "15px",
          paddingRight: "15px",
          width: "1170px",
        }}
      >
        <div
          className="row"
          style={{
            boxSizing: "border-box",
            margin: "0 -15px",
          }}
        >
          <div
            className="col-md-5 col-md-offset-1 text-center the-watch-img wow zoomIn"
            style={{
              boxSizing: "border-box",
              textAlign: "center",
              position: "relative",
              minHeight: "1px",
              paddingLeft: "15px",
              paddingRight: "15px",
              width: "41.6667%",
              marginLeft: "8.33333%",
              float: "right",
              visibility: "visible",
              animationName: "zoomIn",
            }}
          >
            <img
              className="img-responsive"
              src="https://demo.web3canvas.com/themeforest/proland/images/the-watch.png"
              alt="The Watch"
              style={{
                boxSizing: "border-box",
                border: "0",
                verticalAlign: "middle",
                display: "block",
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto",
              }}
            />
          </div>
          <div className="col-md-6">
            <ul
              className="nav"
              style={{
                boxSizing: "border-box",
                margin: "0",
                listStyle: "none",
                padding: "0",
                fontFamily: "poppins, sans-serif",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <li
                className="wow fadeIn"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  font: "300 20px / 32px Poppins, sans-serif",
                  color: "rgb(105, 111, 116)",
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeIn",
                }}
              >
                Compatible with all devices
              </li>
              <li
                className="wow fadeIn"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  font: "300 20px / 32px Poppins, sans-serif",
                  color: "rgb(105, 111, 116)",
                  marginTop: "22px",
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeIn",
                }}
              >
                Android and iOS Support
              </li>
              <li
                className="wow fadeIn"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  font: "300 20px / 32px Poppins, sans-serif",
                  color: "rgb(105, 111, 116)",
                  marginTop: "22px",
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeIn",
                }}
              >
                Activity & Health Tracker
              </li>
              <li
                className="wow fadeIn"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  font: "300 20px / 32px Poppins, sans-serif",
                  color: "rgb(105, 111, 116)",
                  marginTop: "22px",
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeIn",
                }}
              >
                Read & reply to messages
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
