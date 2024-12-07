import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="header-banner"
        style={{
          boxSizing: "border-box",
          outline: "none",
          position: "relative",
        }}
      >
        <div
          className="breadcrumb"
          style={{
            boxSizing: "border-box",
            outline: "none",
            listStyle: "none",
            padding: "15px",
            background: "rgba(0, 0, 0, 0.15)",
            margin: "15px",
            display: "none",
            borderRadius: "0px",
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            marginBottom: "15px",
          }}
        >
          <div
            id="breadcrumb"
            style={{ boxSizing: "border-box", outline: "none" }}
          >
            <div style={{ boxSizing: "border-box", outline: "none" }}>
              <nav
                aria-label="You are here:"
                aria-labelledby="system-breadcrumb"
                role="navigation"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  display: "block",
                }}
              >
                <h2
                  className="visually-hidden"
                  style={{
                    boxSizing: "border-box",
                    outline: "none",
                    fontFamily: "inherit",
                    color: "inherit",
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "38px",
                    fontWeight: 600,
                    lineHeight: "48px",
                    overflow: "hidden",
                    clip: "rect(1px, 1px, 1px, 1px)",
                    width: "1px",
                    height: "1px",
                    overflowWrap: "normal",
                    position: "absolute",
                  }}
                >
                  Breadcrumb
                </h2>
                <ul
                  className="breadcrumbs"
                  style={{
                    boxSizing: "border-box",
                    outline: "none",
                    padding: "0px",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    listStyleType: "none",
                  }}
                >
                  <li
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      display: "inline-block",
                      paddingRight: "30px",
                      position: "relative",
                    }}
                  >
                    <a
                      href="https://www.cipla.com/"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        fontWeight: 300,
                        opacity: 0.85,
                        outline: "none",
                        textDecoration: "none",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className="current-item"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      display: "inline-block",
                      position: "relative",
                      paddingRight: "0px",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    about us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <picture style={{ boxSizing: "border-box", outline: "none" }}>
          <source
            media="(max-width: 680px)"
            srcSet="https://i.postimg.cc/bY22bHgX/About-us-1-1.jpg"
            style={{ boxSizing: "border-box", outline: "none" }}
          />
          <source
            media="(min-width: 680px)"
            srcSet="src\assets\img\slider\Together towards a timeless purpose of caringfor life..jpg"
            style={{ boxSizing: "border-box", outline: "none" }}
          />
          <img
            className="img-responsive w-100"
            src="src\assets\img\slider\c a r e (1349 x 400 px) (2).jpg"
            style={{
              boxSizing: "border-box",
              outline: "none",
              borderStyle: "none",
              border: "0px",
              verticalAlign: "middle",
              display: "block",
              height: "auto",
              width: "100%",
              maxWidth: "100%",
            }}
          />
        </picture>
        <div
          className="bounce m-scroll"
          style={{
            boxSizing: "border-box",
            outline: "none",
            animation: "2s ease 0s infinite normal none running bounce",
            maxWidth: "60px",
            maxHeight: "60px",
            position: "absolute",
            display: "none",
            right: "50px",
            bottom: "20px",
          }}
        >
          <a
            href="/#"
            style={{
              boxSizing: "border-box",
              backgroundColor: "transparent",
              textDecoration: "none",
              color: "rgb(51, 122, 183)",
              outline: "none",
            }}
          >
            <img
              src="https://www.cipla.com/themes/cipla/images/m-scroll.png"
              style={{
                boxSizing: "border-box",
                outline: "none",
                borderStyle: "none",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </a>
        </div>
      </div>
     
    </>
  );
}
