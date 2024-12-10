import React from "react";

export default function Component() {
  return (
    <>
      <section
        className="contact_us"
        style={{
          boxSizing: "inherit",
          outline: "0px",
          padding: "100px 0px",
          overflow: "hidden",
        }}
      >
        <div
          className="un-container"
          style={{
            boxSizing: "inherit",
            outline: "0px",
            margin: "0px auto",
            width: "auto",
            maxWidth: "1180px",
          }}
        >
          <div
            className="hdngs"
            style={{
              boxSizing: "inherit",
              outline: "0px",
              marginBottom: "50px",
            }}
          >
            <h2
              className="h2_medium"
              style={{
                boxSizing: "inherit",
                outline: "0px",
                marginTop: "0px",
                marginBottom: "15px",
                lineHeight: "130%",
                color: "#383838",
                fontWeight: 500,
                fontSize: "36px",
              }}
            >
              {" "}
               {" "}
            </h2>
          </div>
          <app-contact-us-form style={{ boxSizing: "inherit", outline: "0px" }}>
            <div
              className="contact-form ng-star-inserted"
              style={{
                boxSizing: "inherit",
                outline: "0px",
                marginTop: "-100px" ,
                gap: "40px",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              <div
                className="contact_us ng-star-inserted"
                style={{
                  boxSizing: "inherit",
                  outline: "0px",
                  padding: "30px",
                  borderRadius: "20px",
                  border: "1px solid rgb(226, 226, 226)",
                  background: "#FFFFFF",
                }}
              >
                <form
                  id="contact-form"
                  className="ng-untouched ng-pristine ng-star-inserted ng-invalid"
                  style={{ boxSizing: "inherit", outline: "0px" }}
                >
                  <div
                    className="input_fields_bdr mb-20 w_50"
                    style={{
                      boxSizing: "inherit",
                      outline: "0px",
                      position: "relative",
                      marginBottom: "20px",
                    }}
                  >
                    <label
                      htmlFor="name"
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        color: "#383838",
                        marginBottom: "10px",
                        display: "block",
                        fontSize: "12px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Name
                      <em
                        className="red-text"
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          fontStyle: "italic",
                          color: "rgb(214, 53, 0)",
                        }}
                      >
                        *
                      </em>
                    </label>
                    <input
                      id="name"
                      className="ng-untouched ng-pristine ng-invalid"
                      name="name"
                      type="text"
                      required
                      style={{
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        borderImage: "initial",
                        borderBottom: "1px solid rgb(117, 117, 117)",
                        outline: "none",
                        margin: "0px 0px 20px",
                        transition: "0.3s",
                        width: "100%",
                        border: "1px solid #E2E2E2",
                        padding: "0px 15px",
                        background: "#FFFFFF",
                        borderRadius: "8px",
                        height: "50px",
                        boxSizing: "border-box",
                        color: "#383838",
                        fontSize: "14px",
                        backgroundColor: "",
                        fontFamily: "Inter, sans-serif",
                        marginBottom: "0px",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                  <div
                    className="input_fields_bdr mb-20 w_50"
                    style={{
                      boxSizing: "inherit",
                      outline: "0px",
                      position: "relative",
                      marginBottom: "20px",
                    }}
                  >
                    <label
                      htmlFor="email"
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        color: "#383838",
                        marginBottom: "10px",
                        display: "block",
                        fontSize: "12px",
                      }}
                    >
                      Email ID
                      <em
                        className="red-text"
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          fontStyle: "italic",
                          color: "rgb(214, 53, 0)",
                        }}
                      >
                        *
                      </em>
                    </label>
                    <input
                      id="email"
                      className="ng-untouched ng-pristine ng-invalid"
                      name="email"
                      type="email"
                      pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z0-9]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
                      required
                      style={{
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        borderImage: "initial",
                        borderBottom: "1px solid rgb(117, 117, 117)",
                        outline: "none",
                        margin: "0px 0px 20px",
                        transition: "0.3s",
                        width: "100%",
                        textTransform: "lowercase",
                        border: "1px solid #E2E2E2",
                        padding: "0px 15px",
                        background: "#FFFFFF",
                        borderRadius: "8px",
                        height: "50px",
                        boxSizing: "border-box",
                        color: "#383838",
                        fontSize: "14px",
                        backgroundColor: "",
                        fontFamily: "Inter, sans-serif",
                        marginBottom: "0px",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                  <app-text-input-mobile
                    style={{ boxSizing: "inherit", outline: "0px" }}
                  >
                    <div
                      className="input_fields_bdr"
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                    >
                      <label
                        className="ng-star-inserted"
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          marginBottom: "10px",
                          display: "block",
                          color: "#5D5D5D",
                          fontSize: "12px",
                        }}
                      >
                        Mobile No.
                        <em
                          className="red-text ng-star-inserted"
                          style={{
                            boxSizing: "inherit",
                            outline: "0px",
                            fontStyle: "italic",
                            color: "rgb(214, 53, 0)",
                          }}
                        >
                          *
                        </em>
                      </label>
                      <ngx-mat-intl-tel-input
                        id="ngx-mat-intl-tel-input-0"
                        className="ng-untouched ng-pristine ng-invalid"
                        style={{ boxSizing: "inherit", outline: "0px" }}
                      >
                        <div
                          className="ngx-mat-tel-input-container"
                          style={{
                            outline: "0px",
                            border: "1px solid #E2E2E2",
                            padding: "0px 15px",
                            background: "#FFFFFF",
                            borderRadius: "8px",
                            height: "50px",
                            boxSizing: "border-box",
                            color: "#383838",
                            fontSize: "14px",
                            fontFamily: "Inter, sans-serif",
                            marginBottom: "0px",
                            boxShadow: "none",
                          }}
                        >
                          <button
                            className="mat-mdc-menu-trigger country-selector mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                            type="button"
                            aria-expanded="false"
                            aria-haspopup="menu"
                            style={{
                              cursor: "pointer",
                              border: "none",
                              outline: "none",
                              overflow: "visible",
                              background: "rgba(0, 0, 0, 0)",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxSizing: "border-box",
                              minWidth: "64px",
                              userSelect: "none",
                              appearance: "none",
                              verticalAlign: "middle",
                              fontFamily:
                                "var(--mdc-text-button-label-text-font)",
                              letterSpacing:
                                "var(--mdc-text-button-label-text-tracking)",
                              textTransform:
                                "var(--mdc-text-button-label-text-transform)",
                              textDecoration: "none",
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              borderRadius: "0px",
                              padding: "1px",
                              transition: "opacity 0.2s",
                              inset: "0px auto 0px 0px",
                              backgroundPosition: "right center",
                              flexShrink: 0,
                              lineHeight: "inherit",
                              width: "90px",
                              position: "absolute",
                              zIndex: 1,
                              fontSize: "inherit",
                              fontWeight: "inherit",
                              backgroundImage:
                                'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAIUlEQVQoz2NgGAUkgtKG0v9IsIGwsgbCpjUQtrRhZAUzAB5rGRmoZRO5AAAAAElFTkSuQmCC")',
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "18px",
                              color: "var(--mdc-text-button-label-text-color)",
                              opacity: 1,
                              height: "calc(100% - 27px)",
                              top: "auto",
                              bottom: "0px",
                            }}
                          >
                            <span
                              className="mat-mdc-button-persistent-ripple mdc-button__ripple"
                              style={{
                                boxSizing: "inherit",
                                outline: "0px",
                                inset: "0px",
                                borderRadius: "inherit",
                                position: "absolute",
                                pointerEvents: "none",
                              }}
                            />
                            <span
                              className="mdc-button__label"
                              style={{
                                boxSizing: "inherit",
                                outline: "0px",
                                position: "relative",
                                zIndex: 1,
                              }}
                            >
                              <span
                                className="country-selector-code ng-star-inserted"
                                style={{
                                  boxSizing: "inherit",
                                  outline: "0px",
                                  color: "#5D5D5D",
                                }}
                              >
                                +91
                              </span>
                            </span>
                            <span
                              className="mat-mdc-focus-indicator"
                              style={{
                                boxSizing: "inherit",
                                outline: "0px",
                                inset: "0px",
                                position: "absolute",
                              }}
                            />
                            <span
                              className="mat-mdc-button-touch-target"
                              style={{
                                boxSizing: "inherit",
                                outline: "0px",
                                position: "absolute",
                                top: "50%",
                                height: "48px",
                                left: "0px",
                                right: "0px",
                                transform: "translateY(-50%)",
                                display:
                                  "var(--mat-text-button-touch-target-display)",
                              }}
                            />
                          </button>
                          <mat-menu
                            className="ng-star-inserted"
                            style={{
                              boxSizing: "inherit",
                              outline: "0px",
                              display: "none",
                            }}
                          />
                          <input
                            id="mat-input-0"
                            className="mat-mdc-input-element ng-untouched ng-pristine ng-valid cdk-text-field-autofill-monitored"
                            type="tel"
                            autoComplete="off"
                            aria-invalid="false"
                            aria-required="false"
                            style={{
                              borderTop: "none",
                              borderRight: "none",
                              borderLeft: "none",
                              borderImage: "initial",
                              borderBottom: "1px solid rgb(117, 117, 117)",
                              borderRadius: "0px",
                              margin: "0px 0px 20px",
                              transition: "0.3s",
                              boxShadow: "none",
                              height: "50px",
                              border: "none",
                              background: "none",
                              outline: "none",
                              font: "inherit",
                              padding: "0px 6px 0px 90px",
                              backgroundColor: "initial",
                              fontSize: "inherit",
                              width: "100%",
                              boxSizing: "border-box",
                              position: "relative",
                              zIndex: 0,
                              marginRight: "0px",
                              marginLeft: "0px",
                              marginTop: "0px",
                              marginBottom: "0px",
                            }}
                          />
                        </div>
                      </ngx-mat-intl-tel-input>
                    </div>
                  </app-text-input-mobile>
                  <div
                    className="input_fields_bdr mb-20 w_50"
                    style={{
                      boxSizing: "inherit",
                      outline: "0px",
                      position: "relative",
                      marginBottom: "20px",
                    }}
                  >
                    <label
                      htmlFor="org"
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        color: "#383838",
                        marginBottom: "10px",
                        display: "block",
                        fontSize: "12px",
                      }}
                    >
                      Organisation
                      <em
                        className="red-text"
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          fontStyle: "italic",
                          color: "rgb(214, 53, 0)",
                        }}
                      >
                        *
                      </em>
                    </label>
                    <app-organisation-autocomplete
                      style={{ boxSizing: "inherit", outline: "0px" }}
                    >
                      <app-autocomplete
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          position: "relative",
                        }}
                      >
                        <div
                          id="organisation-organisation_select_div"
                          className="input_field autocomplete-wrapper"
                          style={{
                            boxSizing: "inherit",
                            outline: "0px",
                            position: "relative",
                          }}
                        >
                          <input
                            id="organisation-organisation_select_input"
                            className="auto-complete ng-untouched ng-pristine ng-invalid"
                            type="text"
                            autoComplete="off"
                            required
                            style={{
                              borderTop: "none",
                              borderRight: "none",
                              borderLeft: "none",
                              borderImage: "initial",
                              borderBottom: "1px solid rgb(117, 117, 117)",
                              outline: "none",
                              margin: "0px 0px 20px",
                              transition: "0.3s",
                              width: "100%",
                              border: "1px solid #E2E2E2",
                              padding: "0px 15px",
                              background: "#FFFFFF",
                              borderRadius: "8px",
                              color: "#383838",
                              fontSize: "14px",
                              backgroundColor: "",
                              fontFamily: "Inter, sans-serif",
                              boxSizing: "border-box",
                              height: "50px",
                              textOverflow: "ellipsis",
                              marginBottom: "0px",
                              boxShadow: "none",
                              paddingRight: "120px",
                            }}
                          />
                          <span
                            className="d-none"
                            style={{
                              boxSizing: "inherit",
                              outline: "0px",
                              display: "none",
                            }}
                          >
                            Organisation is required
                          </span>
                        </div>
                      </app-autocomplete>
                    </app-organisation-autocomplete>
                  </div>

    <>
      <a
        className="ng-tns-c2338824720-0"
        href="#"
        style={{
          boxSizing: "inherit",
          outline: "0px",
          textDecoration: "none",
          WebkitTapHighlightColor: "transparent",
          transition: "0.3s linear",
          fontWeight: 500,
          cursor: "pointer",
          padding: "6px",
          background: "#683480",
          borderRadius: "8px",
          color: "rgb(255, 255, 255)",
          fontSize: "12px",
          lineHeight: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "150px",
          height: "40px",
        }}
      >
        <img
          className="ng-tns-c2338824720-0"
          height={16}
          width={16}
          alt="Host Icon"
          src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg"
          style={{ boxSizing: "inherit", outline: "0px", marginRight: "4px" }}
        />{" "}
        Submit{" "}
      </a>
      
    </>



                </form>
              </div>
              <div
                className="addresses ng-star-inserted"
                style={{
                  boxSizing: "inherit",
                  outline: "0px",
                  borderRadius: "20px",
                  border: "1px solid rgba(221, 229, 234, 0.3)",
                  background: "#683480",
                  padding: "60px 40px",
                  position: "relative",
                  zIndex: 9,
                }}
              >
                <div
                  className="title"
                  style={{
                    boxSizing: "inherit",
                    outline: "0px",
                    color: "rgb(249, 252, 255)",
                    fontSize: "28px",
                    fontWeight: 500,
                    lineHeight: "120%",
                    marginBottom: "50px",
                  }}
                >
                  {" "}
                  Contact Information{" "}
                </div>
                <div
                  className="item"
                  style={{
                    boxSizing: "inherit",
                    outline: "0px",
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "30px",
                  }}
                >
                  <img
                    height={60}
                    width={60}
                    alt="Addresses"
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/addresses-icon.png?d=120x120"
                    style={{ boxSizing: "inherit", outline: "0px" }}
                  />
                  <div
                    className="cptn"
                    style={{
                      boxSizing: "inherit",
                      outline: "0px",
                      width: "calc(100% - 60px)",
                      paddingLeft: "15px",
                    }}
                  >
                    <div
                      className="s_title"
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        color: "rgb(249, 252, 255)",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "140%",
                        marginBottom: "10px",
                      }}
                    >
                      Our Addresses
                    </div>
                    <p
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        marginTop: "0px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        fontSize: "12px",
                        lineHeight: "160%",
                        marginBottom: "5px",
                      }}
                    >
                      <strong
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          fontWeight: 500,
                        }}
                      >
                        Delhi Office:
                      </strong>{" "}
                      Unstop, Somdutt Chamber 1,5, Bhikaji Cama Place, Rama
                      Krishna Puram, New Delhi 110066{" "}
                    </p>
                    <p
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        marginTop: "0px",
                        fontWeight: 400,
                        marginBottom: "0px",
                        color: "#FFFFFF",
                        fontSize: "12px",
                        lineHeight: "160%",
                      }}
                    >
                      <strong
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          fontWeight: 500,
                        }}
                      >
                        Registered Office:
                      </strong>{" "}
                      Unstop c/o FLIVE Consulting Private Limited, #6317, B9,
                      Vasant Kunj, New Delhi - 110070{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="item"
                  style={{
                    boxSizing: "inherit",
                    outline: "0px",
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "30px",
                  }}
                >
                  <img
                    height={60}
                    width={60}
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/company-icon.png?d=120x120"
                    style={{ boxSizing: "inherit", outline: "0px" }}
                  />
                  <div
                    className="cptn"
                    style={{
                      boxSizing: "inherit",
                      outline: "0px",
                      width: "calc(100% - 60px)",
                      paddingLeft: "15px",
                    }}
                  >
                    <div
                      className="s_title"
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        color: "rgb(249, 252, 255)",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "140%",
                        marginBottom: "10px",
                      }}
                    >
                      Company
                    </div>
                    <p
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        marginTop: "0px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        fontSize: "12px",
                        lineHeight: "160%",
                        marginBottom: "5px",
                      }}
                    >
                      <strong
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          fontWeight: 500,
                        }}
                      >
                        FLIVE Consulting Pvt. Ltd.
                      </strong>
                    </p>
                    <p
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        marginTop: "0px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        fontSize: "12px",
                        lineHeight: "160%",
                        marginBottom: "5px",
                      }}
                    >
                      {" "}
                      GST Number: 07AADCF7366C1ZP{" "}
                    </p>
                    <p
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        marginTop: "0px",
                        fontWeight: 400,
                        marginBottom: "0px",
                        color: "#FFFFFF",
                        fontSize: "12px",
                        lineHeight: "160%",
                      }}
                    >
                      {" "}
                      PAN Number: AADCF7366C{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="item ng-star-inserted"
                  style={{
                    boxSizing: "inherit",
                    outline: "0px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    height={60}
                    width={60}
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/inquiries-icon.png?d=120x120"
                    style={{ boxSizing: "inherit", outline: "0px" }}
                  />
                  <div
                    className="cptn"
                    style={{
                      boxSizing: "inherit",
                      outline: "0px",
                      width: "calc(100% - 60px)",
                      paddingLeft: "15px",
                    }}
                  >
                    <div
                      className="s_title"
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        color: "rgb(249, 252, 255)",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "140%",
                        marginBottom: "10px",
                      }}
                    >
                      Inquiries
                    </div>
                    <p
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        marginTop: "0px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        fontSize: "12px",
                        lineHeight: "160%",
                        marginBottom: "5px",
                      }}
                    >
                      <strong
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          fontWeight: 500,
                        }}
                      >
                        Sales Inquiries
                      </strong>
                      <br style={{ boxSizing: "inherit", outline: "0px" }} />
                      <a
                        href="mailto:sales@unstop.com"
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          transition: "0.3s",
                          WebkitTapHighlightColor: "transparent",
                          display: "inline-block",
                          cursor: "pointer",
                          textDecoration: "underline",
                          color: "inherit",
                        }}
                      >
                        {" "}
                        sales@unstop.com{" "}
                      </a>
                      ,{" "}
                      <a
                        href="tel:9311777388"
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          transition: "0.3s",
                          WebkitTapHighlightColor: "transparent",
                          display: "inline-block",
                          cursor: "pointer",
                          textDecoration: "underline",
                          color: "inherit",
                        }}
                      >
                        {" "}
                        +91 9311777388{" "}
                      </a>
                      <br
                        style={{ boxSizing: "inherit", outline: "0px" }}
                      />{" "}
                      (Monday to Friday, 9 AM to 6 PM){" "}
                    </p>
                    <p
                      style={{
                        boxSizing: "inherit",
                        outline: "0px",
                        marginTop: "0px",
                        fontWeight: 400,
                        marginBottom: "0px",
                        color: "#FFFFFF",
                        fontSize: "12px",
                        lineHeight: "160%",
                      }}
                    >
                      <strong
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          fontWeight: 500,
                        }}
                      >
                        Support Inquiries
                      </strong>
                      <br style={{ boxSizing: "inherit", outline: "0px" }} />
                      <a
                        href="mailto:support@unstop.com"
                        style={{
                          boxSizing: "inherit",
                          outline: "0px",
                          transition: "0.3s",
                          WebkitTapHighlightColor: "transparent",
                          display: "inline-block",
                          cursor: "pointer",
                          textDecoration: "underline",
                          color: "inherit",
                        }}
                      >
                        support@unstop.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </app-contact-us-form>
        </div>
      </section>
    </>
  );
}
