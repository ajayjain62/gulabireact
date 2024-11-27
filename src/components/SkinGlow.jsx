import React from "react";
import SkinGlowProducts from "./SkinGlowProd";

export default function Component() {
  return (
    <>
      <div
        className="hl-grid mb-6 lg:mb-14 lg:items-end"
        style={{
          border: "0px solid currentcolor",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0px, 1fr))",
          columnGap: "1rem",
          paddingTop: "3.5rem",
          paddingLeft: "6.67%",
          paddingRight: "6.67%",
          marginBottom: "3.5rem",
          alignItems: "flex-end",
        }}
      >
        <div
          className="col-span-12 lg:col-span-4"
          style={{
            border: "0px solid currentcolor",
            boxSizing: "border-box",
            gridColumn: "span 4 / span 4",
          }}
        >
          <h1
            className="h1 mb-6 md:mb-4 lg:mb-0 break-keep sm:text-[2.375rem] md:text-[2.375rem] lg:text-[4.25rem]"
            style={{
              border: "0px solid currentcolor",
              boxSizing: "border-box",
              margin: "0px",
              fontWeight: 700,
              lineHeight: 1.2,
              fontStyle: "normal",
              fontFamily: "HerbalifeNatural-Bold, sans-serif",
              color: "rgb(34, 73, 69)",
              overflowWrap: "break-word",
              wordBreak: "keep-all",
              letterSpacing: "-2.04px",
              marginBottom: "0px",
              fontSize: "4.25rem",
            }}
          >
            Skin Glow
          </h1>
        </div>
        <div
          className="body-lg text-gray-regular col-span-12 lg:col-span-8"
          style={{
            border: "0px solid currentcolor",
            boxSizing: "border-box",
            fontSize: "1.125rem",
            fontWeight: 400,
            fontFamily: "Herbalife-Walsheim-GT-Regular, sans-serif",
            lineHeight: 1.5,
            fontStyle: "normal",
            WebkitTextFillColor: "rgb(116, 115, 110)",
            color: "rgba(116,115,110,1)",
            gridColumn: "span 8 / span 8",
          }}
        >
          <p
            style={{
              border: "0px solid currentcolor",
              boxSizing: "border-box",
              margin: "0px",
            }}
          >
            Achieve radiant, healthy skin with targeted nutrients and hydration.
            Boost collagen, fight oxidative stress, and enhance your glow
            naturally for a youthful, vibrant complexion.
          </p>
        </div>
      </div>
      <SkinGlowProducts />
    </>
  );
}
