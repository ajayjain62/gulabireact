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
          src="src\assets\img\product\hair fall (1).jpg"
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
        <div />
      </section>
    </>
  );
}
