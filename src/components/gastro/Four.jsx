import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="my-6 md:mt-20 md:mb-[52px] h-auto pb-4 md:pb-0 md:h-32 small_banner"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          letterSpacing: "0.02em",
          marginBottom: "52px",
          marginTop: "5rem",
          height: "8rem",
          paddingBottom: "0px",
          background:
            'url("https://www.torrentpharma.com/_next/static/media/horiontal_colored_small_bg.18e8f514.png") 50% center / cover no-repeat',
          fontFamily: "Lato, sans-serif",
        }}
      >
        <div
          className="h-full w-full flex flex-wrap justify-between items-center gap-2 px-4 container mx-auto"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            maxWidth: "1140px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            height: "100%",
            width: "100%",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            letterSpacing: "0.02em",
            fontFamily: "Lato, sans-serif",
          }}
        >
          <p
            className="text-xl md:text-[32px] font-bold leading-[42px] text-white"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              margin: "0px",
              fontWeight: 700,
              lineHeight: "42px",
              color: "rgb(255 255 255/1)",
              letterSpacing: "0.02em",
              fontSize: "32px",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Gastro Intestinal
          </p>
          <div
            className="h-11 w-[320px] rounded-xl border border-[#FFFFFFB2] px-4 flex items-center justify-start gap-2 search_input search_box"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              background: "transparent",
              fontSize: "16px",
              display: "flex",
              height: "2.75rem",
              width: "320px",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.5rem",
              borderRadius: "0.75rem",
              borderWidth: "1px",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              letterSpacing: "0.02em",
              fontFamily: "Lato, sans-serif",
              outline: "none",
            }}
          >
            <svg
              height="24"
              width="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "block",
                verticalAlign: "middle",
                letterSpacing: "0.02em",
                fontFamily: "Lato, sans-serif",
              }}
            >
              <path
                d="M15.7559 14.2549H14.9659L14.6859 13.9849C15.6659 12.8449 16.2559 11.3649 16.2559 9.75488C16.2559 6.16488 13.3459 3.25488 9.75586 3.25488C6.16586 3.25488 3.25586 6.16488 3.25586 9.75488C3.25586 13.3449 6.16586 16.2549 9.75586 16.2549C11.3659 16.2549 12.8459 15.6649 13.9859 14.6849L14.2559 14.9649V15.7549L19.2559 20.7449L20.7459 19.2549L15.7559 14.2549ZM9.75586 14.2549C7.26586 14.2549 5.25586 12.2449 5.25586 9.75488C5.25586 7.26488 7.26586 5.25488 9.75586 5.25488C12.2459 5.25488 14.2559 7.26488 14.2559 9.75488C14.2559 12.2449 12.2459 14.2549 9.75586 14.2549Z"
                fill="#FFFFFF"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  letterSpacing: "0.02em",
                  fontFamily: "Lato, sans-serif",
                }}
              />
            </svg>
            <input
              className="w-full"
              placeholder="Search Brand, Drug, Dosage"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "0px",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                fontSize: "100%",
                fontWeight: "inherit",
                lineHeight: "inherit",
                width: "100%",
                letterSpacing: "0.02em",
                fontFamily: "Lato, sans-serif",
                color: "rgb(255, 255, 255)",
                border: "none",
                outline: "none",
                background: "transparent",
              }}
            />
          </div>
        </div>
      </div>
    
    </>
  );
}
