import React from "react";

export default function Component() {
  return (
    <>
      <section
        className="compare-section theme1 pt-80 pb-80"
        style={{
          boxSizing: "border-box",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "calc(1.5rem * .5)",
            paddingLeft: "calc(1.5rem * .5)",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1320px",
          }}
        >
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "calc(-1 * 0)",
              marginRight: "calc(-.5 * 1.5rem)",
              marginLeft: "calc(-.5 * 1.5rem)",
            }}
          >
            <div
              className="col-12"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "100%",
              }}
            >
              <h3
                className="title mb-30 pb-25 text-capitalize"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  fontFamily: "Raleway",
                  marginTop: "0px",
                  lineHeight: 1.25,
                  color: "rgb(17, 17, 17)",
                  marginBottom: "30px",
                  paddingBottom: "25px",
                  borderBottom: "1px solid rgb(235, 235, 235)",
                  fontWeight: 700,
                  fontSize: "30px",
                  textTransform: "capitalize",
                }}
              >
                compare
              </h3>
              <div
                className="table-responsive"
                style={{ boxSizing: "border-box", overflowX: "auto" }}
              >
                <table
                  className="table"
                  style={{
                    boxSizing: "border-box",
                    captionSide: "bottom",
                    borderCollapse: "collapse",
                    borderColor: "#dee2e6",
                    width: "100%",
                    marginBottom: "1rem",
                    color: "#212529",
                    verticalAlign: "top",
                  }}
                >
                  <thead
                    className="thead-light"
                    style={{
                      boxSizing: "border-box",
                      borderColor: "inherit",
                      borderStyle: "solid",
                      borderWidth: "0px",
                      verticalAlign: "bottom",
                    }}
                  >
                    <tr
                      style={{
                        boxSizing: "border-box",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "0px",
                      }}
                    >
                      <th
                        scope="col"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "-webkit-match-parent",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          borderColor: "rgb(235, 235, 235)",
                          backgroundColor: "rgb(255, 255, 255)",
                        }}
                      >
                        product info
                      </th>
                      <th
                        className="text-center"
                        scope="col"
                        style={{
                          boxSizing: "border-box",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          borderColor: "rgb(235, 235, 235)",
                          backgroundColor: "rgb(255, 255, 255)",
                          textAlign: "center",
                        }}
                      >
                        <img
                          alt="img"
                          src="http://127.0.0.1:5500/assets/img/product/1.png"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            transition: "0.3s",
                            maxWidth: "150px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        />
                        <span
                          className="sub-title d-block"
                          style={{
                            boxSizing: "border-box",
                            padding: "20px 0px",
                            fontSize: "15px",
                            display: "block",
                          }}
                        >
                          Originals Kaval nail polish
                        </span>
                        <a
                          className="btn btn-dark btn--lg"
                          href="http://127.0.0.1:5500/cart.html"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            border: "1px solid #212529",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            textAlign: "center",
                            verticalAlign: "middle",
                            userSelect: "none",
                            borderRadius: "0px",
                            fontFamily: "Raleway",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: 1,
                            textTransform: "uppercase",
                            background: "rgb(17, 17, 17)",
                            color: "rgb(255, 255, 255)",
                            backgroundColor: "rgb(17, 17, 17)",
                            padding: "15px 30px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          {"add to cart"}
                        </a>
                      </th>
                      <th
                        className="text-center"
                        scope="col"
                        style={{
                          boxSizing: "border-box",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          borderColor: "rgb(235, 235, 235)",
                          backgroundColor: "rgb(255, 255, 255)",
                          textAlign: "center",
                        }}
                      >
                        <img
                          alt="img"
                          src="http://127.0.0.1:5500/assets/img/product/2.png"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            transition: "0.3s",
                            maxWidth: "150px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        />
                        <span
                          className="sub-title d-block"
                          style={{
                            boxSizing: "border-box",
                            padding: "20px 0px",
                            fontSize: "15px",
                            display: "block",
                          }}
                        >
                          Water and Wind Resistant cream
                        </span>
                        <a
                          className="btn btn-dark btn--lg"
                          href="http://127.0.0.1:5500/cart.html"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            border: "1px solid #212529",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            textAlign: "center",
                            verticalAlign: "middle",
                            userSelect: "none",
                            borderRadius: "0px",
                            fontFamily: "Raleway",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: 1,
                            textTransform: "uppercase",
                            background: "rgb(17, 17, 17)",
                            color: "rgb(255, 255, 255)",
                            backgroundColor: "rgb(17, 17, 17)",
                            padding: "15px 30px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          {"add to cart"}
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      boxSizing: "border-box",
                      borderColor: "inherit",
                      borderStyle: "solid",
                      borderWidth: "0px",
                      verticalAlign: "inherit",
                    }}
                  >
                    <tr
                      style={{
                        boxSizing: "border-box",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "0px",
                      }}
                    >
                      <th
                        scope="row"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "-webkit-match-parent",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                        }}
                      >
                        Price
                      </th>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="whish-list-price"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            color: "rgb(17, 17, 17)",
                            fontSize: "15px",
                          }}
                        >
                          {" "}
                          $38.24{" "}
                        </span>
                      </td>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="whish-list-price"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            color: "rgb(17, 17, 17)",
                            fontSize: "15px",
                          }}
                        >
                          {" "}
                          $38.24{" "}
                        </span>
                      </td>
                    </tr>
                    <tr
                      style={{
                        boxSizing: "border-box",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "0px",
                      }}
                    >
                      <th
                        scope="row"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "-webkit-match-parent",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                        }}
                      >
                        Description
                      </th>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            lineHeight: 1.715,
                            textTransform: "none",
                          }}
                        >
                          Originals Kaval nail polish
                        </p>
                      </td>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            lineHeight: 1.715,
                            textTransform: "none",
                          }}
                        >
                          Water and Wind Resistant cream
                        </p>
                      </td>
                    </tr>
                    <tr
                      style={{
                        boxSizing: "border-box",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "0px",
                      }}
                    >
                      <th
                        scope="row"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "-webkit-match-parent",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                        }}
                      >
                        Availability
                      </th>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="badge badge-danger position-static"
                          style={{
                            boxSizing: "border-box",
                            whiteSpace: "nowrap",
                            borderRadius: "0.375rem",
                            display: "inline-block",
                            verticalAlign: "baseline",
                            padding: "5px",
                            textAlign: "center",
                            lineHeight: 1,
                            fontSize: "12px",
                            zIndex: 2,
                            fontWeight: 500,
                            textTransform: "capitalize",
                            color: "rgb(255, 255, 255)",
                            position: "static",
                            backgroundColor: "rgb(107, 63, 79)",
                          }}
                        >
                          In Stock
                        </span>
                      </td>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="badge badge-danger position-static"
                          style={{
                            boxSizing: "border-box",
                            whiteSpace: "nowrap",
                            borderRadius: "0.375rem",
                            display: "inline-block",
                            verticalAlign: "baseline",
                            padding: "5px",
                            textAlign: "center",
                            lineHeight: 1,
                            fontSize: "12px",
                            zIndex: 2,
                            fontWeight: 500,
                            textTransform: "capitalize",
                            color: "rgb(255, 255, 255)",
                            position: "static",
                            backgroundColor: "rgb(107, 63, 79)",
                          }}
                        >
                          In Stock
                        </span>
                      </td>
                    </tr>
                    <tr
                      style={{
                        boxSizing: "border-box",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "0px",
                      }}
                    >
                      <th
                        scope="row"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "-webkit-match-parent",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                        }}
                      >
                        weight
                      </th>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        500 ml
                      </td>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        400 ml
                      </td>
                    </tr>
                    <tr
                      style={{
                        boxSizing: "border-box",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "0px",
                      }}
                    >
                      <th
                        scope="row"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "-webkit-match-parent",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                        }}
                      >
                        colors
                      </th>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        3
                      </td>
                      <td
                        className="text-center"
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          backgroundColor: "transparent",
                          boxShadow: "inset 0 0 0 9999px transparent",
                          border: "1px solid rgb(235, 235, 235)",
                          padding: "15px",
                          verticalAlign: "middle",
                          borderBottomWidth: "1px",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        4
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  cursor: url("data:image/png;base64,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") 1 0, auto;
}

body {
  box-sizing: border-box;
  margin: 0px;
  text-align: var(--bs-body-text-align);
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  background: rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  font-family: "Playfair Display";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.75;
  color: rgb(86, 86, 86);
  overflow-x: hidden;
  cursor: url("data:image/png;base64,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") 1 0, auto;
}
`,
        }}
      />
    </>
  );
}
