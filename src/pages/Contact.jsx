import React from "react";

export default function Component() {
  return (
    <>
      <section
        className="contact-section pt-80 pb-50"
        style={{
          boxSizing: "border-box",
          paddingTop: "80px",
          paddingBottom: "50px",
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
              className="col-lg-6 col-12 mb-30"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "50%",
                marginBottom: "30px",
              }}
            >
              <div
                className="contact-page-side-content"
                style={{
                  boxSizing: "border-box",
                  paddingRight: "30px",
                  height: "100%",
                }}
              >
                <h3
                  className="contact-page-title"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    fontFamily: "Raleway",
                    marginTop: "0px",
                    lineHeight: 1.25,
                    color: "rgb(17, 17, 17)",
                    fontSize: "30px",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    marginBottom: "30px",
                  }}
                >
                  Contact Us
                </h3>
                <p
                  className="contact-page-message mb-30"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0px",
                    lineHeight: 1.715,
                    marginBottom: "30px",
                  }}
                >
                  {
                    "As a leading name in the B2B home furnishings industry, we value the relationships we build with manufacturers, retailers, and business partners. Whether you’re interested in our wide range of products, want to explore partnership opportunities, or have any inquiries, we’re here to assist you.x"
                  }
                </p>
                <div
                  className="single-contact-block"
                  style={{
                    boxSizing: "border-box",
                    borderBottom: "1px solid rgb(235, 235, 235)",
                    marginBottom: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <h4
                    style={{
                      boxSizing: "border-box",
                      fontFamily: "Raleway",
                      margin: "15px 0px",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "27px",
                      color: "rgb(17, 17, 17)",
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <i
                      className="fa fa-fax"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        WebkitFontSmoothing: "antialiased",
                        display: "inline-block",
                        fontStyle: "normal",
                        textRendering: "auto",
                        lineHeight: 1,
                        fontFamily: '"Font Awesome 5 Free"',
                        fontWeight: 900,
                      }}
                    />{" "}
                    Address
                  </h4>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      fontSize: "15px",
                      lineHeight: "29px",
                      marginBottom: "0px",
                      color: "rgb(112, 112, 112)",
                    }}
                  >
                    F868, VKIA Road no 14, Jaipur
                  </p>
                </div>
                <div
                  className="single-contact-block"
                  style={{
                    boxSizing: "border-box",
                    borderBottom: "1px solid rgb(235, 235, 235)",
                    marginBottom: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <h4
                    style={{
                      boxSizing: "border-box",
                      fontFamily: "Raleway",
                      margin: "15px 0px",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "27px",
                      color: "rgb(17, 17, 17)",
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <i
                      className="fa fa-phone"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        WebkitFontSmoothing: "antialiased",
                        display: "inline-block",
                        fontStyle: "normal",
                        textRendering: "auto",
                        lineHeight: 1,
                        fontFamily: '"Font Awesome 5 Free"',
                        fontWeight: 900,
                      }}
                    />{" "}
                    Phone
                  </h4>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      fontSize: "15px",
                      lineHeight: "29px",
                      marginBottom: "0px",
                      color: "rgb(112, 112, 112)",
                    }}
                  >
                    <a
                      href="tel:9828052001"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "0.3s",
                        cursor:
                          'url("data:image/png;base64,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") 9 1, pointer',
                      }}
                    >
                      Mobile: +91 9828052001
                    </a>
                  </p>
                </div>
                <div
                  className="single-contact-block"
                  style={{
                    boxSizing: "border-box",
                    borderBottom: "0px",
                    marginBottom: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  <h4
                    style={{
                      boxSizing: "border-box",
                      fontFamily: "Raleway",
                      margin: "15px 0px",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "27px",
                      color: "rgb(17, 17, 17)",
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <i
                      className="fas fa-envelope"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        WebkitFontSmoothing: "antialiased",
                        display: "inline-block",
                        fontStyle: "normal",
                        textRendering: "auto",
                        lineHeight: 1,
                        fontFamily: '"Font Awesome 5 Free"',
                        fontWeight: 900,
                      }}
                    />{" "}
                    Email
                  </h4>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      fontSize: "15px",
                      lineHeight: "29px",
                      marginBottom: "0px",
                      color: "rgb(112, 112, 112)",
                    }}
                  >
                    <a
                      href="mailto:Gulabidecor123@gmail.com"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "0.3s",
                        cursor:
                          'url("data:image/png;base64,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") 9 1, pointer',
                      }}
                    >
                      {"Gulabidecor123@gmail.com"}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-12 mb-30"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "50%",
                marginBottom: "30px",
              }}
            >
              <div
                className="contact-form-content"
                style={{ boxSizing: "border-box" }}
              >
                <h3
                  className="contact-page-title"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    fontFamily: "Raleway",
                    marginTop: "0px",
                    lineHeight: 1.25,
                    color: "rgb(17, 17, 17)",
                    fontSize: "30px",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    marginBottom: "30px",
                  }}
                >
                  Tell Us Your Message
                </h3>
                <div
                  className="contact-form"
                  style={{
                    boxSizing: "border-box",
                    padding: "35px",
                    backgroundColor: "rgb(243, 243, 243)",
                  }}
                >
                  <form
                    id="contact-form"
                    action="assets/php/contact.php"
                    method="POST"
                    style={{ boxSizing: "border-box" }}
                  >
                    <div
                      className="form-group"
                      style={{ boxSizing: "border-box", marginBottom: "20px" }}
                    >
                      <label
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          padding: "0.8rem 0px",
                          fontSize: "14px",
                          color: "rgb(17, 17, 17)",
                          textTransform: "capitalize",
                        }}
                      >
                        Your Name{" "}
                        <span
                          className="required"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            color: "rgb(107, 63, 79)",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          transition: "0.3s",
                          height: "40px",
                          border: "1px solid rgb(235, 235, 235)",
                          outline: "0px",
                          lineHeight: "40px",
                          width: "100%",
                          paddingLeft: "20px",
                          backgroundColor: "rgb(255, 255, 255)",
                        }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ boxSizing: "border-box", marginBottom: "20px" }}
                    >
                      <label
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          padding: "0.8rem 0px",
                          fontSize: "14px",
                          color: "rgb(17, 17, 17)",
                          textTransform: "capitalize",
                        }}
                      >
                        Your Email{" "}
                        <span
                          className="required"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            color: "rgb(107, 63, 79)",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          transition: "0.3s",
                          height: "40px",
                          border: "1px solid rgb(235, 235, 235)",
                          outline: "0px",
                          lineHeight: "40px",
                          width: "100%",
                          paddingLeft: "20px",
                          backgroundColor: "rgb(255, 255, 255)",
                        }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ boxSizing: "border-box", marginBottom: "20px" }}
                    >
                      <label
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          padding: "0.8rem 0px",
                          fontSize: "14px",
                          color: "rgb(17, 17, 17)",
                          textTransform: "capitalize",
                        }}
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          transition: "0.3s",
                          height: "40px",
                          border: "1px solid rgb(235, 235, 235)",
                          outline: "0px",
                          lineHeight: "40px",
                          width: "100%",
                          paddingLeft: "20px",
                          backgroundColor: "rgb(255, 255, 255)",
                        }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ boxSizing: "border-box", marginBottom: "20px" }}
                    >
                      <label
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          padding: "0.8rem 0px",
                          fontSize: "14px",
                          color: "rgb(17, 17, 17)",
                          textTransform: "capitalize",
                        }}
                      >
                        Your Message
                      </label>
                      <textarea
                        id="contactMessage"
                        className="pb-10"
                        name="contactMessage"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          resize: "vertical",
                          paddingBottom: "10px",
                          border: "1px solid rgb(235, 235, 235)",
                          outline: "0px",
                          lineHeight: "40px",
                          width: "100%",
                          paddingLeft: "20px",
                          backgroundColor: "rgb(255, 255, 255)",
                          height: "155px",
                        }}
                      />
                    </div>
                    <div
                      className="form-group mb-0"
                      style={{ boxSizing: "border-box", marginBottom: "0px" }}
                    >
                      <button
                        id="submit"
                        className="btn btn-dark btn--lg"
                        name="submit"
                        type="submit"
                        value="submit"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          appearance: "button",
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
                          outline: "0px",
                          cursor:
                            'url("data:image/png;base64,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") 9 1, pointer',
                        }}
                      >
                        {"submit"}
                      </button>
                    </div>
                  </form>
                </div>
                <p
                  className="form-message mt-10"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginBottom: "0px",
                    lineHeight: 1.715,
                    marginTop: "10px",
                  }}
                />
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
  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABsFJREFUWEft1mtQVOcZB/D/nsvuOcte2BvLTZb7IgK7EqnEJtpaatJOnNZEBg25fGguNS0pTqK1th/otA6xjmmrtVNtjdU2kQQZ03EiuWAwTpMIBnYRuWa5Cbtk2Qvs/XrOdmCGTJ1Oq1wmn3q+nud9nt95532f8wheqjFWlOi4S55gfMzmZB77TZPJhq/wEeyrLW2s3xY+kCRncK6d6BuzuSp+2zwV+qoMgvrHjcaHjXxnWYqH5gkOb9zI+HDS4vru8VZLZBHx0u5CdYxnUo+9efPWasME8wn31RoO1GxwN2Zn58DnncDJK9Lfv3LuVv38u/on1qZVFqlu5WUlKd/5yNnYcLrr4GoiFgAABEfqyttrNsxtIbk43IQaf/2Ae/no6z1HX9hR/vD+R8OtWVl5+KjHxr1vIn/QeKbz7GohFgHYv2t9eq52rrtmq0Yb99lhmiTj//iMrRcSifMPVRC2qjJGZLGz+NDkdc5YYzkNzf3+1UB8CZhP9uIuw47tpbMX9BksMcOnglVl4/ylgdNKJqzYuYl8NByTY9Y5hauDooGf/rlvHYDEShF3AF6uNT5eqXOelQijVKmhGB47BeiKcL3rdoR13RDpMpUQwg9nWIgr3cKdR1r6WlYNUFdTkrchK2rKycmSarVy0AEzHOdboCiOQPb1PXCgFJNdrchMS4Kb1uGQpJCvvHC1/FcXh3tWgljYgRd3Gx6oyPS/r5ZEWUOZDt32ZCTLScjtTkT8BcjWd2BwNh1qjIIVkvCEpXgzXhDl282GxpbhwRUB6r6TL0rNoNqrDOL7aVU2dHQ/jsw+B3PRC3htrBgMMQeSVaDXUwJFvBfhAAeNhkafTRhvM8fTjp4fdq4I8OvnDE0PFbprGG0RglY7NBQNXubANKmHlh9DUpoBgjkzWGUWxvzpoMMOOKYn4fOG0DaS/MjxJvM7KwL8qX6d98HNBqkWgxh/bw7l0QyMb42Ak66B1zcOuVAFsUwNQpCAJNiJJKkSfZ4izEzcwMUO+tvH3+ptWxHglbpvnt1VMfmUa1wGShEGSzMgRCGExH6UbMxD/4AbyZFM8AIGFHxIoSbQPVsCPjiDkdteT6eFrPtdk+lvy0UI5huQVhW7XKOXGoIJGsnJfeBTvgW/exCq9akgODsmerOgljJIig9CIlehrcuLZCkFuYyF1zWDyyaq2RGP7TlxbtC1VMjCLdhbXazMS0907LzPnc+QcSTEWQixJQh80YUwrUWGWglXIhW+WQeS5ULYR3qgkjOwO31Yt64QCf8E3utlrNf7fM8ca+5/dymILxvRT6rL9Jv0kY+3bwirQl4vgooqkODB8xzkmtT5FoyNhkwMm64hXREHzUhhn5lDgb4QwWkzIJKi06pNmMzWP/oCzn33+ku/oxP++LH7ikpyIy2PlMeKaXDgpCUgQuMQRW3wqL+PcDAArUYF5+g/QYkYkDSLmVkOPjIdLLwIR3kYtWO48Ak9NDBFPHn0dfONu+3GHYD54IZvgPKkGQ4+8SD/yzJdDGSCQzipAOZJKVQJC2QpuZjyiGC3uRDyOKBK08E/a0OO+HPo89WgBQKASODMFSI2ZBU9dfgNU9P/QvwHYDH4tYZtY5sKY9k+IhPjliFUFkkRDfsQotSYdnCIemeQkbsWiAUgYiXIyRSDn74CmiIhoCh8OhzDtX7xX35+6uazywLsrTZkBKPB3bXbNEcUyhQQAQsE4OCmiuC5bcEavREztjGkqJQgCIDjBVi7vhKR261wO0bhDAjR2iM99YtTPc8vC7C46ODThld3b+b3MspC+EM8uGgQIOXgYwFQSCDssUOTZ0TAZYOAFmJNXilGhm5CiT6ceFdy4NWmnsMrAsyfCWmpsf2ZKjwQjDMYD+XB57IhTa1CIhaEWKGBddgMqUINAUEhHPAgzqaA5S048wG56URz76crAizOhRtzme6vZXtSrdFCyAMd0N9fjaHPv1goKJZI4LKOIrNgPZxzHsS9AxhxJQ09fai3aMm34L8tqNtRumXr5tw2mYymSuirEIsYiIr3YMj8GRKIg2EkmLKYQbAqqORunGwV7vjDW+a3Vw0wn+hnTxr3P1vlOpylZEGQJMK8DGRONTou/x2MJht+rxvyJBcufSI82XDa9MO7FV+Yhu8l6N9jDj1vfLt+e+R7LAl4wxyswTzMBUlwgTHIZQlc/Jg+2eft+VFzM7h7yb1kQF1tvixNzHRtKQ7lUyQPuZiAJy7CwCQ52D1MHDzW3HPxXgovxiwZsHAoa8rXqmT8XoEgkXD7MRqJEddONJuuL2dKXhZgKV94t9j/A/4FirzBP7oQid8AAAAASUVORK5CYII=") 1 0, auto;
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
