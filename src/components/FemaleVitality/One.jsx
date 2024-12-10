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
          backgroundImage:
            "linear-gradient(129deg, rgb(54, 54, 120) 7.77%, rgb(15, 15, 65) 88.92%), linear-gradient(90deg, rgb(239, 239, 239), rgb(137, 137, 137))",
          letterSpacing: "0.02em",
          fontFamily: "Lato, sans-serif",
        }}
      >
        <img
          className="w-full object-cover"
          src="src\assets\img\product\femalevitality.jpg"
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
            zIndex: 10,
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
            fontFamily: "Lato, sans-serif",
          }}
        />
      </section>
     
    </>
  );
}
