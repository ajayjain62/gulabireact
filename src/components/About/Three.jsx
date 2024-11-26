import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="row full-width-container"
        style={{
          boxSizing: "border-box",
          outline: "none",
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        <div style={{ boxSizing: "border-box", outline: "none" }}>
          <div
            className="editor-content-section custom-article-editor container"
            style={{
              boxSizing: "border-box",
              outline: "none",
              paddingRight: "15px",
              paddingLeft: "15px",
              marginRight: "auto",
              marginLeft: "auto",
              width: "1170px",
              marginBottom: "0px",
            }}
          >
            <p
              style={{
                boxSizing: "border-box",
                outline: "none",
                margin: "0px 0px 10px",
                marginBottom: "20px",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "26px",
                color: "rgb(26, 25, 25)",
              }}
            >
              Goa Nutritions, a certified nutraceutical manufacturer with 25
              years of expertise, is a leader in end-to-end solutions, from
              concept development to product launch. Based in Santej, Gujarat,
              GNPL operates state-of-the-art WHO-GMP-certified manufacturing
              units, offering a diverse range of high-quality products like
              tablets, capsules, syrups, powders, and serums. Backed by advanced
              in-house testing facilities and a skilled workforce, GNPL ensures
              compliance with global standards while serving over 100 customers
              with more than 1,200 brands. The company excels in third-party
              manufacturing and custom formulations, catering to domestic and
              international markets with reliability and efficiency.
            </p>
            <p
              style={{
                boxSizing: "border-box",
                outline: "none",
                margin: "0px 0px 10px",
                marginBottom: "20px",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "26px",
                color: "rgb(26, 25, 25)",
              }}
            >
              What sets GNPL apart is its commitment to quality, safety, and
              innovation. The company focuses on producing vegan, sugar-free,
              and preservative-free supplements without artificial flavors or
              gelatin, targeting brain, heart, immune, and bone health. GNPL
              combines cutting-edge research with sustainable practices to
              provide tailored nutraceutical solutions, delivering excellence in
              every product.
            </p>
            <div
              className="embed-responsive embed-responsive-16by9"
              style={{
                boxSizing: "border-box",
                outline: "none",
                padding: "0px",
                overflow: "hidden",
                position: "relative",
                display: "block",
                height: "0px",
                paddingBottom: "56.25%",
              }}
            >
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/QclYHNBvHKs"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  border: "0px",
                  position: "absolute",
                  top: "0px",
                  bottom: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
