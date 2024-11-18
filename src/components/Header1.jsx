import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="container-fluid header-main"
        style={{
          boxSizing: "border-box",
          outline: "none",
          marginRight: "auto",
          marginLeft: "auto",
          background: "rgb(255, 255, 255)",
          padding: "0px 35px 0px 40px",
          paddingLeft: "40px",
          paddingRight: "35px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 6px 0px",
          position: "fixed",
          top: "0px",
          width: "100%",
          left: "0px",
          zIndex: 9,
          paddingBottom: "0px",
        }}
      >
        <div
          className="global-search-block"
          style={{
            boxSizing: "border-box",
            outline: "none",
            margin: "20px 0px 0px",
            cssFloat: "right",
            position: "relative",
          }}
        >
          <button
            id="cipla_search_button"
            className="button js-form-submit form-submit btn-primary btn icon-only"
            value="0"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              font: "inherit",
              overflow: "visible",
              appearance: "button",
              padding: "6px 12px",
              whiteSpace: "nowrap",
              borderRadius: "4px",
              marginBottom: "0px",
              fontSize: "14px",
              textAlign: "center",
              verticalAlign: "middle",
              touchAction: "manipulation",
              cursor: "pointer",
              userSelect: "none",
              borderColor: "rgb(46, 109, 164)",
              fontVariant: "normal",
              fontStyle: "normal",
              fontWeight: "normal",
              textTransform: "none",
              lineHeight: 1,
              WebkitFontSmoothing: "antialiased",
              border: "none",
              background: "none",
              outline: "none",
              backgroundImage: "none",
              backgroundColor: "initial",
              color: "rgb(0, 0, 0)",
              boxShadow: "none",
              display: "none",
              fontFamily: "icomoon",
            }}
          >
            <span
              className="icon glyphicon glyphicon-search"
              aria-hidden="true"
              style={{
                boxSizing: "border-box",
                outline: "none",
                position: "relative",
                top: "1px",
                display: "inline-block",
                fontFamily: '"Glyphicons Halflings"',
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: 1,
                WebkitFontSmoothing: "antialiased",
              }}
            />
          </button>
          <div
            className="global-cipla-search-wrapper"
            style={{
              boxSizing: "border-box",
              outline: "none",
              background: "rgb(255, 255, 255)",
              padding: "0px",
              borderRadius: "30px",
              position: "relative",
              top: "auto",
              right: "auto",
              width: "150px",
              border: "none",
              display: "block",
            }}
          >
            <form
              id="search-block-form"
              className="search-block-form"
              acceptCharset="UTF-8"
              action="/search/node"
              method="get"
              style={{ boxSizing: "border-box", outline: "none" }}
            >
              <div
                className="form-item js-form-item form-type-search js-form-type-search form-item-keys js-form-item-keys form-no-label form-group"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  marginBottom: "0px",
                }}
              >
                <label
                  className="control-label sr-only"
                  htmlFor="edit-keys"
                  style={{
                    boxSizing: "border-box",
                    outline: "none",
                    display: "inline-block",
                    maxWidth: "100%",
                    fontWeight: 700,
                    border: "0px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: "0px",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    height: "1px",
                    marginBottom: "-1px",
                    position: "absolute",
                    width: "1px",
                  }}
                >
                  Search
                </label>
                <div
                  className="input-group"
                  style={{
                    boxSizing: "border-box",
                    outline: "none",
                    position: "relative",
                    display: "table",
                    borderCollapse: "separate",
                  }}
                >
                  <input
                    id="edit-keys"
                    className="form-search form-control"
                    name="keys"
                    type="search"
                    maxLength="128"
                    placeholder="Search"
                    size={15}
                    style={{
                      outline: "none",
                      overflow: "visible",
                      margin: "0px",
                      font: "inherit",
                      fontFamily: "inherit",
                      outlineOffset: "-2px",
                      padding: "6px 12px",
                      transition:
                        "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                      fontSize: "14px",
                      lineHeight: 1.42857,
                      boxSizing: "border-box",
                      appearance: "none",
                      position: "relative",
                      zIndex: 2,
                      cssFloat: "left",
                      width: "100%",
                      marginBottom: "0px",
                      display: "table-cell",
                      border: "none",
                      background: "rgb(3, 94, 166)",
                      borderRadius: "30px",
                      height: "30px",
                      boxShadow: "none",
                      backgroundImage: "initial",
                      backgroundColor: "rgb(3, 94, 166)",
                      color: "rgb(255, 255, 255)",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                  />
                  <span
                    className="input-group-btn"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      display: "table-cell",
                      width: "1%",
                      verticalAlign: "middle",
                      whiteSpace: "nowrap",
                      position: "relative",
                      fontSize: "0px",
                    }}
                  >
                    <button
                      className="button js-form-submit form-submit btn-primary btn icon-only"
                      type="submit"
                      value="Search"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        font: "inherit",
                        overflow: "visible",
                        appearance: "button",
                        padding: "6px 12px",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        marginBottom: "0px",
                        fontSize: "14px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        touchAction: "manipulation",
                        cursor: "pointer",
                        userSelect: "none",
                        borderColor: "rgb(46, 109, 164)",
                        color: "rgb(255, 255, 255)",
                        fontVariant: "normal",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textTransform: "none",
                        lineHeight: 1,
                        WebkitFontSmoothing: "antialiased",
                        position: "relative",
                        background: "rgb(0, 90, 165)",
                        border: "none",
                        outline: "none",
                        height: "30px",
                        backgroundImage: "initial",
                        backgroundColor: "rgb(0, 90, 165)",
                        boxShadow: "none",
                        borderRadius: "30px",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                        zIndex: 2,
                        marginLeft: "-1px",
                        fontFamily: "icomoon",
                      }}
                    >
                      <span
                        className="sr-only"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          border: "0px",
                          margin: "-1px",
                          overflow: "hidden",
                          padding: "0px",
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: "1px",
                          position: "absolute",
                          width: "1px",
                        }}
                      >
                        Search
                      </span>
                      <span
                        className="icon glyphicon glyphicon-search"
                        aria-hidden="true"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          position: "relative",
                          top: "1px",
                          display: "inline-block",
                          fontFamily: '"Glyphicons Halflings"',
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: 1,
                          WebkitFontSmoothing: "antialiased",
                        }}
                      />
                    </button>
                  </span>
                </div>
              </div>
              <div
                id="edit-actions"
                className="form-actions form-group js-form-wrapper form-wrapper"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  marginBottom: "0px",
                }}
              />
            </form>
          </div>
        </div>
        <div
          id="site-branding"
          className="logo-holder pull-left"
          style={{
            boxSizing: "border-box",
            outline: "none",
            zIndex: 500,
            position: "relative",
            paddingTop: "16px",
            cssFloat: "left",
          }}
        >
          <a
            className="logo navbar-btn"
            href="https://www.cipla.com/"
            rel="home"
            title="Home"
            style={{
              boxSizing: "border-box",
              backgroundColor: "transparent",
              textDecoration: "none",
              color: "rgb(51, 122, 183)",
              marginTop: "8px",
              marginBottom: "8px",
              outline: "none",
            }}
          >
            <img
              alt="Home"
              src="https://www.cipla.com/themes/cipla/logo.svg"
              style={{
                boxSizing: "border-box",
                outline: "none",
                borderStyle: "none",
                border: "0px",
                verticalAlign: "middle",
                height: "auto",
                maxWidth: "110px",
              }}
            />
          </a>
        </div>
        <section
          id="block-mainnavigation"
          className="block block-we-megamenu-blockmain clearfix"
          style={{
            boxSizing: "border-box",
            outline: "none",
            display: "block",
            cssFloat: "right",
            paddingTop: "0px",
          }}
        >
          <div
            className="region-we-mega-menu"
            style={{ boxSizing: "border-box", outline: "none" }}
          >
            <a
              className="navbar-toggle collapsed"
              aria-label="main navigation"
              href="https://www.cipla.com/#"
              rel="nofollow"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                color: "rgb(51, 122, 183)",
                padding: "9px 10px",
                border: "1px solid transparent",
                borderRadius: "4px",
                position: "relative",
                cssFloat: "right",
                marginTop: "8px",
                marginRight: "15px",
                marginBottom: "8px",
                backgroundColor: "transparent",
                backgroundImage: "none",
                display: "none",
                outline: "none",
              }}
            >
              <span
                className="icon-bar"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  fontVariant: "normal",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  textTransform: "none",
                  lineHeight: 1,
                  WebkitFontSmoothing: "antialiased",
                  borderRadius: "1px",
                  display: "block",
                  width: "22px",
                  height: "2px",
                  fontFamily: "icomoon",
                }}
              />
              <span
                className="icon-bar"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  fontVariant: "normal",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  textTransform: "none",
                  lineHeight: 1,
                  WebkitFontSmoothing: "antialiased",
                  borderRadius: "1px",
                  display: "block",
                  width: "22px",
                  height: "2px",
                  marginTop: "4px",
                  fontFamily: "icomoon",
                }}
              />
              <span
                className="icon-bar"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  fontVariant: "normal",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  textTransform: "none",
                  lineHeight: 1,
                  WebkitFontSmoothing: "antialiased",
                  borderRadius: "1px",
                  display: "block",
                  width: "22px",
                  height: "2px",
                  marginTop: "4px",
                  fontFamily: "icomoon",
                }}
              />
            </a>
            <nav
              className="main navbar navbar-default navbar-we-mega-menu mobile-collapse hover-action"
              style={{
                boxSizing: "border-box",
                outline: "none",
                display: "block",
                borderColor: "rgb(231, 231, 231)",
                padding: "0px",
                borderRadius: "0px",
                position: "static",
                background: "transparent",
                border: "none",
                backgroundColor: "transparent",
                marginBottom: "0px",
                minHeight: "auto",
              }}
            >
              <div
                className="container-fluid"
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  marginRight: "auto",
                  marginLeft: "auto",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <ul
                  className="we-mega-menu-ul nav nav-tabs"
                  style={{
                    boxSizing: "border-box",
                    outline: "none",
                    listStyle: "none",
                    margin: "0px",
                    padding: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    paddingLeft: "0px",
                    display: "flex",
                    position: "static",
                    marginRight: "10px",
                    borderBottom: "0px none",
                  }}
                >
                  <li
                    className="we-mega-menu-li dropdown-menu header-global-link header-main-menu"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      listStyle: "none",
                      left: "0px",
                      textAlign: "left",
                      cssFloat: "left",
                      borderRadius: "0px",
                      minWidth: "initial",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      padding: "0px",
                      boxShadow: "none",
                      display: "flex",
                      top: "auto",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      zIndex: 21,
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "0px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      borderLeft: "0px none",
                      background: "transparent",
                      border: "none",
                      backgroundClip: "initial",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <a
                      className="we-mega-menu-li"
                      href="https://www.cipla.com/about-us"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        lineHeight: 1.42857,
                        boxShadow: "none",
                        position: "relative",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        borderRadius: "0px",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        cursor: "pointer",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        outline: "none",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {"About Us"}
                    </a>
                    <div
                      className="we-mega-menu-submenu submenu-left"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        position: "absolute",
                        borderRadius: "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "0px",
                        margin: "0px",
                        borderTop: "2px solid rgb(221, 221, 221)",
                        transition: "0.4s ease-in-out",
                        width: "100%",
                        zIndex: 20,
                        right: "0px",
                        marginTop: "32px",
                        top: "35px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        minWidth: "270px",
                        visibility: "hidden",
                        opacity: 0,
                        marginLeft: "0px",
                        boxShadow: "none",
                        border: "1px solid rgb(221, 221, 221)",
                        left: "auto",
                      }}
                    >
                      <div
                        className="we-mega-menu-submenu-inner"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          margin: "0px auto",
                          maxWidth: "670px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          minHeight: "auto",
                        }}
                      >
                        <div
                          className="we-mega-menu-row"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginLeft: "-1.06383%",
                            marginRight: "-1.06383%",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            className="we-mega-menu-col span12 submenu-right"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              transition: "0.1s",
                              minHeight: "1.875rem",
                              marginTop: "0.3125rem",
                              marginBottom: "0.3125rem",
                              border: "0px none",
                              backgroundColor: "transparent",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              marginLeft: "1.06383%",
                              marginRight: "1.06383%",
                              flex: "0 0 97.8723%",
                              WebkitBoxFlex: "0",
                              maxWidth: "97.8723%",
                            }}
                          >
                            <ul
                              className="nav nav-tabs subul"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                listStyle: "none",
                                margin: "0px",
                                marginTop: "0px",
                                marginBottom: "0px",
                                borderBottom: "0px none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/about-us/onecipla-credo"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Our Credo"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li dropdown-menu"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  margin: "2px 0px 0px",
                                  listStyle: "none",
                                  left: "0px",
                                  zIndex: 1000,
                                  textAlign: "left",
                                  marginBottom: "-1px",
                                  borderRadius: "0px",
                                  minWidth: "initial",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                  marginTop: "0px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  top: "auto",
                                  cursor: "pointer",
                                  position: "static",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  backgroundClip: "initial",
                                  backgroundColor: "transparent",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/about-us/board-directors"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    position: "relative",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Board of Directors"}
                                </a>
                                <div
                                  className="we-mega-menu-submenu sub-menu-level2"
                                  style={{
                                    boxSizing: "border-box",
                                    outline: "none",
                                    borderRadius: "0px",
                                    padding: "0px",
                                    borderTop: "2px solid rgb(221, 221, 221)",
                                    transition: "0.4s ease-in-out",
                                    width: "100%",
                                    margin: "0px",
                                    zIndex: 20,
                                    marginLeft: "0px",
                                    right: "0px",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    minWidth: "270px",
                                    visibility: "hidden",
                                    opacity: 0,
                                    background: "transparent",
                                    position: "relative",
                                    top: "0px",
                                    backgroundColor: "transparent",
                                    marginBottom: "-6px",
                                    boxShadow: "none",
                                    border: "none",
                                    marginTop: "6px",
                                    left: "-15px",
                                  }}
                                >
                                  <div
                                    className="we-mega-menu-submenu-inner"
                                    style={{
                                      boxSizing: "border-box",
                                      outline: "none",
                                      margin: "0px auto",
                                      maxWidth: "670px",
                                      paddingTop: "0px",
                                      paddingBottom: "0px",
                                      minHeight: "auto",
                                    }}
                                  >
                                    <div
                                      className="we-mega-menu-row"
                                      style={{
                                        boxSizing: "border-box",
                                        outline: "none",
                                        marginLeft: "-1.06383%",
                                        marginRight: "-1.06383%",
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <div
                                        className="we-mega-menu-col span12"
                                        style={{
                                          boxSizing: "border-box",
                                          outline: "none",
                                          transition: "0.1s",
                                          minHeight: "1.875rem",
                                          marginTop: "0.3125rem",
                                          marginBottom: "0.3125rem",
                                          border: "0px none",
                                          backgroundColor: "transparent",
                                          display: "flex",
                                          flexDirection: "column",
                                          position: "relative",
                                          marginLeft: "1.06383%",
                                          marginRight: "1.06383%",
                                          flex: "0 0 97.8723%",
                                          WebkitBoxFlex: "0",
                                          maxWidth: "97.8723%",
                                        }}
                                      >
                                        <ul
                                          className="nav nav-tabs subul"
                                          style={{
                                            boxSizing: "border-box",
                                            outline: "none",
                                            listStyle: "none",
                                            margin: "0px",
                                            marginTop: "0px",
                                            marginBottom: "0px",
                                            borderBottom: "0px none",
                                            padding: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              marginBottom: "0px",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom: "none",
                                              borderTop:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/about-us/board-directors/committees-board"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Committees of the Board"}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/about-us/management-council"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Management Council"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/about-us/manufacturing"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Manufacturing"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/about-us/quality"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Quality"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/about-us/code-conduct"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Code of Conduct"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/about-us/cipla-archive"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Our History - Cipla Archives"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  marginBottom: "0px",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "none",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/about-us/milestones-and-awards"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Milestones and Awards"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="we-mega-menu-li dropdown-menu header-global-link header-main-menu we-megamenu-nolink non-clickable"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      listStyle: "none",
                      left: "0px",
                      textAlign: "left",
                      cssFloat: "left",
                      borderRadius: "0px",
                      minWidth: "initial",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      padding: "0px",
                      boxShadow: "none",
                      display: "flex",
                      top: "auto",
                      margin: "0px",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "0px",
                      marginBottom: "0px",
                      zIndex: 21,
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "0px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "none",
                      backgroundClip: "initial",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <a
                      className="we-mega-menu-li"
                      href="https://www.cipla.com/#"
                      rel="nofollow"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        lineHeight: 1.42857,
                        boxShadow: "none",
                        position: "relative",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        borderRadius: "0px",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        cursor: "pointer",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        outline: "none",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {"Our Presence"}
                    </a>
                    <div
                      className="we-mega-menu-submenu submenu-scroll"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        position: "absolute",
                        borderRadius: "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "0px",
                        margin: "0px",
                        borderTop: "2px solid rgb(221, 221, 221)",
                        transition: "0.4s ease-in-out",
                        width: "100%",
                        overflow: "hidden auto",
                        height: "520px",
                        zIndex: 20,
                        marginLeft: "0px",
                        right: "0px",
                        marginTop: "32px",
                        top: "35px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        minWidth: "270px",
                        visibility: "hidden",
                        opacity: 0,
                        boxShadow: "none",
                        border: "1px solid rgb(221, 221, 221)",
                        left: "auto",
                      }}
                    >
                      <div
                        className="we-mega-menu-submenu-inner"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          margin: "0px auto",
                          maxWidth: "670px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          minHeight: "auto",
                        }}
                      >
                        <div
                          className="we-mega-menu-row"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginLeft: "-1.06383%",
                            marginRight: "-1.06383%",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            className="we-mega-menu-col span12"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              transition: "0.1s",
                              minHeight: "1.875rem",
                              marginTop: "0.3125rem",
                              marginBottom: "0.3125rem",
                              border: "0px none",
                              backgroundColor: "transparent",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              marginLeft: "1.06383%",
                              marginRight: "1.06383%",
                              flex: "0 0 97.8723%",
                              WebkitBoxFlex: "0",
                              maxWidth: "97.8723%",
                            }}
                          >
                            <ul
                              className="nav nav-tabs subul"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                listStyle: "none",
                                margin: "0px",
                                marginTop: "0px",
                                marginBottom: "0px",
                                borderBottom: "0px none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/our-presence/australia"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Australia"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/our-presence/brazil"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Brazil"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/our-presence/europe"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Europe"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://cipla.co.ke/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Kenya"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/cipla-malaysia"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Malaysia"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/cipla-morocco"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Morocco"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/cipla-nepal"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Nepal"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.co.za/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"South Africa"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://ciplaspain.com/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Spain"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/cipla-srilanka"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Sri Lanka"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://uk.cipla.com/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"United Kingdom"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://usa.cipla.com/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"USA"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.co.za/about-cipla/cipla-ghana"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Ghana"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  marginBottom: "0px",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "none",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://germany.cipla.com/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Germany"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="we-mega-menu-li dropdown-menu header-global-link header-main-menu"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      listStyle: "none",
                      left: "0px",
                      textAlign: "left",
                      cssFloat: "left",
                      borderRadius: "0px",
                      minWidth: "initial",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      padding: "0px",
                      boxShadow: "none",
                      display: "flex",
                      top: "auto",
                      margin: "0px",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "0px",
                      marginBottom: "0px",
                      zIndex: 21,
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "0px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "none",
                      backgroundClip: "initial",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <a
                      className="we-mega-menu-li"
                      href="https://www.cipla.com/our-offerings"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        lineHeight: 1.42857,
                        boxShadow: "none",
                        position: "relative",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        borderRadius: "0px",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        cursor: "pointer",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        outline: "none",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {"Our Offerings"}
                    </a>
                    <div
                      className="we-mega-menu-submenu submenu-scroll"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        position: "absolute",
                        borderRadius: "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "0px",
                        margin: "0px",
                        borderTop: "2px solid rgb(221, 221, 221)",
                        transition: "0.4s ease-in-out",
                        width: "100%",
                        overflow: "hidden auto",
                        height: "520px",
                        zIndex: 20,
                        marginLeft: "0px",
                        right: "0px",
                        marginTop: "32px",
                        top: "35px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        minWidth: "270px",
                        visibility: "hidden",
                        opacity: 0,
                        boxShadow: "none",
                        border: "1px solid rgb(221, 221, 221)",
                        left: "auto",
                      }}
                    >
                      <div
                        className="we-mega-menu-submenu-inner"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          margin: "0px auto",
                          maxWidth: "670px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          minHeight: "auto",
                        }}
                      >
                        <div
                          className="we-mega-menu-row"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginLeft: "-1.06383%",
                            marginRight: "-1.06383%",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            className="we-mega-menu-col span12 submenu-right"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              transition: "0.1s",
                              minHeight: "1.875rem",
                              marginTop: "0.3125rem",
                              marginBottom: "0.3125rem",
                              border: "0px none",
                              backgroundColor: "transparent",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              marginLeft: "1.06383%",
                              marginRight: "1.06383%",
                              flex: "0 0 97.8723%",
                              WebkitBoxFlex: "0",
                              maxWidth: "97.8723%",
                            }}
                          >
                            <ul
                              className="nav nav-tabs subul"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                listStyle: "none",
                                margin: "0px",
                                marginTop: "0px",
                                marginBottom: "0px",
                                borderBottom: "0px none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="we-mega-menu-li dropdown-menu"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  margin: "2px 0px 0px",
                                  listStyle: "none",
                                  left: "0px",
                                  zIndex: 1000,
                                  textAlign: "left",
                                  marginBottom: "-1px",
                                  borderRadius: "0px",
                                  minWidth: "initial",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                  marginTop: "0px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  top: "auto",
                                  cursor: "pointer",
                                  position: "static",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  backgroundClip: "initial",
                                  backgroundColor: "transparent",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/our-offerings/our-therapies"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    position: "relative",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Our Therapies"}
                                </a>
                                <div
                                  className="we-mega-menu-submenu sub-menu-level2"
                                  style={{
                                    boxSizing: "border-box",
                                    outline: "none",
                                    borderRadius: "0px",
                                    padding: "0px",
                                    borderTop: "2px solid rgb(221, 221, 221)",
                                    transition: "0.4s ease-in-out",
                                    width: "100%",
                                    margin: "0px",
                                    zIndex: 20,
                                    marginLeft: "0px",
                                    right: "0px",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    minWidth: "270px",
                                    visibility: "hidden",
                                    opacity: 0,
                                    background: "transparent",
                                    position: "relative",
                                    top: "0px",
                                    backgroundColor: "transparent",
                                    marginBottom: "-6px",
                                    boxShadow: "none",
                                    border: "none",
                                    marginTop: "6px",
                                    left: "-15px",
                                  }}
                                >
                                  <div
                                    className="we-mega-menu-submenu-inner"
                                    style={{
                                      boxSizing: "border-box",
                                      outline: "none",
                                      margin: "0px auto",
                                      maxWidth: "670px",
                                      paddingTop: "0px",
                                      paddingBottom: "0px",
                                      minHeight: "auto",
                                    }}
                                  >
                                    <div
                                      className="we-mega-menu-row"
                                      style={{
                                        boxSizing: "border-box",
                                        outline: "none",
                                        marginLeft: "-1.06383%",
                                        marginRight: "-1.06383%",
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <div
                                        className="we-mega-menu-col span12"
                                        style={{
                                          boxSizing: "border-box",
                                          outline: "none",
                                          transition: "0.1s",
                                          minHeight: "1.875rem",
                                          marginTop: "0.3125rem",
                                          marginBottom: "0.3125rem",
                                          border: "0px none",
                                          backgroundColor: "transparent",
                                          display: "flex",
                                          flexDirection: "column",
                                          position: "relative",
                                          marginLeft: "1.06383%",
                                          marginRight: "1.06383%",
                                          flex: "0 0 97.8723%",
                                          WebkitBoxFlex: "0",
                                          maxWidth: "97.8723%",
                                        }}
                                      >
                                        <ul
                                          className="nav nav-tabs subul"
                                          style={{
                                            boxSizing: "border-box",
                                            outline: "none",
                                            listStyle: "none",
                                            margin: "0px",
                                            marginTop: "0px",
                                            marginBottom: "0px",
                                            borderBottom: "0px none",
                                            padding: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <li
                                            className="we-mega-menu-li dropdown-menu"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              margin: "2px 0px 0px",
                                              listStyle: "none",
                                              left: "0px",
                                              zIndex: 1000,
                                              textAlign: "left",
                                              marginBottom: "-1px",
                                              borderRadius: "0px",
                                              borderTopLeftRadius: "0px",
                                              borderTopRightRadius: "0px",
                                              marginTop: "0px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              top: "auto",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              minWidth: "initial",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              backgroundClip: "initial",
                                              backgroundColor: "transparent",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                              borderTop:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/our-offerings/our-therapies/respiratory"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                position: "relative",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Respiratory"}
                                            </a>
                                            <div
                                              className="we-mega-menu-submenu sub-menu-level3"
                                              style={{
                                                boxSizing: "border-box",
                                                outline: "none",
                                                borderRadius: "0px",
                                                padding: "0px",
                                                borderTop:
                                                  "2px solid rgb(221, 221, 221)",
                                                transition: "0.4s ease-in-out",
                                                width: "100%",
                                                margin: "0px",
                                                zIndex: 20,
                                                marginLeft: "0px",
                                                right: "0px",
                                                paddingLeft: "0px",
                                                paddingRight: "0px",
                                                minWidth: "270px",
                                                background: "transparent",
                                                position: "relative",
                                                top: "0px",
                                                backgroundColor: "transparent",
                                                marginBottom: "-6px",
                                                display: "none",
                                                boxShadow: "none",
                                                border: "none",
                                                marginTop: "6px",
                                                left: "-15px",
                                                visibility: "visible",
                                                opacity: 1,
                                              }}
                                            >
                                              <div
                                                className="we-mega-menu-submenu-inner"
                                                style={{
                                                  boxSizing: "border-box",
                                                  outline: "none",
                                                  margin: "0px auto",
                                                  maxWidth: "670px",
                                                  paddingTop: "0px",
                                                  paddingBottom: "0px",
                                                  minHeight: "auto",
                                                }}
                                              >
                                                <div
                                                  className="we-mega-menu-row"
                                                  style={{
                                                    boxSizing: "border-box",
                                                    outline: "none",
                                                    marginLeft: "-1.06383%",
                                                    marginRight: "-1.06383%",
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                  }}
                                                >
                                                  <div
                                                    className="we-mega-menu-col span12"
                                                    style={{
                                                      boxSizing: "border-box",
                                                      outline: "none",
                                                      transition: "0.1s",
                                                      minHeight: "1.875rem",
                                                      marginTop: "0.3125rem",
                                                      marginBottom: "0.3125rem",
                                                      border: "0px none",
                                                      backgroundColor:
                                                        "transparent",
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      position: "relative",
                                                      marginLeft: "1.06383%",
                                                      marginRight: "1.06383%",
                                                      flex: "0 0 97.8723%",
                                                      WebkitBoxFlex: "0",
                                                      maxWidth: "97.8723%",
                                                    }}
                                                  >
                                                    <ul
                                                      className="nav nav-tabs subul"
                                                      style={{
                                                        boxSizing: "border-box",
                                                        outline: "none",
                                                        listStyle: "none",
                                                        margin: "0px",
                                                        marginTop: "0px",
                                                        marginBottom: "0px",
                                                        borderBottom:
                                                          "0px none",
                                                        padding: "0px",
                                                        paddingLeft: "0px",
                                                      }}
                                                    >
                                                      <li
                                                        className="we-mega-menu-li"
                                                        style={{
                                                          boxSizing:
                                                            "border-box",
                                                          outline: "none",
                                                          marginBottom: "-1px",
                                                          padding: "0px",
                                                          boxShadow: "none",
                                                          cursor: "pointer",
                                                          marginLeft: "5px",
                                                          marginRight: "5px",
                                                          display: "block",
                                                          cssFloat: "none",
                                                          paddingTop: "7px",
                                                          paddingBottom: "7px",
                                                          position: "relative",
                                                          opacity: 0.65,
                                                          background:
                                                            "transparent",
                                                          border: "none",
                                                          fontSize: "14px",
                                                          color:
                                                            "rgba(0, 0, 0, 0.8)",
                                                          fontWeight: 400,
                                                          textTransform:
                                                            "capitalize",
                                                          fontFamily:
                                                            "Poppins, sans-serif",
                                                          borderBottom:
                                                            "1px solid rgb(221, 221, 221)",
                                                          borderTop:
                                                            "1px solid rgb(221, 221, 221)",
                                                        }}
                                                      >
                                                        <a
                                                          className="we-mega-menu-li"
                                                          href="https://www.cipla.com/our-offerings/our-therapies/respiratory/asthma"
                                                          target="_self"
                                                          style={{
                                                            boxSizing:
                                                              "border-box",
                                                            textDecoration:
                                                              "none",
                                                            display: "block",
                                                            lineHeight: 1.42857,
                                                            boxShadow: "none",
                                                            position: "static",
                                                            marginLeft: "5px",
                                                            marginRight: "5px",
                                                            borderRadius: "0px",
                                                            borderWidth:
                                                              "0px 0px 1px",
                                                            borderStyle:
                                                              "none none solid",
                                                            borderImage:
                                                              "initial",
                                                            padding:
                                                              "0.5rem 0px",
                                                            cursor: "pointer",
                                                            paddingTop: "0px",
                                                            paddingBottom:
                                                              "0px",
                                                            outline: "none",
                                                            background:
                                                              "transparent",
                                                            border: "none",
                                                            backgroundColor:
                                                              "transparent",
                                                            borderTopColor:
                                                              "initial",
                                                            borderRightColor:
                                                              "initial",
                                                            borderBottomColor:
                                                              "initial",
                                                            borderLeftColor:
                                                              "initial",
                                                            paddingLeft: "45px",
                                                            fontSize: "14px",
                                                            color:
                                                              "rgba(0, 0, 0, 0.8)",
                                                            fontWeight: 400,
                                                            textTransform:
                                                              "capitalize",
                                                            fontFamily:
                                                              "Poppins, sans-serif",
                                                          }}
                                                        >
                                                          {"Asthma"}
                                                        </a>
                                                      </li>
                                                      <li
                                                        className="we-mega-menu-li"
                                                        style={{
                                                          boxSizing:
                                                            "border-box",
                                                          outline: "none",
                                                          marginBottom: "-1px",
                                                          padding: "0px",
                                                          boxShadow: "none",
                                                          cursor: "pointer",
                                                          marginLeft: "5px",
                                                          marginRight: "5px",
                                                          display: "block",
                                                          cssFloat: "none",
                                                          paddingTop: "7px",
                                                          paddingBottom: "7px",
                                                          position: "relative",
                                                          opacity: 0.65,
                                                          background:
                                                            "transparent",
                                                          border: "none",
                                                          fontSize: "14px",
                                                          color:
                                                            "rgba(0, 0, 0, 0.8)",
                                                          fontWeight: 400,
                                                          textTransform:
                                                            "capitalize",
                                                          fontFamily:
                                                            "Poppins, sans-serif",
                                                          borderBottom:
                                                            "1px solid rgb(221, 221, 221)",
                                                        }}
                                                      >
                                                        <a
                                                          className="we-mega-menu-li"
                                                          href="https://www.cipla.com/our-offerings/our-therapies/respiratory/paediatric-asthma"
                                                          target="_self"
                                                          style={{
                                                            boxSizing:
                                                              "border-box",
                                                            textDecoration:
                                                              "none",
                                                            display: "block",
                                                            lineHeight: 1.42857,
                                                            boxShadow: "none",
                                                            position: "static",
                                                            marginLeft: "5px",
                                                            marginRight: "5px",
                                                            borderRadius: "0px",
                                                            borderWidth:
                                                              "0px 0px 1px",
                                                            borderStyle:
                                                              "none none solid",
                                                            borderImage:
                                                              "initial",
                                                            padding:
                                                              "0.5rem 0px",
                                                            cursor: "pointer",
                                                            paddingTop: "0px",
                                                            paddingBottom:
                                                              "0px",
                                                            outline: "none",
                                                            background:
                                                              "transparent",
                                                            border: "none",
                                                            backgroundColor:
                                                              "transparent",
                                                            borderTopColor:
                                                              "initial",
                                                            borderRightColor:
                                                              "initial",
                                                            borderBottomColor:
                                                              "initial",
                                                            borderLeftColor:
                                                              "initial",
                                                            paddingLeft: "45px",
                                                            fontSize: "14px",
                                                            color:
                                                              "rgba(0, 0, 0, 0.8)",
                                                            fontWeight: 400,
                                                            textTransform:
                                                              "capitalize",
                                                            fontFamily:
                                                              "Poppins, sans-serif",
                                                          }}
                                                        >
                                                          {"Paediatric Asthma"}
                                                        </a>
                                                      </li>
                                                      <li
                                                        className="we-mega-menu-li"
                                                        style={{
                                                          boxSizing:
                                                            "border-box",
                                                          outline: "none",
                                                          marginBottom: "-1px",
                                                          padding: "0px",
                                                          boxShadow: "none",
                                                          cursor: "pointer",
                                                          marginLeft: "5px",
                                                          marginRight: "5px",
                                                          display: "block",
                                                          cssFloat: "none",
                                                          paddingTop: "7px",
                                                          paddingBottom: "7px",
                                                          position: "relative",
                                                          opacity: 0.65,
                                                          background:
                                                            "transparent",
                                                          border: "none",
                                                          fontSize: "14px",
                                                          color:
                                                            "rgba(0, 0, 0, 0.8)",
                                                          fontWeight: 400,
                                                          textTransform:
                                                            "capitalize",
                                                          fontFamily:
                                                            "Poppins, sans-serif",
                                                          borderBottom:
                                                            "1px solid rgb(221, 221, 221)",
                                                        }}
                                                      >
                                                        <a
                                                          className="we-mega-menu-li"
                                                          href="https://www.cipla.com/our-offerings/our-therapies/respiratory/copd"
                                                          target="_self"
                                                          style={{
                                                            boxSizing:
                                                              "border-box",
                                                            textDecoration:
                                                              "none",
                                                            display: "block",
                                                            lineHeight: 1.42857,
                                                            boxShadow: "none",
                                                            position: "static",
                                                            marginLeft: "5px",
                                                            marginRight: "5px",
                                                            borderRadius: "0px",
                                                            borderWidth:
                                                              "0px 0px 1px",
                                                            borderStyle:
                                                              "none none solid",
                                                            borderImage:
                                                              "initial",
                                                            padding:
                                                              "0.5rem 0px",
                                                            cursor: "pointer",
                                                            paddingTop: "0px",
                                                            paddingBottom:
                                                              "0px",
                                                            outline: "none",
                                                            background:
                                                              "transparent",
                                                            border: "none",
                                                            backgroundColor:
                                                              "transparent",
                                                            borderTopColor:
                                                              "initial",
                                                            borderRightColor:
                                                              "initial",
                                                            borderBottomColor:
                                                              "initial",
                                                            borderLeftColor:
                                                              "initial",
                                                            paddingLeft: "45px",
                                                            fontSize: "14px",
                                                            color:
                                                              "rgba(0, 0, 0, 0.8)",
                                                            fontWeight: 400,
                                                            textTransform:
                                                              "capitalize",
                                                            fontFamily:
                                                              "Poppins, sans-serif",
                                                          }}
                                                        >
                                                          {"COPD"}
                                                        </a>
                                                      </li>
                                                      <li
                                                        className="we-mega-menu-li"
                                                        style={{
                                                          boxSizing:
                                                            "border-box",
                                                          outline: "none",
                                                          padding: "0px",
                                                          boxShadow: "none",
                                                          cursor: "pointer",
                                                          marginLeft: "5px",
                                                          marginRight: "5px",
                                                          display: "block",
                                                          cssFloat: "none",
                                                          marginBottom: "0px",
                                                          paddingTop: "7px",
                                                          paddingBottom: "7px",
                                                          position: "relative",
                                                          opacity: 0.65,
                                                          background:
                                                            "transparent",
                                                          border: "none",
                                                          fontSize: "14px",
                                                          color:
                                                            "rgba(0, 0, 0, 0.8)",
                                                          fontWeight: 400,
                                                          textTransform:
                                                            "capitalize",
                                                          fontFamily:
                                                            "Poppins, sans-serif",
                                                          borderBottom: "none",
                                                        }}
                                                      >
                                                        <a
                                                          className="we-mega-menu-li"
                                                          href="https://www.cipla.com/our-offerings/our-therapies/respiratory/nebulization"
                                                          target="_self"
                                                          style={{
                                                            boxSizing:
                                                              "border-box",
                                                            textDecoration:
                                                              "none",
                                                            display: "block",
                                                            lineHeight: 1.42857,
                                                            boxShadow: "none",
                                                            position: "static",
                                                            marginLeft: "5px",
                                                            marginRight: "5px",
                                                            borderRadius: "0px",
                                                            borderWidth:
                                                              "0px 0px 1px",
                                                            borderStyle:
                                                              "none none solid",
                                                            borderImage:
                                                              "initial",
                                                            padding:
                                                              "0.5rem 0px",
                                                            cursor: "pointer",
                                                            paddingTop: "0px",
                                                            paddingBottom:
                                                              "0px",
                                                            outline: "none",
                                                            background:
                                                              "transparent",
                                                            border: "none",
                                                            backgroundColor:
                                                              "transparent",
                                                            borderTopColor:
                                                              "initial",
                                                            borderRightColor:
                                                              "initial",
                                                            borderBottomColor:
                                                              "initial",
                                                            borderLeftColor:
                                                              "initial",
                                                            paddingLeft: "45px",
                                                            fontSize: "14px",
                                                            color:
                                                              "rgba(0, 0, 0, 0.8)",
                                                            fontWeight: 400,
                                                            textTransform:
                                                              "capitalize",
                                                            fontFamily:
                                                              "Poppins, sans-serif",
                                                          }}
                                                        >
                                                          {"Nebulization"}
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              marginBottom: "-1px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/our-offerings/our-therapies/hiv-aids"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"HIV/AIDS"}
                                            </a>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              marginBottom: "-1px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/our-offerings/our-therapies/oncology"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Oncology"}
                                            </a>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              marginBottom: "0px",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom: "none",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/our-offerings/our-therapies"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Other Therapies"}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="we-mega-menu-li dropdown-menu"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  margin: "2px 0px 0px",
                                  listStyle: "none",
                                  left: "0px",
                                  zIndex: 1000,
                                  textAlign: "left",
                                  marginBottom: "-1px",
                                  borderRadius: "0px",
                                  minWidth: "initial",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                  marginTop: "0px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  top: "auto",
                                  cursor: "pointer",
                                  position: "static",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  backgroundClip: "initial",
                                  backgroundColor: "transparent",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/our-offerings/cipla-generics"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    position: "relative",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Cipla Generics"}
                                </a>
                                <div
                                  className="we-mega-menu-submenu sub-menu-level2"
                                  style={{
                                    boxSizing: "border-box",
                                    outline: "none",
                                    borderRadius: "0px",
                                    padding: "0px",
                                    borderTop: "2px solid rgb(221, 221, 221)",
                                    transition: "0.4s ease-in-out",
                                    width: "100%",
                                    margin: "0px",
                                    zIndex: 20,
                                    marginLeft: "0px",
                                    right: "0px",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    minWidth: "270px",
                                    visibility: "hidden",
                                    opacity: 0,
                                    background: "transparent",
                                    position: "relative",
                                    top: "0px",
                                    backgroundColor: "transparent",
                                    marginBottom: "-6px",
                                    boxShadow: "none",
                                    border: "none",
                                    marginTop: "6px",
                                    left: "-15px",
                                  }}
                                >
                                  <div
                                    className="we-mega-menu-submenu-inner"
                                    style={{
                                      boxSizing: "border-box",
                                      outline: "none",
                                      margin: "0px auto",
                                      maxWidth: "670px",
                                      paddingTop: "0px",
                                      paddingBottom: "0px",
                                      minHeight: "auto",
                                    }}
                                  >
                                    <div
                                      className="we-mega-menu-row"
                                      style={{
                                        boxSizing: "border-box",
                                        outline: "none",
                                        marginLeft: "-1.06383%",
                                        marginRight: "-1.06383%",
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <div
                                        className="we-mega-menu-col span12"
                                        style={{
                                          boxSizing: "border-box",
                                          outline: "none",
                                          transition: "0.1s",
                                          minHeight: "1.875rem",
                                          marginTop: "0.3125rem",
                                          marginBottom: "0.3125rem",
                                          border: "0px none",
                                          backgroundColor: "transparent",
                                          display: "flex",
                                          flexDirection: "column",
                                          position: "relative",
                                          marginLeft: "1.06383%",
                                          marginRight: "1.06383%",
                                          flex: "0 0 97.8723%",
                                          WebkitBoxFlex: "0",
                                          maxWidth: "97.8723%",
                                        }}
                                      >
                                        <ul
                                          className="nav nav-tabs subul"
                                          style={{
                                            boxSizing: "border-box",
                                            outline: "none",
                                            listStyle: "none",
                                            margin: "0px",
                                            marginTop: "0px",
                                            marginBottom: "0px",
                                            borderBottom: "0px none",
                                            padding: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <li
                                            className="we-mega-menu-li dropdown-menu"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              margin: "2px 0px 0px",
                                              listStyle: "none",
                                              left: "0px",
                                              zIndex: 1000,
                                              textAlign: "left",
                                              borderRadius: "0px",
                                              borderTopLeftRadius: "0px",
                                              borderTopRightRadius: "0px",
                                              marginTop: "0px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              top: "auto",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              minWidth: "initial",
                                              marginBottom: "0px",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              backgroundClip: "initial",
                                              backgroundColor: "transparent",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom: "none",
                                              borderTop:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/our-offerings/cipla-generics/easylax"
                                              target="_blank"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                position: "relative",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Products"}
                                            </a>
                                            <div
                                              className="we-mega-menu-submenu sub-menu-level3"
                                              style={{
                                                boxSizing: "border-box",
                                                outline: "none",
                                                borderRadius: "0px",
                                                padding: "0px",
                                                borderTop:
                                                  "2px solid rgb(221, 221, 221)",
                                                transition: "0.4s ease-in-out",
                                                width: "100%",
                                                margin: "0px",
                                                zIndex: 20,
                                                marginLeft: "0px",
                                                right: "0px",
                                                paddingLeft: "0px",
                                                paddingRight: "0px",
                                                minWidth: "270px",
                                                background: "transparent",
                                                position: "relative",
                                                top: "0px",
                                                backgroundColor: "transparent",
                                                marginBottom: "-6px",
                                                display: "none",
                                                boxShadow: "none",
                                                border: "none",
                                                marginTop: "6px",
                                                left: "-15px",
                                                visibility: "visible",
                                                opacity: 1,
                                              }}
                                            >
                                              <div
                                                className="we-mega-menu-submenu-inner"
                                                style={{
                                                  boxSizing: "border-box",
                                                  outline: "none",
                                                  margin: "0px auto",
                                                  maxWidth: "670px",
                                                  paddingTop: "0px",
                                                  paddingBottom: "0px",
                                                  minHeight: "auto",
                                                }}
                                              >
                                                <div
                                                  className="we-mega-menu-row"
                                                  style={{
                                                    boxSizing: "border-box",
                                                    outline: "none",
                                                    marginLeft: "-1.06383%",
                                                    marginRight: "-1.06383%",
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                  }}
                                                >
                                                  <div
                                                    className="we-mega-menu-col span12"
                                                    style={{
                                                      boxSizing: "border-box",
                                                      outline: "none",
                                                      transition: "0.1s",
                                                      minHeight: "1.875rem",
                                                      marginTop: "0.3125rem",
                                                      marginBottom: "0.3125rem",
                                                      border: "0px none",
                                                      backgroundColor:
                                                        "transparent",
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      position: "relative",
                                                      marginLeft: "1.06383%",
                                                      marginRight: "1.06383%",
                                                      flex: "0 0 97.8723%",
                                                      WebkitBoxFlex: "0",
                                                      maxWidth: "97.8723%",
                                                    }}
                                                  >
                                                    <ul
                                                      className="nav nav-tabs subul"
                                                      style={{
                                                        boxSizing: "border-box",
                                                        outline: "none",
                                                        listStyle: "none",
                                                        margin: "0px",
                                                        marginTop: "0px",
                                                        marginBottom: "0px",
                                                        borderBottom:
                                                          "0px none",
                                                        padding: "0px",
                                                        paddingLeft: "0px",
                                                      }}
                                                    >
                                                      <li
                                                        className="we-mega-menu-li"
                                                        style={{
                                                          boxSizing:
                                                            "border-box",
                                                          outline: "none",
                                                          marginBottom: "-1px",
                                                          padding: "0px",
                                                          boxShadow: "none",
                                                          cursor: "pointer",
                                                          marginLeft: "5px",
                                                          marginRight: "5px",
                                                          display: "block",
                                                          cssFloat: "none",
                                                          paddingTop: "7px",
                                                          paddingBottom: "7px",
                                                          position: "relative",
                                                          opacity: 0.65,
                                                          background:
                                                            "transparent",
                                                          border: "none",
                                                          fontSize: "14px",
                                                          color:
                                                            "rgba(0, 0, 0, 0.8)",
                                                          fontWeight: 400,
                                                          textTransform:
                                                            "capitalize",
                                                          fontFamily:
                                                            "Poppins, sans-serif",
                                                          borderBottom:
                                                            "1px solid rgb(221, 221, 221)",
                                                          borderTop:
                                                            "1px solid rgb(221, 221, 221)",
                                                        }}
                                                      >
                                                        <a
                                                          className="we-mega-menu-li"
                                                          href="https://www.cipla.com/our-offerings/cipla-generics/easylax"
                                                          target="_self"
                                                          style={{
                                                            boxSizing:
                                                              "border-box",
                                                            textDecoration:
                                                              "none",
                                                            display: "block",
                                                            lineHeight: 1.42857,
                                                            boxShadow: "none",
                                                            position: "static",
                                                            marginLeft: "5px",
                                                            marginRight: "5px",
                                                            borderRadius: "0px",
                                                            borderWidth:
                                                              "0px 0px 1px",
                                                            borderStyle:
                                                              "none none solid",
                                                            borderImage:
                                                              "initial",
                                                            padding:
                                                              "0.5rem 0px",
                                                            cursor: "pointer",
                                                            paddingTop: "0px",
                                                            paddingBottom:
                                                              "0px",
                                                            outline: "none",
                                                            background:
                                                              "transparent",
                                                            border: "none",
                                                            backgroundColor:
                                                              "transparent",
                                                            borderTopColor:
                                                              "initial",
                                                            borderRightColor:
                                                              "initial",
                                                            borderBottomColor:
                                                              "initial",
                                                            borderLeftColor:
                                                              "initial",
                                                            paddingLeft: "45px",
                                                            fontSize: "14px",
                                                            color:
                                                              "rgba(0, 0, 0, 0.8)",
                                                            fontWeight: 400,
                                                            textTransform:
                                                              "capitalize",
                                                            fontFamily:
                                                              "Poppins, sans-serif",
                                                          }}
                                                        >
                                                          {"Easylax"}
                                                        </a>
                                                      </li>
                                                      <li
                                                        className="we-mega-menu-li"
                                                        style={{
                                                          boxSizing:
                                                            "border-box",
                                                          outline: "none",
                                                          padding: "0px",
                                                          boxShadow: "none",
                                                          cursor: "pointer",
                                                          marginLeft: "5px",
                                                          marginRight: "5px",
                                                          display: "block",
                                                          cssFloat: "none",
                                                          marginBottom: "0px",
                                                          paddingTop: "7px",
                                                          paddingBottom: "7px",
                                                          position: "relative",
                                                          opacity: 0.65,
                                                          background:
                                                            "transparent",
                                                          border: "none",
                                                          fontSize: "14px",
                                                          color:
                                                            "rgba(0, 0, 0, 0.8)",
                                                          fontWeight: 400,
                                                          textTransform:
                                                            "capitalize",
                                                          fontFamily:
                                                            "Poppins, sans-serif",
                                                          borderBottom: "none",
                                                        }}
                                                      >
                                                        <a
                                                          className="we-mega-menu-li"
                                                          href="https://www.cipla.com/our-offerings/cipla-generics/easylax-l"
                                                          target="_self"
                                                          style={{
                                                            boxSizing:
                                                              "border-box",
                                                            textDecoration:
                                                              "none",
                                                            display: "block",
                                                            lineHeight: 1.42857,
                                                            boxShadow: "none",
                                                            position: "static",
                                                            marginLeft: "5px",
                                                            marginRight: "5px",
                                                            borderRadius: "0px",
                                                            borderWidth:
                                                              "0px 0px 1px",
                                                            borderStyle:
                                                              "none none solid",
                                                            borderImage:
                                                              "initial",
                                                            padding:
                                                              "0.5rem 0px",
                                                            cursor: "pointer",
                                                            paddingTop: "0px",
                                                            paddingBottom:
                                                              "0px",
                                                            outline: "none",
                                                            background:
                                                              "transparent",
                                                            border: "none",
                                                            backgroundColor:
                                                              "transparent",
                                                            borderTopColor:
                                                              "initial",
                                                            borderRightColor:
                                                              "initial",
                                                            borderBottomColor:
                                                              "initial",
                                                            borderLeftColor:
                                                              "initial",
                                                            paddingLeft: "45px",
                                                            fontSize: "14px",
                                                            color:
                                                              "rgba(0, 0, 0, 0.8)",
                                                            fontWeight: 400,
                                                            textTransform:
                                                              "capitalize",
                                                            fontFamily:
                                                              "Poppins, sans-serif",
                                                          }}
                                                        >
                                                          {"Easylax-L"}
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://ciplahealth.in/"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"OTC – Cipla Health"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/cipla-diagnostics"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Cipla Diagnostics"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/our-offerings/api"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"API"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  marginBottom: "0px",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "none",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/covid-care"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Covid Care"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="we-mega-menu-li dropdown-menu header-global-link header-main-menu"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      listStyle: "none",
                      left: "0px",
                      textAlign: "left",
                      cssFloat: "left",
                      borderRadius: "0px",
                      minWidth: "initial",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      padding: "0px",
                      boxShadow: "none",
                      display: "flex",
                      top: "auto",
                      margin: "0px",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "0px",
                      marginBottom: "0px",
                      zIndex: 21,
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "0px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "none",
                      backgroundClip: "initial",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <a
                      className="we-mega-menu-li"
                      href="https://www.cipla.com/investors"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        lineHeight: 1.42857,
                        boxShadow: "none",
                        position: "relative",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        borderRadius: "0px",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        cursor: "pointer",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        outline: "none",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {"Investors"}
                    </a>
                    <div
                      className="we-mega-menu-submenu submenu-scroll"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        position: "absolute",
                        borderRadius: "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "0px",
                        margin: "0px",
                        borderTop: "2px solid rgb(221, 221, 221)",
                        transition: "0.4s ease-in-out",
                        width: "100%",
                        overflow: "hidden auto",
                        height: "520px",
                        zIndex: 20,
                        marginLeft: "0px",
                        right: "0px",
                        marginTop: "32px",
                        top: "35px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        minWidth: "270px",
                        visibility: "hidden",
                        opacity: 0,
                        boxShadow: "none",
                        border: "1px solid rgb(221, 221, 221)",
                        left: "auto",
                      }}
                    >
                      <div
                        className="we-mega-menu-submenu-inner"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          margin: "0px auto",
                          maxWidth: "670px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          minHeight: "auto",
                        }}
                      >
                        <div
                          className="we-mega-menu-row"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginLeft: "-1.06383%",
                            marginRight: "-1.06383%",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            className="we-mega-menu-col span12 submenu-right"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              transition: "0.1s",
                              minHeight: "1.875rem",
                              marginTop: "0.3125rem",
                              marginBottom: "0.3125rem",
                              border: "0px none",
                              backgroundColor: "transparent",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              marginLeft: "1.06383%",
                              marginRight: "1.06383%",
                              flex: "0 0 97.8723%",
                              WebkitBoxFlex: "0",
                              maxWidth: "97.8723%",
                            }}
                          >
                            <ul
                              className="nav nav-tabs subul"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                listStyle: "none",
                                margin: "0px",
                                marginTop: "0px",
                                marginBottom: "0px",
                                borderBottom: "0px none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="we-mega-menu-li dropdown-menu"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  margin: "2px 0px 0px",
                                  listStyle: "none",
                                  left: "0px",
                                  zIndex: 1000,
                                  textAlign: "left",
                                  marginBottom: "-1px",
                                  borderRadius: "0px",
                                  minWidth: "initial",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                  marginTop: "0px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  top: "auto",
                                  cursor: "pointer",
                                  position: "static",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  backgroundClip: "initial",
                                  backgroundColor: "transparent",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/investors/quarterly-results"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    position: "relative",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Financials & Filings"}
                                </a>
                                <div
                                  className="we-mega-menu-submenu sub-menu-level2"
                                  style={{
                                    boxSizing: "border-box",
                                    outline: "none",
                                    borderRadius: "0px",
                                    padding: "0px",
                                    borderTop: "2px solid rgb(221, 221, 221)",
                                    transition: "0.4s ease-in-out",
                                    width: "100%",
                                    margin: "0px",
                                    zIndex: 20,
                                    marginLeft: "0px",
                                    right: "0px",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    minWidth: "270px",
                                    visibility: "hidden",
                                    opacity: 0,
                                    background: "transparent",
                                    position: "relative",
                                    top: "0px",
                                    backgroundColor: "transparent",
                                    marginBottom: "-6px",
                                    boxShadow: "none",
                                    border: "none",
                                    marginTop: "6px",
                                    left: "-15px",
                                  }}
                                >
                                  <div
                                    className="we-mega-menu-submenu-inner"
                                    style={{
                                      boxSizing: "border-box",
                                      outline: "none",
                                      margin: "0px auto",
                                      maxWidth: "670px",
                                      paddingTop: "0px",
                                      paddingBottom: "0px",
                                      minHeight: "auto",
                                    }}
                                  >
                                    <div
                                      className="we-mega-menu-row"
                                      style={{
                                        boxSizing: "border-box",
                                        outline: "none",
                                        marginLeft: "-1.06383%",
                                        marginRight: "-1.06383%",
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <div
                                        className="we-mega-menu-col span12"
                                        style={{
                                          boxSizing: "border-box",
                                          outline: "none",
                                          transition: "0.1s",
                                          minHeight: "1.875rem",
                                          marginTop: "0.3125rem",
                                          marginBottom: "0.3125rem",
                                          border: "0px none",
                                          backgroundColor: "transparent",
                                          display: "flex",
                                          flexDirection: "column",
                                          position: "relative",
                                          marginLeft: "1.06383%",
                                          marginRight: "1.06383%",
                                          flex: "0 0 97.8723%",
                                          WebkitBoxFlex: "0",
                                          maxWidth: "97.8723%",
                                        }}
                                      >
                                        <ul
                                          className="nav nav-tabs subul"
                                          style={{
                                            boxSizing: "border-box",
                                            outline: "none",
                                            listStyle: "none",
                                            margin: "0px",
                                            marginTop: "0px",
                                            marginBottom: "0px",
                                            borderBottom: "0px none",
                                            padding: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              marginBottom: "-1px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                              borderTop:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/investors/quarterly-results"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Quarterly Results"}
                                            </a>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              marginBottom: "-1px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/investors/investor-presentation"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Investor Presentation"}
                                            </a>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              marginBottom: "-1px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/investors/annual-reports"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Annual Reports"}
                                            </a>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              marginBottom: "0px",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom: "none",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/investors/scheme-arrangement"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Scheme of Arrangement"}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/investors/corporate-governance"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Corporate Governance"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/disclosures-under-regulation-46-lodr"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {
                                    "Disclosure under regulation 46 of SEBI LODR"
                                  }
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li dropdown-menu"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  margin: "2px 0px 0px",
                                  listStyle: "none",
                                  left: "0px",
                                  zIndex: 1000,
                                  textAlign: "left",
                                  marginBottom: "-1px",
                                  borderRadius: "0px",
                                  minWidth: "initial",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                  marginTop: "0px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  top: "auto",
                                  cursor: "pointer",
                                  position: "static",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  backgroundClip: "initial",
                                  backgroundColor: "transparent",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/about-us"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    position: "relative",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Cipla at a Glance"}
                                </a>
                                <div
                                  className="we-mega-menu-submenu sub-menu-level2"
                                  style={{
                                    boxSizing: "border-box",
                                    outline: "none",
                                    borderRadius: "0px",
                                    padding: "0px",
                                    borderTop: "2px solid rgb(221, 221, 221)",
                                    transition: "0.4s ease-in-out",
                                    width: "100%",
                                    margin: "0px",
                                    zIndex: 20,
                                    marginLeft: "0px",
                                    right: "0px",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    minWidth: "270px",
                                    visibility: "hidden",
                                    opacity: 0,
                                    background: "transparent",
                                    position: "relative",
                                    top: "0px",
                                    backgroundColor: "transparent",
                                    marginBottom: "-6px",
                                    boxShadow: "none",
                                    border: "none",
                                    marginTop: "6px",
                                    left: "-15px",
                                  }}
                                >
                                  <div
                                    className="we-mega-menu-submenu-inner"
                                    style={{
                                      boxSizing: "border-box",
                                      outline: "none",
                                      margin: "0px auto",
                                      maxWidth: "670px",
                                      paddingTop: "0px",
                                      paddingBottom: "0px",
                                      minHeight: "auto",
                                    }}
                                  >
                                    <div
                                      className="we-mega-menu-row"
                                      style={{
                                        boxSizing: "border-box",
                                        outline: "none",
                                        marginLeft: "-1.06383%",
                                        marginRight: "-1.06383%",
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <div
                                        className="we-mega-menu-col span12"
                                        style={{
                                          boxSizing: "border-box",
                                          outline: "none",
                                          transition: "0.1s",
                                          minHeight: "1.875rem",
                                          marginTop: "0.3125rem",
                                          marginBottom: "0.3125rem",
                                          border: "0px none",
                                          backgroundColor: "transparent",
                                          display: "flex",
                                          flexDirection: "column",
                                          position: "relative",
                                          marginLeft: "1.06383%",
                                          marginRight: "1.06383%",
                                          flex: "0 0 97.8723%",
                                          WebkitBoxFlex: "0",
                                          maxWidth: "97.8723%",
                                        }}
                                      >
                                        <ul
                                          className="nav nav-tabs subul"
                                          style={{
                                            boxSizing: "border-box",
                                            outline: "none",
                                            listStyle: "none",
                                            margin: "0px",
                                            marginTop: "0px",
                                            marginBottom: "0px",
                                            borderBottom: "0px none",
                                            padding: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              marginBottom: "-1px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                              borderTop:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/about-us/board-directors"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Board Of Directors"}
                                            </a>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              marginBottom: "0px",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom: "none",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/about-us/board-directors/committees-board"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Committees of the Board"}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/investors/investor-resources"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Investor Resources"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/investors/shareholding-pattern"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Shareholding Pattern"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/investors/intimation-stock-exchanges"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Intimation to Stock Exchange"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/investors/unclaimed-data"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Unclaimed Data"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/investors/investor-contacts"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Investor Contact"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  marginBottom: "0px",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "none",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/investors/disclaimer"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Disclaimer"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="we-mega-menu-li dropdown-menu header-global-link header-main-menu"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      listStyle: "none",
                      left: "0px",
                      textAlign: "left",
                      cssFloat: "left",
                      borderRadius: "0px",
                      minWidth: "initial",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      padding: "0px",
                      boxShadow: "none",
                      display: "flex",
                      top: "auto",
                      margin: "0px",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "0px",
                      marginBottom: "0px",
                      zIndex: 21,
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "0px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "none",
                      backgroundClip: "initial",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <a
                      className="we-mega-menu-li"
                      href="https://www.cipla.com/sustainability"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        lineHeight: 1.42857,
                        boxShadow: "none",
                        position: "relative",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        borderRadius: "0px",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        cursor: "pointer",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        outline: "none",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {"Sustainability"}
                    </a>
                    <div
                      className="we-mega-menu-submenu submenu-left"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        position: "absolute",
                        borderRadius: "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "0px",
                        margin: "0px",
                        borderTop: "2px solid rgb(221, 221, 221)",
                        transition: "0.4s ease-in-out",
                        width: "100%",
                        zIndex: 20,
                        marginLeft: "0px",
                        right: "0px",
                        marginTop: "32px",
                        top: "35px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        minWidth: "270px",
                        visibility: "hidden",
                        opacity: 0,
                        boxShadow: "none",
                        border: "1px solid rgb(221, 221, 221)",
                        left: "auto",
                      }}
                    >
                      <div
                        className="we-mega-menu-submenu-inner"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          margin: "0px auto",
                          maxWidth: "670px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          minHeight: "auto",
                        }}
                      >
                        <div
                          className="we-mega-menu-row"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginLeft: "-1.06383%",
                            marginRight: "-1.06383%",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            className="we-mega-menu-col span12 submenu-right"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              transition: "0.1s",
                              minHeight: "1.875rem",
                              marginTop: "0.3125rem",
                              marginBottom: "0.3125rem",
                              border: "0px none",
                              backgroundColor: "transparent",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              marginLeft: "1.06383%",
                              marginRight: "1.06383%",
                              flex: "0 0 97.8723%",
                              WebkitBoxFlex: "0",
                              maxWidth: "97.8723%",
                            }}
                          >
                            <ul
                              className="nav nav-tabs subul"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                listStyle: "none",
                                margin: "0px",
                                marginTop: "0px",
                                marginBottom: "0px",
                                borderBottom: "0px none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/sustainability/championing-climate-positivity"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Championing Climate Positivity"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li dropdown-menu"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  margin: "2px 0px 0px",
                                  listStyle: "none",
                                  left: "0px",
                                  zIndex: 1000,
                                  textAlign: "left",
                                  marginBottom: "-1px",
                                  borderRadius: "0px",
                                  minWidth: "initial",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                  marginTop: "0px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  top: "auto",
                                  cursor: "pointer",
                                  position: "static",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  backgroundClip: "initial",
                                  backgroundColor: "transparent",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/sustainability/accelerating-community-wellbeing"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    position: "relative",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Accelerated Community Well-being"}
                                </a>
                                <div
                                  className="we-mega-menu-submenu sub-menu-level2"
                                  style={{
                                    boxSizing: "border-box",
                                    outline: "none",
                                    borderRadius: "0px",
                                    padding: "0px",
                                    borderTop: "2px solid rgb(221, 221, 221)",
                                    transition: "0.4s ease-in-out",
                                    width: "100%",
                                    margin: "0px",
                                    zIndex: 20,
                                    marginLeft: "0px",
                                    right: "0px",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    minWidth: "270px",
                                    visibility: "hidden",
                                    opacity: 0,
                                    background: "transparent",
                                    position: "relative",
                                    top: "0px",
                                    backgroundColor: "transparent",
                                    marginBottom: "-6px",
                                    boxShadow: "none",
                                    border: "none",
                                    marginTop: "6px",
                                    left: "-15px",
                                  }}
                                >
                                  <div
                                    className="we-mega-menu-submenu-inner"
                                    style={{
                                      boxSizing: "border-box",
                                      outline: "none",
                                      margin: "0px auto",
                                      maxWidth: "670px",
                                      paddingTop: "0px",
                                      paddingBottom: "0px",
                                      minHeight: "auto",
                                    }}
                                  >
                                    <div
                                      className="we-mega-menu-row"
                                      style={{
                                        boxSizing: "border-box",
                                        outline: "none",
                                        marginLeft: "-1.06383%",
                                        marginRight: "-1.06383%",
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <div
                                        className="we-mega-menu-col span12"
                                        style={{
                                          boxSizing: "border-box",
                                          outline: "none",
                                          transition: "0.1s",
                                          minHeight: "1.875rem",
                                          marginTop: "0.3125rem",
                                          marginBottom: "0.3125rem",
                                          border: "0px none",
                                          backgroundColor: "transparent",
                                          display: "flex",
                                          flexDirection: "column",
                                          position: "relative",
                                          marginLeft: "1.06383%",
                                          marginRight: "1.06383%",
                                          flex: "0 0 97.8723%",
                                          WebkitBoxFlex: "0",
                                          maxWidth: "97.8723%",
                                        }}
                                      >
                                        <ul
                                          className="nav nav-tabs subul"
                                          style={{
                                            boxSizing: "border-box",
                                            outline: "none",
                                            listStyle: "none",
                                            margin: "0px",
                                            marginTop: "0px",
                                            marginBottom: "0px",
                                            borderBottom: "0px none",
                                            padding: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              marginBottom: "-1px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                              borderTop:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/sustainability/accelerating-community-wellbeing/community-wellbeing-initiatives"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Community Initiatives"}
                                            </a>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              marginBottom: "0px",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom: "none",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/sustainability/accelerating-community-wellbeing/employees-wellbeing-initiatives"
                                              target="_self"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Employee Initiatives"}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/sustainability/raising-bar-governance"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Raising the Bar on Governance"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  marginBottom: "0px",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "none",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/sustainability/enhancing-access-and-affordability"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Enhancing Access and Affordability"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="we-mega-menu-li dropdown-menu header-global-link header-main-menu"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      listStyle: "none",
                      left: "0px",
                      textAlign: "left",
                      cssFloat: "left",
                      borderRadius: "0px",
                      minWidth: "initial",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      padding: "0px",
                      boxShadow: "none",
                      display: "flex",
                      top: "auto",
                      margin: "0px",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "0px",
                      marginBottom: "0px",
                      zIndex: 21,
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "0px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "none",
                      backgroundClip: "initial",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <a
                      className="we-mega-menu-li"
                      href="https://www.cipla.com/careers"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        lineHeight: 1.42857,
                        boxShadow: "none",
                        position: "relative",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        borderRadius: "0px",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        cursor: "pointer",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        outline: "none",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {"Careers"}
                    </a>
                    <div
                      className="we-mega-menu-submenu"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        position: "absolute",
                        borderRadius: "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "0px",
                        margin: "0px",
                        borderTop: "2px solid rgb(221, 221, 221)",
                        transition: "0.4s ease-in-out",
                        width: "100%",
                        zIndex: 20,
                        marginLeft: "0px",
                        right: "0px",
                        marginTop: "32px",
                        top: "35px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        minWidth: "270px",
                        visibility: "hidden",
                        opacity: 0,
                        boxShadow: "none",
                        border: "1px solid rgb(221, 221, 221)",
                        left: "auto",
                      }}
                    >
                      <div
                        className="we-mega-menu-submenu-inner"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          margin: "0px auto",
                          maxWidth: "670px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          minHeight: "auto",
                        }}
                      >
                        <div
                          className="we-mega-menu-row"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginLeft: "-1.06383%",
                            marginRight: "-1.06383%",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            className="we-mega-menu-col span12 submenu-right"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              transition: "0.1s",
                              minHeight: "1.875rem",
                              marginTop: "0.3125rem",
                              marginBottom: "0.3125rem",
                              border: "0px none",
                              backgroundColor: "transparent",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              marginLeft: "1.06383%",
                              marginRight: "1.06383%",
                              flex: "0 0 97.8723%",
                              WebkitBoxFlex: "0",
                              maxWidth: "97.8723%",
                            }}
                          >
                            <ul
                              className="nav nav-tabs subul"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                listStyle: "none",
                                margin: "0px",
                                marginTop: "0px",
                                marginBottom: "0px",
                                borderBottom: "0px none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/careers/life-at-cipla"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Life at Cipla"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/careers/business-functions"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Business Functions"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/careers/inclusion-diversity"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Diversity & Inclusion"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/careers/holistic-wellbeing"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Holistic Wellbeing"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/careers/cipla-university"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Cipla University"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  marginBottom: "0px",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "none",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://careers.cipla.com/"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Join Us"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="we-mega-menu-li dropdown-menu header-global-link header-main-menu"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      listStyle: "none",
                      left: "0px",
                      textAlign: "left",
                      cssFloat: "left",
                      borderRadius: "0px",
                      minWidth: "initial",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      padding: "0px",
                      boxShadow: "none",
                      display: "flex",
                      top: "auto",
                      margin: "0px",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "0px",
                      marginBottom: "0px",
                      zIndex: 21,
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "0px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "none",
                      backgroundClip: "initial",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <a
                      className="we-mega-menu-li"
                      href="https://www.cipla.com/media-centre"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        lineHeight: 1.42857,
                        boxShadow: "none",
                        position: "relative",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        borderRadius: "0px",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        cursor: "pointer",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        outline: "none",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {"Media Centre"}
                    </a>
                    <div
                      className="we-mega-menu-submenu"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        position: "absolute",
                        borderRadius: "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "0px",
                        margin: "0px",
                        borderTop: "2px solid rgb(221, 221, 221)",
                        transition: "0.4s ease-in-out",
                        width: "100%",
                        zIndex: 20,
                        marginLeft: "0px",
                        right: "0px",
                        marginTop: "32px",
                        top: "35px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        minWidth: "270px",
                        visibility: "hidden",
                        opacity: 0,
                        boxShadow: "none",
                        border: "1px solid rgb(221, 221, 221)",
                        left: "auto",
                      }}
                    >
                      <div
                        className="we-mega-menu-submenu-inner"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          margin: "0px auto",
                          maxWidth: "670px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          minHeight: "auto",
                        }}
                      >
                        <div
                          className="we-mega-menu-row"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginLeft: "-1.06383%",
                            marginRight: "-1.06383%",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            className="we-mega-menu-col span12 submenu-right"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              transition: "0.1s",
                              minHeight: "1.875rem",
                              marginTop: "0.3125rem",
                              marginBottom: "0.3125rem",
                              border: "0px none",
                              backgroundColor: "transparent",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              marginLeft: "1.06383%",
                              marginRight: "1.06383%",
                              flex: "0 0 97.8723%",
                              WebkitBoxFlex: "0",
                              maxWidth: "97.8723%",
                            }}
                          >
                            <ul
                              className="nav nav-tabs subul"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                listStyle: "none",
                                margin: "0px",
                                marginTop: "0px",
                                marginBottom: "0px",
                                borderBottom: "0px none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/media-centre/media-releases"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Media Releases"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/media-centre/news"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"In The News"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  marginBottom: "0px",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "none",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/leaders-speak"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Leaders Speak"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="we-mega-menu-li dropdown-menu header-global-link header-main-menu"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      listStyle: "none",
                      left: "0px",
                      textAlign: "left",
                      cssFloat: "left",
                      borderRadius: "0px",
                      minWidth: "initial",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      padding: "0px",
                      boxShadow: "none",
                      display: "flex",
                      top: "auto",
                      margin: "0px",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "0px",
                      marginBottom: "0px",
                      zIndex: 21,
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "0px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "none",
                      backgroundClip: "initial",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <a
                      className="we-mega-menu-li"
                      href="https://www.cipla.com/csr/cipla-foundation"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        lineHeight: 1.42857,
                        boxShadow: "none",
                        position: "relative",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        borderRadius: "0px",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        cursor: "pointer",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        outline: "none",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {"Corporate Social Responsibility"}
                    </a>
                    <div
                      className="we-mega-menu-submenu"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        position: "absolute",
                        borderRadius: "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "0px",
                        margin: "0px",
                        borderTop: "2px solid rgb(221, 221, 221)",
                        transition: "0.4s ease-in-out",
                        width: "100%",
                        zIndex: 20,
                        marginLeft: "0px",
                        right: "0px",
                        marginTop: "32px",
                        top: "35px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        minWidth: "270px",
                        visibility: "hidden",
                        opacity: 0,
                        boxShadow: "none",
                        border: "1px solid rgb(221, 221, 221)",
                        left: "auto",
                      }}
                    >
                      <div
                        className="we-mega-menu-submenu-inner"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          margin: "0px auto",
                          maxWidth: "670px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          minHeight: "auto",
                        }}
                      >
                        <div
                          className="we-mega-menu-row"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginLeft: "-1.06383%",
                            marginRight: "-1.06383%",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            className="we-mega-menu-col span12"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              transition: "0.1s",
                              minHeight: "1.875rem",
                              marginTop: "0.3125rem",
                              marginBottom: "0.3125rem",
                              border: "0px none",
                              backgroundColor: "transparent",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              marginLeft: "1.06383%",
                              marginRight: "1.06383%",
                              flex: "0 0 97.8723%",
                              WebkitBoxFlex: "0",
                              maxWidth: "97.8723%",
                            }}
                          >
                            <ul
                              className="nav nav-tabs subul"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                listStyle: "none",
                                margin: "0px",
                                marginTop: "0px",
                                marginBottom: "0px",
                                borderBottom: "0px none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/csr/cipla-foundation"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Cipla Foundation"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li dropdown-menu"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  margin: "2px 0px 0px",
                                  listStyle: "none",
                                  left: "0px",
                                  zIndex: 1000,
                                  textAlign: "left",
                                  marginBottom: "-1px",
                                  borderRadius: "0px",
                                  minWidth: "initial",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                  marginTop: "0px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  top: "auto",
                                  cursor: "pointer",
                                  position: "static",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  backgroundClip: "initial",
                                  backgroundColor: "transparent",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.ciplapalliativecare.org/index.html"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    position: "relative",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Cipla Palliative Care"}
                                </a>
                                <div
                                  className="we-mega-menu-submenu sub-menu-level2"
                                  style={{
                                    boxSizing: "border-box",
                                    outline: "none",
                                    borderRadius: "0px",
                                    padding: "0px",
                                    borderTop: "2px solid rgb(221, 221, 221)",
                                    transition: "0.4s ease-in-out",
                                    width: "100%",
                                    margin: "0px",
                                    zIndex: 20,
                                    marginLeft: "0px",
                                    right: "0px",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    minWidth: "270px",
                                    visibility: "hidden",
                                    opacity: 0,
                                    background: "transparent",
                                    position: "relative",
                                    top: "0px",
                                    backgroundColor: "transparent",
                                    marginBottom: "-6px",
                                    boxShadow: "none",
                                    border: "none",
                                    marginTop: "6px",
                                    left: "-15px",
                                  }}
                                >
                                  <div
                                    className="we-mega-menu-submenu-inner"
                                    style={{
                                      boxSizing: "border-box",
                                      outline: "none",
                                      margin: "0px auto",
                                      maxWidth: "670px",
                                      paddingTop: "0px",
                                      paddingBottom: "0px",
                                      minHeight: "auto",
                                    }}
                                  >
                                    <div
                                      className="we-mega-menu-row"
                                      style={{
                                        boxSizing: "border-box",
                                        outline: "none",
                                        marginLeft: "-1.06383%",
                                        marginRight: "-1.06383%",
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <div
                                        className="we-mega-menu-col span12"
                                        style={{
                                          boxSizing: "border-box",
                                          outline: "none",
                                          transition: "0.1s",
                                          minHeight: "1.875rem",
                                          marginTop: "0.3125rem",
                                          marginBottom: "0.3125rem",
                                          border: "0px none",
                                          backgroundColor: "transparent",
                                          display: "flex",
                                          flexDirection: "column",
                                          position: "relative",
                                          marginLeft: "1.06383%",
                                          marginRight: "1.06383%",
                                          flex: "0 0 97.8723%",
                                          WebkitBoxFlex: "0",
                                          maxWidth: "97.8723%",
                                        }}
                                      >
                                        <ul
                                          className="nav nav-tabs subul"
                                          style={{
                                            boxSizing: "border-box",
                                            outline: "none",
                                            listStyle: "none",
                                            margin: "0px",
                                            marginTop: "0px",
                                            marginBottom: "0px",
                                            borderBottom: "0px none",
                                            padding: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              marginBottom: "0px",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom: "none",
                                              borderTop:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/sites/default/files/Cipla-Foundation-Palliative-Care-Update-2023-24.pdf"
                                              target="_blank"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                color: "rgba(0, 0, 0, 0.8)",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                              }}
                                            >
                                              {"Annual Update 2023-24"}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/sites/default/files/2023-05/Corporate-Social-Responsibility-Policy.pdf"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"CSR Policy"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/board-directors/committees-board"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"CSR Committee"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li dropdown-menu nolink-menu"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  margin: "2px 0px 0px",
                                  listStyle: "none",
                                  left: "0px",
                                  zIndex: 1000,
                                  textAlign: "left",
                                  borderRadius: "0px",
                                  minWidth: "initial",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                  marginTop: "0px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  top: "auto",
                                  cursor: "pointer",
                                  position: "static",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  marginBottom: "0px",
                                  paddingTop: "7px",
                                  paddingBottom: "7px",
                                  background: "transparent",
                                  border: "none",
                                  backgroundClip: "initial",
                                  backgroundColor: "transparent",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "none",
                                }}
                              >
                                <span
                                  className="we-megamenu-nolink"
                                  style={{
                                    boxSizing: "border-box",
                                    outline: "none",
                                    cursor: "pointer",
                                    position: "relative",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    marginRight: "2px",
                                    flex: "1 1 auto",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    padding: "0px",
                                    marginLeft: "0px",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    paddingRight: "0px",
                                    paddingLeft: "15px",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                    color: "rgba(0, 0, 0, 0.5)",
                                  }}
                                >
                                  Approved CSR Projects
                                </span>
                                <div
                                  className="we-mega-menu-submenu sub-menu-level2"
                                  style={{
                                    boxSizing: "border-box",
                                    outline: "none",
                                    borderRadius: "0px",
                                    padding: "0px",
                                    borderTop: "2px solid rgb(221, 221, 221)",
                                    transition: "0.4s ease-in-out",
                                    width: "100%",
                                    margin: "0px",
                                    zIndex: 20,
                                    marginLeft: "0px",
                                    right: "0px",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    minWidth: "270px",
                                    visibility: "hidden",
                                    opacity: 0,
                                    background: "transparent",
                                    position: "relative",
                                    top: "0px",
                                    backgroundColor: "transparent",
                                    marginBottom: "-6px",
                                    boxShadow: "none",
                                    border: "none",
                                    marginTop: "6px",
                                    left: "-15px",
                                  }}
                                >
                                  <div
                                    className="we-mega-menu-submenu-inner"
                                    style={{
                                      boxSizing: "border-box",
                                      outline: "none",
                                      margin: "0px auto",
                                      maxWidth: "670px",
                                      paddingTop: "0px",
                                      paddingBottom: "0px",
                                      minHeight: "auto",
                                    }}
                                  >
                                    <div
                                      className="we-mega-menu-row"
                                      style={{
                                        boxSizing: "border-box",
                                        outline: "none",
                                        marginLeft: "-1.06383%",
                                        marginRight: "-1.06383%",
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <div
                                        className="we-mega-menu-col span12"
                                        style={{
                                          boxSizing: "border-box",
                                          outline: "none",
                                          transition: "0.1s",
                                          minHeight: "1.875rem",
                                          marginTop: "0.3125rem",
                                          marginBottom: "0.3125rem",
                                          border: "0px none",
                                          backgroundColor: "transparent",
                                          display: "flex",
                                          flexDirection: "column",
                                          position: "relative",
                                          marginLeft: "1.06383%",
                                          marginRight: "1.06383%",
                                          flex: "0 0 97.8723%",
                                          WebkitBoxFlex: "0",
                                          maxWidth: "97.8723%",
                                        }}
                                      >
                                        <ul
                                          className="nav nav-tabs subul"
                                          style={{
                                            boxSizing: "border-box",
                                            outline: "none",
                                            listStyle: "none",
                                            margin: "0px",
                                            marginTop: "0px",
                                            marginBottom: "0px",
                                            borderBottom: "0px none",
                                            padding: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              marginBottom: "-1px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                              borderTop:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/sites/default/files/Corporate-Social-Responsibility-Approved-CSR-Projects-2023-24.pdf"
                                              target="_blank"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                                color: "rgb(0, 0, 0)",
                                              }}
                                            >
                                              {"2023-24"}
                                            </a>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              marginBottom: "-1px",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom:
                                                "1px solid rgb(221, 221, 221)",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/sites/default/files/Approved-CSR-Projects-22-23.pdf"
                                              target="_blank"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                                color: "rgb(0, 0, 0)",
                                              }}
                                            >
                                              {"2022-23"}
                                            </a>
                                          </li>
                                          <li
                                            className="we-mega-menu-li"
                                            style={{
                                              boxSizing: "border-box",
                                              outline: "none",
                                              padding: "0px",
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              marginLeft: "5px",
                                              marginRight: "5px",
                                              display: "block",
                                              cssFloat: "none",
                                              marginBottom: "0px",
                                              paddingTop: "7px",
                                              paddingBottom: "7px",
                                              position: "relative",
                                              opacity: 0.65,
                                              background: "transparent",
                                              border: "none",
                                              fontSize: "14px",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              fontWeight: 400,
                                              textTransform: "capitalize",
                                              fontFamily: "Poppins, sans-serif",
                                              borderBottom: "none",
                                            }}
                                          >
                                            <a
                                              className="we-mega-menu-li"
                                              href="https://www.cipla.com/sites/default/files/Approved-CSR-Projects-2021-2022.pdf"
                                              target="_blank"
                                              style={{
                                                boxSizing: "border-box",
                                                textDecoration: "none",
                                                display: "block",
                                                lineHeight: 1.42857,
                                                boxShadow: "none",
                                                position: "static",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                                borderRadius: "0px",
                                                borderWidth: "0px 0px 1px",
                                                borderStyle: "none none solid",
                                                borderImage: "initial",
                                                padding: "0.5rem 0px",
                                                paddingLeft: "23px",
                                                cursor: "pointer",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                                outline: "none",
                                                background: "transparent",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderTopColor: "initial",
                                                borderRightColor: "initial",
                                                borderBottomColor: "initial",
                                                borderLeftColor: "initial",
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                textTransform: "capitalize",
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                                color: "rgb(0, 0, 0)",
                                              }}
                                            >
                                              {"2021-22"}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="we-mega-menu-li"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      cssFloat: "left",
                      padding: "0px",
                      boxShadow: "none",
                      position: "static",
                      display: "flex",
                      margin: "0px",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      marginBottom: "0px",
                      cursor: "pointer",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "none",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <a
                      className="we-mega-menu-li"
                      href="https://www.cipla.com/contact-us"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        lineHeight: 1.42857,
                        boxShadow: "none",
                        position: "static",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        borderRadius: "0px",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        cursor: "pointer",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        outline: "none",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {"Contact Us"}
                    </a>
                  </li>
                  <li
                    className="we-mega-menu-li dropdown-menu header-global-link"
                    style={{
                      boxSizing: "border-box",
                      outline: "none",
                      listStyle: "none",
                      left: "0px",
                      textAlign: "left",
                      cssFloat: "left",
                      borderRadius: "0px",
                      minWidth: "initial",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      padding: "0px",
                      boxShadow: "none",
                      display: "flex",
                      top: "auto",
                      margin: "0px",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "0px",
                      marginBottom: "0px",
                      zIndex: 21,
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "30px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "none",
                      backgroundClip: "initial",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <span
                      className="we-megamenu-nolink"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        cursor: "pointer",
                        position: "relative",
                        borderRadius: "0px",
                        marginRight: "0px",
                        flex: "1 1 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        padding: "0px",
                        marginLeft: "0px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        paddingRight: "0px",
                        background: "transparent",
                        border: "none",
                        backgroundColor: "transparent",
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0px",
                      }}
                    >
                      Global
                    </span>
                    <div
                      className="we-mega-menu-submenu re-width"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        position: "absolute",
                        borderRadius: "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "0px",
                        margin: "0px",
                        borderTop: "2px solid rgb(221, 221, 221)",
                        transition: "0.4s ease-in-out",
                        zIndex: 20,
                        marginLeft: "0px",
                        minWidth: "270px",
                        right: "0px",
                        marginTop: "32px",
                        top: "35px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        visibility: "hidden",
                        opacity: 0,
                        boxShadow: "none",
                        border: "1px solid rgb(221, 221, 221)",
                        left: "auto",
                        width: "215px",
                      }}
                    >
                      <div
                        className="we-mega-menu-submenu-inner"
                        style={{
                          boxSizing: "border-box",
                          outline: "none",
                          margin: "0px auto",
                          maxWidth: "670px",
                          minHeight: "11.25rem",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                        }}
                      >
                        <div
                          className="we-mega-menu-row"
                          style={{
                            boxSizing: "border-box",
                            outline: "none",
                            marginLeft: "-1.06383%",
                            marginRight: "-1.06383%",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            className="we-mega-menu-col span12"
                            style={{
                              boxSizing: "border-box",
                              outline: "none",
                              transition: "0.1s",
                              minHeight: "1.875rem",
                              marginTop: "0.3125rem",
                              marginBottom: "0.3125rem",
                              border: "0px none",
                              backgroundColor: "transparent",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              marginLeft: "1.06383%",
                              marginRight: "1.06383%",
                              flex: "0 0 97.8723%",
                              WebkitBoxFlex: "0",
                              maxWidth: "97.8723%",
                            }}
                          >
                            <ul
                              className="nav nav-tabs subul"
                              style={{
                                boxSizing: "border-box",
                                outline: "none",
                                listStyle: "none",
                                margin: "0px",
                                marginTop: "0px",
                                marginBottom: "0px",
                                borderBottom: "0px none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "3px",
                                  paddingBottom: "3px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/our-presence/brazil"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Brazil"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "3px",
                                  paddingBottom: "3px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://cipla.co.ke/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Kenya"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "3px",
                                  paddingBottom: "3px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.co.za/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"South Africa"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "3px",
                                  paddingBottom: "3px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://www.cipla.com/cipla-srilanka"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"Sri Lanka"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  marginBottom: "-1px",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  paddingTop: "3px",
                                  paddingBottom: "3px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://uk.cipla.com/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"United Kingdom"}
                                </a>
                              </li>
                              <li
                                className="we-mega-menu-li"
                                style={{
                                  boxSizing: "border-box",
                                  outline: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                  position: "static",
                                  cursor: "pointer",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  display: "block",
                                  cssFloat: "none",
                                  marginBottom: "0px",
                                  paddingTop: "3px",
                                  paddingBottom: "3px",
                                  background: "transparent",
                                  border: "none",
                                  fontSize: "14px",
                                  color: "rgba(0, 0, 0, 0.8)",
                                  fontWeight: 400,
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins, sans-serif",
                                  borderBottom: "1px solid rgb(221, 221, 221)",
                                }}
                              >
                                <a
                                  className="we-mega-menu-li"
                                  href="https://usa.cipla.com/"
                                  target="_blank"
                                  style={{
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    display: "block",
                                    lineHeight: 1.42857,
                                    boxShadow: "none",
                                    position: "static",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    borderRadius: "0px",
                                    borderWidth: "0px 0px 1px",
                                    borderStyle: "none none solid",
                                    borderImage: "initial",
                                    padding: "0.5rem 0px",
                                    cursor: "pointer",
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    outline: "none",
                                    background: "transparent",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    borderTopColor: "initial",
                                    borderRightColor: "initial",
                                    borderBottomColor: "initial",
                                    borderLeftColor: "initial",
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                    fontWeight: 400,
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins, sans-serif",
                                  }}
                                >
                                  {"USA"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </div>
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
