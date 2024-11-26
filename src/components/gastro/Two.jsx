import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="py-6 md:py-8 xl:py-16 2xl:py-[80px] 3xl:py-[80px] px-4 container mx-auto"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          letterSpacing: "0.02em",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          fontFamily: "Lato, sans-serif",
        }}
      >
        <p
          className="text-lg md:text-2xl font-bold leading-[28.8px] mb-4 text-[#363678]"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            margin: "0px",
            marginBottom: "1rem",
            fontWeight: 700,
            color: "rgb(54 54 120/1)",
            letterSpacing: "0.02em",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            fontFamily: "Lato, sans-serif",
          }}
        >
          Therapeutic Areas
        </p>
        <div
          className="text-sm xl:text-base 2xl:text-lg font-normal leading-normal text-[#717170] mt-5 md:mt-8"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            fontWeight: 400,
            color: "rgb(113 113 112/1)",
            letterSpacing: "0.02em",
            marginTop: "2rem",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontFamily: "Lato, sans-serif",
          }}
        >
          <p
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              margin: "0px",
              letterSpacing: "0.02em",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Torrent Pharmaceuticals follows the tradition of Dedication,
            Professional Integrity and Robust R&D in the pursuit of excellence.
            With leading brands in various therapeutic segments, our products
            have proved to be efficient and effective in areas of
            Cardiovascular, CNS, Gastro-Intestinal, Diabetology, Anti-Infective,
            VMN and Pain Management solutions. Torrent Pharma is a leading
            player in the areas of Cardiovascular (CV) and Central Nervous
            Systems (CNS), having achieved significant presence in segments of
            Nephrology, Oncology, Pulmonology, Gynecology and Pediatric
            treatments. Torrent Pharma, over four generations has followed the
            value systems and remained ahead of its competition earning the
            sobriquet of The Company With The Most First Launches.
          </p>
        </div>
      </div>
    
    </>
  );
}
