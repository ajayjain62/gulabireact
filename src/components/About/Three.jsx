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
              Cipla, as an organisation has been built brick-by-brick on the
              foundation of care. Caring For Life has always been and continues
              to remain, our guiding purpose. Driven by the same purpose, we
              have extended our presence to 80+ countries providing over 1,500
              products across various therapeutic categories in 50+ dosage
              forms. To make healthcare more affordable globally, we are
              deepening our presence in the key markets of India, South Africa,
              the U.S. among other economies of the emerging world.
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
              For over eight decades, making a difference to patients has
              inspired every aspect of Cipla’s work. Our paradigm-changing offer
              of a triple anti-retroviral therapy in HIV/AIDS at less than a
              dollar a day in Africa in 2001 is widely acknowledged as having
              contributed to bringing inclusiveness, accessibility and
              affordability to the centre of the HIV movement. A responsible
              corporate citizen, Cipla’s humanitarian approach to healthcare in
              pursuit of its purpose of Caring for Life and deep-rooted
              community links wherever it is present, make it a partner of
              choice for global health bodies and stakeholders.
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
