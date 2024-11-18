import React from "react";

export default function Component() {
  return (
    <>
      <section
        className="investor-section cus-bg-investor-grey"
        style={{
          boxSizing: "border-box",
          outline: "none",
          display: "block",
          padding: "40px 0px",
          background: "rgb(242, 242, 242)",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            outline: "none",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
            width: "1170px",
          }}
        >
          <div
            className="view-header"
            style={{ boxSizing: "border-box", outline: "none" }}
          >
            <h3
              style={{
                boxSizing: "border-box",
                outline: "none",
                fontFamily: "inherit",
                lineHeight: 1.1,
                margin: "0px 0px 40px",
                padding: "0px 0px 10px",
                textAlign: "center",
                fontSize: "38px",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "rgb(0, 92, 166)",
                marginTop: "0px",
                marginBottom: "40px",
                position: "relative",
              }}
            >
              Investor Centre
            </h3>
          </div>
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              outline: "none",
              marginRight: "-15px",
              marginLeft: "-15px",
            }}
          >
            <div
              className="col-md-4"
              style={{
                boxSizing: "border-box",
                outline: "none",
                position: "relative",
                minHeight: "1px",
                paddingRight: "15px",
                paddingLeft: "15px",
                cssFloat: "left",
                width: "33.3333%",
              }}
            >
              <div
                className="field field--name-body field--type-text-with-summary field--label-hidden field--item"
                style={{ boxSizing: "border-box", outline: "none" }}
              >
                <div
                  className="tradingview-widget-container"
                  style={{
                    boxSizing: "border-box",
                    outline: "none",
                    paddingTop: "0px",
                  }}
                >
                  <div
                    id="tv-medium-widget"
                    style={{ boxSizing: "border-box", outline: "none" }}
                  >
                    <iframe
                      id="tradingview_e6a40"
                      frameBorder="0"
                      lang="en"
                      scrolling="no"
                      src='https://s.tradingview.com/embed-widget/symbol-overview/?locale=in#{"symbols":[["BSE","BSE:CIPLA|1y"],["NSE","NSE:CIPLA|1y"]],"width":"350px","height":"calc(400px - 32px)","gridLineColor":"#e9e9ea","fontColor":"#83888D","chartType":"area","lineColor":"#4bafe9","topColor":"#dbeffb","page-uri":"www.cipla.com/","utm_source":"www.cipla.com","utm_medium":"widget_new","utm_campaign":"symbol-overview"}'
                      title="symbol overview TradingView widget"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        width: "350px",
                        height: "calc(368px)",
                        margin: "0px",
                        padding: "0px",
                      }}
                    />
                  </div>
                  <div
                    className="tradingview-widget-copyright"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      width: "350px",
                      fontSize: "13px",
                      lineHeight: "32px",
                      textAlign: "center",
                      verticalAlign: "middle",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif',
                      color: "rgb(178, 181, 190)",
                    }}
                  >
                    <a
                      href="https://in.tradingview.com/symbols/BSE-CIPLA/?utm_source=www.cipla.com&utm_medium=widget_new&utm_campaign=symbol-overview"
                      rel="noopener"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        outline: "none",
                        textDecoration: "none",
                        color: "rgb(178, 181, 190)",
                      }}
                    >
                      <span
                        className="blue-text"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          color: "rgb(41, 98, 255)",
                        }}
                      >
                        BSE
                      </span>
                    </a>{" "}
                    <span
                      className="blue-text"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        color: "rgb(41, 98, 255)",
                      }}
                    >
                      and
                    </span>{" "}
                    <a
                      href="https://in.tradingview.com/symbols/NSE-CIPLA/"
                      rel="noopener"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        outline: "none",
                        textDecoration: "none",
                        color: "rgb(178, 181, 190)",
                      }}
                    >
                      <span
                        className="blue-text"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          color: "rgb(41, 98, 255)",
                        }}
                      >
                        NSE Quotes
                      </span>
                    </a>{" "}
                    by TradingView
                  </div>
                  <p
                    className="disclaimer-text"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      margin: "0px 0px 10px",
                      lineHeight: "20px",
                      display: "flex",
                      alignItems: "center",
                      color: "rgb(68, 67, 67)",
                      fontSize: "13px",
                      fontWeight: 400,
                    }}
                  >
                    The displayed data is not in real time and may have
                    streaming delays.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              style={{
                boxSizing: "border-box",
                outline: "none",
                position: "relative",
                minHeight: "1px",
                paddingRight: "15px",
                paddingLeft: "15px",
                cssFloat: "left",
                width: "33.3333%",
              }}
            >
              <div
                className="stock-custom-block"
                style={{ boxSizing: "border-box", outline: "none" }}
              >
                <div
                  className="stock-block-bottom"
                  style={{
                    boxSizing: "border-box",
                    outline: "none",
                    padding: "13px 20px",
                    borderRadius: "5px",
                    marginBottom: "15px",
                    background: "white",
                    boxShadow: "rgba(0, 0, 0, 0.13) 6px 7px 7px -1px",
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      margin: "0px 0px 10px",
                      lineHeight: "20px",
                      color: "rgb(127, 127, 127)",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "13px",
                      fontWeight: 400,
                    }}
                  >
                    Turnover :{" "}
                    <strong
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        fontWeight: 700,
                        fontSize: "24px",
                        color: "rgb(0, 173, 138)",
                        paddingLeft: "10px",
                      }}
                    >
                      $2.8 Billion
                    </strong>
                  </p>
                </div>
              </div>
              <div
                className="views-element-container form-group"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  marginBottom: "15px",
                  position: "relative",
                  padding: "0px",
                }}
              >
                <div
                  className="view view-news view-id-news view-display-id-latest js-view-dom-id-932125a0c063f755dbe104990f652d99845b067838d15af0698fda497effbe57"
                  style={{
                    boxSizing: "border-box",
                    outline: "none",
                    padding: "13px 20px",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    background: "white",
                    boxShadow: "rgba(0, 0, 0, 0.13) 6px 7px 7px -1px",
                  }}
                >
                  <div
                    className="view-header"
                    style={{ boxSizing: "border-box", outline: "none" }}
                  >
                    <h1
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        margin: "0.67em 0px",
                        marginTop: "0px",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        lineHeight: "38px",
                        color: "rgb(0, 173, 138)",
                        position: "relative",
                        paddingBottom: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      Latest Press Releases
                    </h1>
                  </div>
                  <div
                    className="news view-content"
                    style={{ boxSizing: "border-box", outline: "none" }}
                  >
                    <div
                      className="row in_the_news_wrapper"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        margin: "0px",
                        marginRight: "0px",
                        marginLeft: "0px",
                      }}
                    >
                      <div
                        className="in_the_news"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          display: "block",
                          paddingTop: "10px",
                        }}
                      >
                        <div
                          className="news-latest-content"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            margin: "0px 0px 8px",
                            width: "100%",
                          }}
                        >
                          <div
                            className="news-latest-content-copy"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              padding: "10px 0px",
                              borderBottom: "1px solid rgb(249, 173, 66)",
                            }}
                          >
                            <a
                              href="https://www.cipla.com/sites/default/files/Cipla-Q3FY24-Press-Release.pdf"
                              target="_blank"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                display: "block",
                                fontSize: "14px",
                                background:
                                  'url("https://www.cipla.com/themes/cipla/images/icon-press.svg") 0px 0px no-repeat transparent',
                                padding: "2px 0px 8px 35px",
                                transition: "0.5s linear",
                                backgroundColor: "transparent",
                                paddingBottom: "8px",
                                fontWeight: 600,
                                color: "rgb(128, 128, 128)",
                                outline: "none",
                              }}
                            >
                              {"Q3 FY24 Press Release"}
                            </a>
                            <span
                              className="date"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                display: "block",
                                textTransform: "uppercase",
                                fontSize: "12px",
                                color: "rgb(159, 159, 158)",
                                fontWeight: 300,
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="news-latest-content"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            margin: "0px 0px 8px",
                            width: "100%",
                          }}
                        >
                          <div
                            className="news-latest-content-copy"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              padding: "10px 0px",
                              borderBottom: "1px solid rgb(249, 173, 66)",
                            }}
                          >
                            <a
                              href="https://www.cipla.com/sites/default/files/Q2-FY24-Press-Release.pdf"
                              target="_blank"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                display: "block",
                                fontSize: "14px",
                                background:
                                  'url("https://www.cipla.com/themes/cipla/images/icon-press.svg") 0px 0px no-repeat transparent',
                                padding: "2px 0px 8px 35px",
                                transition: "0.5s linear",
                                backgroundColor: "transparent",
                                paddingBottom: "8px",
                                fontWeight: 600,
                                color: "rgb(128, 128, 128)",
                                outline: "none",
                              }}
                            >
                              {"Q2 FY24 Press Release"}
                            </a>
                            <span
                              className="date"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                display: "block",
                                textTransform: "uppercase",
                                fontSize: "12px",
                                color: "rgb(159, 159, 158)",
                                fontWeight: 300,
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="news-latest-content"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            margin: "0px 0px 8px",
                            width: "100%",
                          }}
                        >
                          <div
                            className="news-latest-content-copy"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              padding: "10px 0px",
                              borderBottom: "1px solid rgb(249, 173, 66)",
                            }}
                          >
                            <a
                              href="https://www.cipla.com/sites/default/files/Cipla-Q1FY24-Press-Release.pdf"
                              target="_blank"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                display: "block",
                                fontSize: "14px",
                                background:
                                  'url("https://www.cipla.com/themes/cipla/images/icon-press.svg") 0px 0px no-repeat transparent',
                                padding: "2px 0px 8px 35px",
                                transition: "0.5s linear",
                                backgroundColor: "transparent",
                                paddingBottom: "8px",
                                fontWeight: 600,
                                color: "rgb(128, 128, 128)",
                                outline: "none",
                              }}
                            >
                              {"Q1 FY24 Press Release"}
                            </a>
                            <span
                              className="date"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                display: "block",
                                textTransform: "uppercase",
                                fontSize: "12px",
                                color: "rgb(159, 159, 158)",
                                fontWeight: 300,
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="news-latest-content"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            margin: "0px 0px 8px",
                            width: "100%",
                            marginBottom: "0px",
                          }}
                        >
                          <div
                            className="news-latest-content-copy"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              padding: "10px 0px",
                              borderBottom: "1px solid rgb(249, 173, 66)",
                              border: "none",
                            }}
                          >
                            <a
                              href="https://www.cipla.com/sites/default/files/Q4-FY23-Press-Release.pdf"
                              target="_blank"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                display: "block",
                                fontSize: "14px",
                                background:
                                  'url("https://www.cipla.com/themes/cipla/images/icon-press.svg") 0px 0px no-repeat transparent',
                                padding: "2px 0px 8px 35px",
                                transition: "0.5s linear",
                                backgroundColor: "transparent",
                                paddingBottom: "8px",
                                fontWeight: 600,
                                color: "rgb(128, 128, 128)",
                                outline: "none",
                              }}
                            >
                              {"Q4 FY23 Press Release"}
                            </a>
                            <span
                              className="date"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                display: "block",
                                textTransform: "uppercase",
                                fontSize: "12px",
                                color: "rgb(159, 159, 158)",
                                fontWeight: 300,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="views-element-container form-group"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  marginBottom: "15px",
                  position: "relative",
                  padding: "0px",
                }}
              >
                <div
                  className="view view-home-page view-id-home_page view-display-id-block_9 js-view-dom-id-6ce3c30adf7b781d129f7b23e77b68c190d428263f134e6b36ecaf09c79b572a"
                  style={{ boxSizing: "border-box", outline: "none" }}
                >
                  <div
                    className="home-page view-content"
                    style={{ boxSizing: "border-box", outline: "none" }}
                  >
                    <div
                      className="investor_resource_pdf_links"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        display: "block",
                      }}
                    >
                      <a
                        alt="Financials"
                        href="https://www.cipla.com/investors/investor-resources"
                        title="Financials"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(51, 122, 183)",
                          padding: "13px 20px 8px",
                          borderRadius: "6px",
                          fontWeight: 600,
                          display: "block",
                          marginBottom: "15px",
                          background: "white",
                          boxShadow: "rgba(0, 0, 0, 0.13) 6px 7px 7px -1px",
                          backgroundColor: "white",
                          outline: "none",
                        }}
                      >
                        <h1
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            margin: "0.67em 0px",
                            marginTop: "0px",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "22px",
                            fontWeight: 600,
                            lineHeight: "38px",
                            position: "relative",
                            marginBottom: "5px",
                            color: "rgb(0, 173, 138)",
                          }}
                        >
                          Financials
                        </h1>
                      </a>
                      <a
                        alt="Investor Presentation"
                        href="https://www.cipla.com/investors/investor-presentation"
                        title="Investor Presentation"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(51, 122, 183)",
                          padding: "13px 20px 8px",
                          borderRadius: "6px",
                          fontWeight: 600,
                          display: "block",
                          background: "white",
                          boxShadow: "rgba(0, 0, 0, 0.13) 6px 7px 7px -1px",
                          backgroundColor: "white",
                          outline: "none",
                          marginBottom: "0px",
                        }}
                      >
                        <h1
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            margin: "0.67em 0px",
                            marginTop: "0px",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "22px",
                            fontWeight: 600,
                            lineHeight: "38px",
                            position: "relative",
                            marginBottom: "5px",
                            color: "rgb(0, 173, 138)",
                          }}
                        >
                          Investor Presentation
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              style={{
                boxSizing: "border-box",
                outline: "none",
                position: "relative",
                minHeight: "1px",
                paddingRight: "15px",
                paddingLeft: "15px",
                cssFloat: "left",
                width: "33.3333%",
              }}
            >
              <div
                className="views-element-container form-group"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  marginBottom: "15px",
                  position: "relative",
                  padding: "0px",
                }}
              >
                <div
                  className="view view-home-page view-id-home_page view-display-id-block_10 js-view-dom-id-0c155be3b42f7fa4043d0f537ed7274e799f9743fb8afbb492d275c745307847"
                  style={{ boxSizing: "border-box", outline: "none" }}
                >
                  <div
                    className="home-page view-content"
                    style={{ boxSizing: "border-box", outline: "none" }}
                  >
                    <div
                      className="investor_resource_annual_reports"
                      style={{ boxSizing: "border-box", outline: "none" }}
                    >
                      <img
                        className="img-responsive"
                        height={472}
                        width={360}
                        src="https://www.cipla.com/sites/default/files/2023-08/annual-report-22-23.png"
                        typeof="foaf:Image"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          borderStyle: "none",
                          border: "0px",
                          verticalAlign: "middle",
                          display: "block",
                          height: "auto",
                          maxWidth: "100%",
                        }}
                      />
                      <div
                        className="annual-report-content-wrapper"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          padding: "20px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          columnGap: "12px",
                          background: "white",
                          boxShadow: "rgba(0, 0, 0, 0.13) 6px 7px 7px -1px",
                        }}
                      >
                        <h1
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            margin: "0.67em 0px",
                            lineHeight: 1.1,
                            marginTop: "0px",
                            fontWeight: 600,
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            marginBottom: "0px",
                            textAlign: "left",
                            color: "rgb(127, 127, 127)",
                          }}
                        >
                          Annual Report 2023
                        </h1>
                        <a
                          className="annual-report-href"
                          href="https://www.cipla.com/investors/annual-reports"
                          style={{
                            boxSizing: "border-box",
                            padding: "6px 18px",
                            borderRadius: "30px",
                            textDecoration: "none",
                            backgroundPosition: "right 18px center",
                            transition: "0.5s linear",
                            display: "inline-block",
                            color: "rgb(0, 173, 138)",
                            fontSize: "13px",
                            fontWeight: 600,
                            backgroundRepeat: "no-repeat",
                            backgroundColor: "rgb(242, 242, 242)",
                            outline: "none",
                          }}
                        >
                          <span
                            style={{ boxSizing: "border-box", outline: "none" }}
                          >
                            {"View All >>"}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
  outline: none;
  line-height: 1.15;
  font-family: sans-serif;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 100%;
  overflow-x: hidden;
}

body {
  box-sizing: border-box;
  outline: none;
  line-height: 1.42857;
  background-color: rgb(255, 255, 255);
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
}
`,
        }}
      />
    </>
  );
}
