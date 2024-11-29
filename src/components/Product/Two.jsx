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
            Goa Nutritions upholds a legacy of dedication, professional
            integrity, and cutting-edge R&D in its quest for excellence. As a
            trusted name in the nutraceutical industry, our products have
            consistently delivered efficient and effective solutions across
            various health and wellness segments. We specialize in key areas
            such as Cardiovascular Health, Cognitive Support, Digestive
            Wellness, Diabetic Care, Immune Support, and Pain Management. Goa
            Nutritions has established itself as a leader in Cardiovascular and
            Cognitive Wellness, while also making significant strides in areas
            such as Bone Health, Oncology Support, Respiratory Care, Women’s
            Health, and Pediatric Nutrition. Over the years, our commitment to
            innovation and quality has kept us at the forefront of the industry,
            earning us the reputation as The Brand with the Most Innovative
            Nutritional Solutions.
          </p>
        </div>
      </div>
    </>
  );
}
