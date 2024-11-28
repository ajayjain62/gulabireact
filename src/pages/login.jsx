import React from "react";
import Link from "react-router-dom";

export default function Component() {
  return (
    <>
      <div
        className="login-register-area pt-80 pb-80"
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
              className="col-lg-7 col-md-12 ms-auto me-auto"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "58.3333%",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <div
                className="login-register-wrapper"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="login-register-tab-list nav"
                  role="tablist"
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    flexWrap: "wrap",
                    paddingLeft: "0px",
                    display: "flex",
                    WebkitBoxPack: "center",
                    justifyContent: "center",
                    marginBottom: "40px",
                  }}
                >
                  <Link 
                    className="active"
                    aria-selected="true"
                    to="/login"
                    role="tab"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "0.3s",
                      position: "relative",
                      cursor:
                        'url("data:image/png;base64,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") 9 1, pointer',
                    }}
                  >
                    <h4
                      style={{
                        boxSizing: "border-box",
                        fontFamily: "Raleway",
                        lineHeight: 1.25,
                        margin: "0px 20px",
                        transition: "0.3s",
                        fontSize: "25px",
                        fontWeight: 700,
                        marginTop: "0px",
                        marginBottom: "0px",
                        textTransform: "capitalize",
                        color: "rgb(107, 63, 79)",
                        cursor:
                          'url("data:image/png;base64,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") 9 1, pointer',
                      }}
                    >
                      login
                    </h4>
                  </Link>
                  <a
                    aria-selected="false"
                    href="http://127.0.0.1:5500/login.html#lg2"
                    role="tab"
                    tabIndex="-1"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "0.3s",
                      position: "relative",
                      cursor:
                        'url("data:image/png;base64,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") 9 1, pointer',
                    }}
                  >
                    <h4
                      style={{
                        boxSizing: "border-box",
                        fontFamily: "Raleway",
                        lineHeight: 1.25,
                        margin: "0px 20px",
                        transition: "0.3s",
                        fontSize: "25px",
                        fontWeight: 700,
                        marginTop: "0px",
                        marginBottom: "0px",
                        textTransform: "capitalize",
                        color: "rgb(17, 17, 17)",
                        cursor:
                          'url("data:image/png;base64,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") 9 1, pointer',
                      }}
                    >
                      register
                    </h4>
                  </a>
                </div>
                <div
                  className="tab-content"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    id="lg1"
                    className="tab-pane active"
                    role="tabpanel"
                    style={{ boxSizing: "border-box", display: "block" }}
                  >
                    <div
                      className="login-form-container"
                      style={{
                        boxSizing: "border-box",
                        background: "none 0px 0px repeat scroll transparent",
                        padding: "80px",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 6px",
                        textAlign: "left",
                      }}
                    >
                      <div
                        className="login-register-form"
                        style={{ boxSizing: "border-box" }}
                      >
                        <form
                          action="assets/php/contact.php"
                          method="post"
                          style={{ boxSizing: "border-box" }}
                        >
                          <input
                            name="user-name"
                            type="text"
                            placeholder="Username"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              lineHeight: "inherit",
                              transition: "0.3s",
                              border: "1px solid rgb(235, 235, 235)",
                              padding: "0px 15px",
                              outline: "none",
                              backgroundColor: "transparent",
                              color: "rgb(102, 102, 102)",
                              fontSize: "14px",
                              height: "45px",
                              marginBottom: "30px",
                              width: "100%",
                            }}
                          />
                          <input
                            name="user-password"
                            type="password"
                            placeholder="Password"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              lineHeight: "inherit",
                              transition: "0.3s",
                              border: "1px solid rgb(235, 235, 235)",
                              padding: "0px 15px",
                              outline: "none",
                              backgroundColor: "transparent",
                              color: "rgb(102, 102, 102)",
                              fontSize: "14px",
                              height: "45px",
                              marginBottom: "30px",
                              width: "100%",
                            }}
                          />
                          <div
                            className="button-box"
                            style={{ boxSizing: "border-box" }}
                          >
                            <div
                              className="login-toggle-btn"
                              style={{
                                boxSizing: "border-box",
                                padding: "10px 0px 19px",
                              }}
                            >
                              <input
                                id="remember"
                                type="checkbox"
                                style={{
                                  boxSizing: "border-box",
                                  fontFamily: "inherit",
                                  lineHeight: "inherit",
                                  transition: "0.3s",
                                  border: "1px solid rgb(235, 235, 235)",
                                  padding: "0px 15px",
                                  outline: "none",
                                  backgroundColor: "transparent",
                                  color: "rgb(102, 102, 102)",
                                  fontSize: "14px",
                                  margin: "0px",
                                  height: "15px",
                                  marginBottom: "0px",
                                  position: "relative",
                                  top: "1px",
                                  width: "17px",
                                }}
                              />
                              <label
                                htmlFor="remember"
                                style={{
                                  boxSizing: "border-box",
                                  display: "inline-block",
                                  color: "rgb(17, 17, 17)",
                                  fontSize: "15px",
                                  fontWeight: 400,
                                }}
                              >
                                Remember me
                              </label>
                              <a
                                href="http://127.0.0.1:5500/login.html#"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  transition: "0.3s",
                                  color: "rgb(17, 17, 17)",
                                  cssFloat: "right",
                                  fontSize: "14px",
                                  cursor:
                                    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABqdJREFUWEe91nlsk+cdB/Cv39N34mDHSQi5Dychh+OoEEEYdKRqu0Gp2lDopTJ1m8QgHNsYXbWOTZUmigqUgFZVrVY6SMcsgUjbUNIWEpLVrARi5yB3QprLcbAT38d7eGqkoU6a8kdt8f77vr/n93l+v+d9nkeCZZ7ddcXKvGT681ytx9Q2nPDy8Uarebnvf8g7yXJBr++qPFr/BHEoFHDgdIvmD8cabW/+kCTLxSwLOHuobOLZR5wZI3YKH9zQvHLqn9azDw3wWl2eboNJ7dhUKqC1O4TPe5jck409Yw8NcPjF4rwnjMxwVaYDrXdZfNmjTj9htk0/NMBrdUZdTYXg+LGRgKU/gsud9OooGXFJJeyvomJ04Oh527l4YP7vGti/01itVYT2VeZIn9tkcKJ3QoBlVDOVk8pqS3T3pU1WVWB8UVIaj5Y8APx6Z4GWpqQHVSyfn6sNbStJ4ah5vxSGTA4zLgIuP4O1RSyudIaxuToRzZ30VFNve5bZDCGWSkgOPl/xZOlK4QwZ9a/KTxZIKS1ikcqGTK6EQCqQpmSg9pfg2ngPXAu3xOoShihOFWGxr8LFdkf6iY9iWxeSt/etsWzbmLXWHxKhFZ3gORZQ+dBO/gwMb0fpGIFU0150Xj/FXx0zn/rT88GDviCLm/fUQotlIavhYvdUTBW4+Galf63WK2dJAr5JA3Q5mejytcP6IwtMng8h/H0B2Rk/R9S0G5cu34HJkAhNQiLauuyBbhefceajAWdMgL/uL7rx0mNP14hRN5zXh5FeVYVR91lckB7Gs4pmEPN9CAULkKXvRZe3CoRnEnqVD90TEsEyqqo5ae6yxAQ4+svic88Zk17gyAgiYQcYVgVVxgqQDAMuEAY13wOZOhl9XgNmx/qRIg9AoaQxbifRMaooONZoHY4JcGRXacOB2uk9oiiBkFgFn38RsrJHoUn7Cdy3fg/eCyhlLP5tG0dWMsBSwFA0A92FT4W/vG1O/Wx3x0JMgL3bjfV/3r74DkIeRJRGeHwu5NTWQpRuxEz7ewAnQQJlR9cEhWRiEmoViT5FBZqVRbzY9Gnm6dNdM7EB6ozFL24M9eUlOBFKXA/RNwMn64YgoZDGlkAioSEXJxBhUjE6PA4iOIdFQcFf+1rc8JdLAzH1/zv40kb0Tn3pF7s2eDYHkx5DNOiGIEYgggZLScBxPJhgD1YoJbjpqYbccR1NVtWVN/7W92QsM/9v7BLg8CvVbx3a6vttRGDA03pQJI2oLBm0MhXMrBkKGQmbuwQL33bC7pV7bo3AGI9t+EEF3n1jS0dd+fg6jYyDKEYRCEUxTD4OKhqEViPB4NAsIvZOpGcbMDYbEdusYf3bH9++H7cK7HmmsGqNMfOGqWiFTEqJIAgKA/fuo6wkHzMjdyCjIyBIGoJEhpB7Eh+2qXacNt+5EDfAdwM1vl7kzc9OUxKcA5pEDUQhCF3OOjiGroNgZCAJEnafHHkrnDjzGf/BH9/vfjVugCMbQVXWloWKCtLIYCAIFm4EpAY455ygZUpo1DzCc/0oLCkFvziClh5iYscRW1bcAIe2Fqo2r5d5HsmLYCqwCoGoAvbRISSlrESU5+B0eVFcvgqCyIBydeI+nw7ztYXC4xdsQ7Eilv6CfTtX67dUMfZ0TQhhtQkSQo75ERt0OQYQBAHX5ChYbQb6rDbUVGdgPqDApSuDe46dt56JC+A3L5VlV1fmjpkKaDR/8i88tbUG9wZHIddnYXF2Gjq9FkqNDuL0p/CxmdBIvbhsoS/vOdm9LS6AAzvLS7ZWuHrVKjXyEmbBZNeh+7YNianZ8C3MgWZkUGmSkUr3g426l3J+YqPcx6/2aFtbwceCWGrBgR3Gqldrw7eKUkQE/W4weS/jdkcrUvLKMD8xCJJmoElOR0pCGJSnExRF4moPgZY7zLrj/7B+HTOgfnv5pl2b+WsV6QKCfg+Y4r2w3mgGq9ZhYWYEikQ95HI5CirWIjTQgLsONfgQh49vqutPXehqiBmw+5nKLT8t9zSt1JPITfJCVv479H/zFQSeg3t+Gik5q7Ew9y1S8yvQ/00LkpQcrLPKke7JoKnh/IgnZsDeOqPOkCV8tT7fXzozzSGtcA04v3PpYup1zkEgSHC0FuGAB+nqKVhG5GO9E9HaeJwHD67lR7aY5KKOf2tDmfALrTxE+0IsRI4EJVVAQoSgV3gw5ZGKbTb6nGsxcuCE+a4rlpn/z2n4/YH276jIIiR4wbBSrFGrkQ2IhN9PTAxOEx08F22Mx+bz/Xz/AY6mxT/6gtKUAAAAAElFTkSuQmCC") 9 1, pointer',
                                }}
                              >
                                Forgot Password?
                              </a>
                            </div>
                            <button
                              className="btn btn-dark btn--md"
                              type="submit"
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
                                padding: "10px 25px",
                                outline: "0px",
                                cursor:
                                  'url("data:image/png;base64,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") 9 1, pointer',
                              }}
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "inline-block",
                                }}
                              >
                                Login
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    id="lg2"
                    className="tab-pane"
                    role="tabpanel"
                    style={{ boxSizing: "border-box", display: "none" }}
                  >
                    <div
                      className="login-form-container"
                      style={{
                        boxSizing: "border-box",
                        background: "none 0px 0px repeat scroll transparent",
                        padding: "80px",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 6px",
                        textAlign: "left",
                      }}
                    >
                      <div
                        className="login-register-form"
                        style={{ boxSizing: "border-box" }}
                      >
                        <form
                          action="assets/php/contact.php"
                          method="post"
                          style={{ boxSizing: "border-box" }}
                        >
                          <input
                            name="user-name"
                            type="text"
                            placeholder="Username"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              lineHeight: "inherit",
                              transition: "0.3s",
                              border: "1px solid rgb(235, 235, 235)",
                              padding: "0px 15px",
                              outline: "none",
                              backgroundColor: "transparent",
                              color: "rgb(102, 102, 102)",
                              fontSize: "14px",
                              height: "45px",
                              marginBottom: "30px",
                              width: "100%",
                            }}
                          />
                          <input
                            name="user-password"
                            type="password"
                            placeholder="Password"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              lineHeight: "inherit",
                              transition: "0.3s",
                              border: "1px solid rgb(235, 235, 235)",
                              padding: "0px 15px",
                              outline: "none",
                              backgroundColor: "transparent",
                              color: "rgb(102, 102, 102)",
                              fontSize: "14px",
                              height: "45px",
                              marginBottom: "30px",
                              width: "100%",
                            }}
                          />
                          <input
                            name="user-email"
                            type="email"
                            placeholder="Email"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              lineHeight: "inherit",
                              transition: "0.3s",
                              border: "1px solid rgb(235, 235, 235)",
                              padding: "0px 15px",
                              outline: "none",
                              backgroundColor: "transparent",
                              color: "rgb(102, 102, 102)",
                              fontSize: "14px",
                              height: "45px",
                              marginBottom: "30px",
                              width: "100%",
                            }}
                          />
                          <div
                            className="button-box"
                            style={{ boxSizing: "border-box" }}
                          >
                            <button
                              className="btn btn-dark btn--md"
                              type="submit"
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
                                padding: "10px 25px",
                                outline: "0px",
                                cursor:
                                  'url("data:image/png;base64,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") 9 1, pointer',
                              }}
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "inline-block",
                                }}
                              >
                                Register
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
