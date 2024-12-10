import React from "react";
import { Link } from "react-router-dom"; // Import Link

export default function Component() {
  return (
    <>
      <section
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          letterSpacing: "0.02em",
          fontFamily: "Lato, sans-serif",
          backgroundColor: "#f2f2f2d9",
        }}
      >
        <section
          className="tp_therapeutic_areas_section py-[32px] md:py-[ 25px]"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            letterSpacing: "0.02em",
            backgroundColor: "#ffffff",
            fontFamily: "Lato, sans-serif",
          }}
        >
          <div
            className="px-4 container mx-auto"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "1140px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "1rem",
              paddingBottom:"80px",
              paddingRight: "1rem",
              letterSpacing: "0.02em",
              fontFamily: "Lato, sans-serif",
            }}
          >
            <div
              className="grid grid-cols-1 gap-[32px] md:gap-[25px]"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "grid",
                gridTemplateColumns: "repeat(1, minmax(0px, 1fr))",
                letterSpacing: "0.02em",
                gap: "25px",
                fontFamily: "Lato, sans-serif",
              }}
            >
              <div
                className="flex flex-col items-start"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  letterSpacing: "0.02em",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <a
                  className="flex items-center justify-start gap-6"
                  href="https://www.torrentpharma.com/ourproducts/therapeutic-area/"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "1.5rem",
                    letterSpacing: "0.02em",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <p
                    className="text-[32px] font-bold leading-normal lg:text-[42px] xl:text-[52px] 2xl:text-[62px] text-[#363678] w-fit"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      margin: "0px",
                      width: "fit-content",
                      fontWeight: 700,
                      lineHeight: 1.5,
                      color: "rgb(54 54 120/1)",
                      letterSpacing: "0.02em",
                      fontSize: "45px",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    Health Category
                  </p>
                  <div
                    className="min-h-8 min-w-8 rounded-[50%] flex items-center justify-center bg-[#36367824]"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      minHeight: "2rem",
                      minWidth: "2rem",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "rgba(54, 54, 120, 0.14)",
                      letterSpacing: "0.02em",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </a>
                <p
                  className="therapeutic_areas_custom_para text-base font-normal leading-6 md:leading-8 md:text-[18px] text-[#717170] hidden md:block mt-8 md:mt-4"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    marginTop: "1rem",
                    display: "block",
                    fontSize: "16px",
                    lineHeight: "2rem",
                    color: "rgb(113, 113, 112)",
                    textAlign: "left",
                    fontFamily: "Lato, sans-serif",
                  }}
                >{`At Immune Science, we uphold a tradition of dedication, professional 
                integrity, and robust R&D to achieve excellence. With leading brands in key 
                therapeutic areas, our products are proven to be both efficient and effective
                 in improving patient outcomes.`}</p>
                <p
                  className="therapeutic_areas_custom_para text-base font-normal leading-6 md:leading-8 md:text-[18px] text-[#717170] block md:hidden mt-8 2xl:mt-4"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "2rem",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    display: "none",
                    fontSize: "18px",
                    lineHeight: "2rem",
                    color: "rgb(113, 113, 112)",
                    textAlign: "left",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  At Goa Nutrition, we uphold a tradition of dedication,
                  professional integrity, and robust R&D to achieve excellence.
                  With leading brands in key therapeutic areas, our products are
                  proven to be both efficient and effective in improving patient
                  outcomes.
                </p>
              </div>
              <div
                className="flex items-center justify-start flex-wrap gap-6 md:gap-8 xl:gap-8 2xl:gap-[42px]"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  letterSpacing: "0.02em",
                  gap: "2rem",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <Link
                  to="#"
                  style={{
                    display: "block", // Ensure the Link behaves like a block-level element
                    textDecoration: "none", // Remove default underline styling for links
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Gastro Intestinal"
                        src="https://i.postimg.cc/FRdT5kQM/bone-and-joint-care.png"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Anti-Diabetic
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="#"
                  style={{
                    display: "block", // Make Link a block element
                    textDecoration: "none", // Remove default link styling
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Body Detox"
                        src="public/assets/img/categories/BODY DETIX.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Anti-Microbial
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="#"
                  style={{
                    display: "block", // Ensures the Link acts as a block element
                    textDecoration: "none", // Removes default underline styling
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Oncology"
                        src="public/assets/img/categories/IMMUNITY BOOSTER.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Cardiovascular
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Nephrology"
                        src="public/assets/img/categories/memory enhancer.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Dermatologic
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Oncology"
                        src="public/assets/img/categories/female vitality.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Urology
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Gastro Intestinal"
                        src="public/assets/img/categories/skin glow .jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Pain
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="/extracts"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Gastro Intestinal"
                        src="public\assets\img\categories\extracts.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Gastro Intestinal
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Speciality Superfoods"
                        src="public/assets/img/categories/superfood.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Gynecology
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Gastro Intestinal"
                        src="public\assets\img\categories\weight loss.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Miscellaneous
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Nephrology"
                        src="public\assets\img\categories\anti diabtic.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Oncology
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Oncology"
                        src="public\assets\img\categories\cardiology.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Nephrology
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>{" "}
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Gastro Intestinal"
                        src="public\assets\img\categories\collegen suppliment.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Miscellaneous
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Gastro Intestinal"
                        src="public\assets\img\categories\hairfall control.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Oncology
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Gastro Intestinal"
                        src="public\assets\img\categories\eye health.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Eye Health
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Gastro Intestinal"
                        src="public\assets\img\categories\antioxidents.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Anti Oxidants
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Neuro-Psychiatric"
                        src="public\assets\img\categories\male vitality.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Male Vitality
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Gynecology"
                        src="public\assets\img\categories\performance.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Performance
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Nephrology"
                        src="public\assets\img\categories\dendruff.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Dandruff
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="therapeutic_areas_services_wrapper basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33.33%-2rem)] 2xl:basis-[calc(25%-42px)] flex justify-between items-center gap-2 px-[24px] py-[16px] md:px-4 md:py-3 3xl:px-6 3xl:py-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      letterSpacing: "0.02em",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      flexBasis: "calc(33.33% - 2rem)",
                      borderRadius: "24px",
                      background: "rgba(54, 54, 120, 0.06)",
                      transition: "0.2s",
                      height: "150px",
                      cursor: "pointer",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      <img
                        alt="Oncology"
                        src="public\assets\img\categories\height enhancer.jpg"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          letterSpacing: "0.02em",
                          border: "none",
                          borderRadius: "20px",
                          width: "100px",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                      <h6
                        className="text-lg font-semibold leading-[30px] text-[#1E1E1E] w-40"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          width: "10rem",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          color: "rgb(30 30 30/1)",
                          letterSpacing: "0.0015em",
                          textAlign: "left",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        Height Enhancer
                      </h6>
                    </div>
                    <svg
                      height="14"
                      width="7"
                      fill="none"
                      viewBox="0 0 7 14"
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
                        d="M0.166748 13.6668L6.83342 7.00016L0.166748 0.333496V13.6668Z"
                        fill="#363678"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          letterSpacing: "0.02em",
                          fontFamily: "Lato, sans-serif",
                        }}
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
