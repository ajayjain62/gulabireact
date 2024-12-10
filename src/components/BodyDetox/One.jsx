import React from "react";

export default function Component() {
  return (
    <>
      <section
        className="tp_CommonBgHeroLayout_section relative bg-common-hero-bg-color"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          position: "relative",
          fontFamily: "Lato, sans-serif",
        }}
      >
        <img
          className="w-full object-cover"
          src="src\assets\img\banner\detox.jpg"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            display: "block",
            verticalAlign: "middle",
            maxWidth: "100%",
            height: "auto",
            width: "100%",
            objectFit: "cover",
            letterSpacing: "0.02em",
            fontFamily: "Lato, sans-serif",
          }}
        />
        <div
          className="absolute z-10 top-0 bottom-0 left-0 right-0 flex min-h-[200px] h-full py-[15px] md:py-[60px] px-4 container mx-auto flex-col justify-center items-start gap-[10px] flex-shrink-0"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            width: "100%",
            maxWidth: "1140px",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "0px",
            top: "0px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            height: "100%",
            minHeight: "200px",
            flexShrink: 0,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "10px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            letterSpacing: "0.02em",
            paddingTop: "60px",
            paddingBottom: "60px",
            fontFamily: "Lato, sans-serif",
          }}
        >
          <div
            className="hero_content_section flex flex-col justify-end items-start md:gap-2"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              letterSpacing: "0.02em",
              gap: "0.5rem",
              fontFamily: "Lato, sans-serif",
            }}
          >
            {/* <p
              className="text-2xl leading-8 text-white"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                color: "rgb(255 255 255/1)",
                letterSpacing: "0.02em",
                fontFamily: "Lato, sans-serif",
              }}
            >
              Our Products
            </p> */}
            {/* <p
              className="text-[32px] tracking-[0.64px] md:text-[48px] md:leading-[57.6px] font-extrabold leading-9 md:tracking-[1.24px] capitalize text-[#FFF] w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                width: "100%",
                fontWeight: 800,
                textTransform: "capitalize",
                color: "rgb(255 255 255/1)",
                fontSize: "48px",
                lineHeight: "57.6px",
                letterSpacing: "1.24px",
                fontFamily: "Lato, sans-serif",
              }}
            >
              Extensive Presence Across Therapies
            </p> */}
            <div
              className="custom-hero-breadcrumbs w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                width: "100%",
                letterSpacing: "0.02em",
                fontFamily: "Lato, sans-serif",
              }}
            >
              <nav
                className="flex items-start gap-2 custom-text-white-70 text-[14px] tracking-[0.2ppx] md:text-[18px] font-medium leading-8 md:tracking-[0.36px] w-full"
                aria-label="Breadcrumb"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  width: "100%",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontWeight: 500,
                  lineHeight: "2rem",
                  fontSize: "18px",
                  letterSpacing: "0.36px",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <div
                  className="w-full whitespace-nowrap overflow-hidden text-ellipsis flex"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "flex",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.02em",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <span
                    className="inline-block"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "inline-block",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    {/* <span
                      className="overflow-hidden text-ellipsis max-w-[100px] xs:max-w-[150px] sm:max-w-none w-auto whitespace-nowrap inline-block"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "inline-block",
                        width: "auto",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        letterSpacing: "0.02em",
                        maxWidth: "none",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      Home
                    </span> */}
                  </span>
                  <span
                    className="inline-block mx-2"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.5rem",
                      marginRight: "0.5rem",
                      display: "inline-block",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    {/* <span
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      /
                    </span> */}
                  </span>
                  <span
                    className="inline-block"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "inline-block",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    {/* <span
                      className="overflow-hidden text-ellipsis max-w-[100px] xs:max-w-[150px] sm:max-w-none w-auto whitespace-nowrap inline-block"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "inline-block",
                        width: "auto",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        letterSpacing: "0.02em",
                        maxWidth: "none",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      Our Products
                    </span> */}
                  </span>
                  <span
                    className="inline-block mx-2"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.5rem",
                      marginRight: "0.5rem",
                      display: "inline-block",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    {/* <span
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      /
                    </span> */}
                  </span>
                  <span
                    className="inline-block"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "inline-block",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    {/* <span
                      className="overflow-hidden text-ellipsis max-w-[100px] xs:max-w-[150px] sm:max-w-none w-auto whitespace-nowrap inline-block"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "inline-block",
                        width: "auto",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        letterSpacing: "0.02em",
                        maxWidth: "none",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      Therapeutic Areas
                    </span> */}
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-common-hero-overlay z-[1]"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "0px",
            top: "0px",
            zIndex: 1,
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4) 41.02%, transparent 90.94%)",
            letterSpacing: "0.02em",
            fontFamily: "Lato, sans-serif",
          }}
        />
      </section>
     
    </>
  );
}
