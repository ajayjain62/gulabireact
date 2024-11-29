import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function Component() {
  return (
    <>
      <div
        className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 top-header-bg css-1wxaqej"
        style={{
          padding: "0px",
          border: "0px",
          font: "inherit",
          verticalAlign: "initial",
          backgroundColor: "#683480",
          margin: "0px",
          boxSizing: "border-box",
          flexDirection: "row",
        }}
      >
        <div
          className="MuiContainer-root css-10ur324"
          style={{
            margin: "0px",
            border: "0px",
            font: "inherit",
            verticalAlign: "initial",
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
            padding: "0px 55px",
            paddingRight: "55px",
            paddingLeft: "55px",
          }}
        >
          <div
            className="top-header-wrapper"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              border: "0px",
              font: "inherit",
              verticalAlign: "initial",
              background: "rgb(255, 255, 255)",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              fontFamily: "proxima-nova",
              width: "100%",
              padding: "0px",
              backgroundColor: "#683480",
              color: "rgb(255, 255, 255)",
              minHeight: "24px",
            }}
          >
            <div
              className="level0-navigation"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                border: "0px",
                font: "inherit",
                verticalAlign: "initial",
                padding: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "24px",
              }}
            >
              <a
          href="https://www.pantaloons.com/content/greencard?source=firstband"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
          className="social-media-icon-link"
          style={{
            color: "white",
            fontSize: "18px",
            transition: "transform 0.3s ease, color 0.3s ease",
            margin: "0 5px 0px 10px",
            textDecoration: "none",
          }}
        ><FontAwesomeIcon
            icon={faInstagram}
            className="icon-instagram"
            style={{
              transition: "all 0.3s ease",
            }}
          />
                
              </a>
              <a
          href="https://pantaloons.woohoo.in/e-gift-card"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
          className="social-media-icon-link"
          style={{
            color: "white",
            fontSize: "18px",
            transition: "transform 0.3s ease, color 0.3s ease",
            margin: "0 5px",
            textDecoration: "none",
          }}
        >
                <FontAwesomeIcon
            icon={faTwitter}
            className="icon-twitter"
            style={{
              transition: "all 0.3s ease",
            }}
          />
              </a>
              <a
          href="https://www.pantaloons.com/content/store-locators-9?source=firstband"
          title="Facebook"
          target="_blank"
          rel="noreferrer"
          className="social-media-icon-link"
          style={{
            color: "white",
            fontSize: "18px",
            transition: "transform 0.3s ease, color 0.3s ease",
            margin: "0 5px",
            textDecoration: "none",
          }}
        >
                <FontAwesomeIcon
            icon={faFacebook}
            className="icon-facebook"
            style={{
              transition: "all 0.3s ease",
            }}
          />
              </a>
              <a
          href="https://track.pantaloons.com/?source=firstband"
          title="YouTube"
          target="_blank"
          rel="noreferrer"
          className="social-media-icon-link"
          style={{
            color: "white",
            fontSize: "18px",
            transition: "transform 0.3s ease, color 0.3s ease",
            margin: "0 5px",
            textDecoration: "none",
          }}
        ><FontAwesomeIcon
            icon={faYoutube}
            className="icon-youtube"
            style={{
              transition: "all 0.3s ease",
            }}
          />
              </a>
              
            </div>{" "}
            <div
  className="storemode-nav"
  style={{
    boxSizing: "border-box",
    marginTop: "0px",
    padding: "0px",
    border: "0px",
    font: "inherit",
    verticalAlign: "initial",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "12px",
    fontFamily: "proxima-nova",
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "normal",
    minWidth: "280px",
    height: "24px",
  }}
>
  {/* Currency Converter Dropdown */}
  <select
    className="currency-converter"
    style={{
      boxSizing: "border-box",
      margin: "0px",
      padding: "5px",
      font: "inherit",
      fontSize: "12px",
      fontFamily: "proxima-nova",
      fontWeight: 500,
      letterSpacing: "0.26px",
      textTransform: "capitalize",
      backgroundColor: "#fff",
      borderRadius: "4px",
      border: "1px solid #ccc",
      color: "#333",
    }}
  >
    <option value="INR">Indian Rupee (INR)</option>
    <option value="USD">US Dollar (USD)</option>
    <option value="EUR">Euro (EUR)</option>
    <option value="CAD">Canadian Dollar (CAD)</option>
    <option value="GBP">British Pound (GBP)</option>
    {/* Add more currencies as needed */}
  </select>

  {/* Rest of your existing elements */}
  <span
    className="MuiSwitch-root MuiSwitch-sizeMedium css-ecvcn9"
    style={{
      border: "0px",
      font: "inherit",
      overflow: "hidden",
      padding: "12px",
      display: "none",
      width: "58px",
      height: "38px",
      boxSizing: "border-box",
      position: "relative",
      flexShrink: 0,
      zIndex: 0,
      verticalAlign: "middle",
      margin: "0px",
      boxShadow: "none",
    }}
  >
    {/* Switch Base */}
    <span
      className="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root css-1nr2wod"
      style={{
        font: "inherit",
        outline: "0px",
        border: "0px",
        margin: "0px",
        textDecoration: "none",
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        appearance: "none",
        position: "absolute",
        zIndex: 1,
        transition: "2s",
        padding: "0px",
        top: "14px",
        left: "14px",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <input
        className="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3 custom-cursor-on-hover"
        type="checkbox"
        aria-label="primary checkbox"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          padding: "0px",
          top: "0px",
          height: "100%",
          opacity: 0,
          zIndex: 1,
          position: "absolute",
          left: "-100%",
          width: "300%",
        }}
      />
      <span
        className="MuiSwitch-thumb css-19gndve"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          padding: "0px",
          borderRadius: "50%",
          width: "10px",
          height: "10px",
          backgroundImage:
            'url("https://imagescdn.pantaloons.com/img/app/brands/pantaloons/svgicons/storeModeSwitchInnerCircle.svg")',
        }}
      />
    </span>
    <span
      className="MuiSwitch-track css-1ju1kxc"
      style={{
        boxSizing: "border-box",
        height: "100%",
        width: "100%",
        zIndex: -1,
        backgroundColor: "rgb(0, 0, 0)",
        borderRadius: "10px",
      }}
    />
  </span>

  <span
    className="mobileHomePageSprite store-icon custom-cursor-on-hover"
    style={{
      width: "16px",
      height: "16px",
      marginRight: "4px",
      background:
        'url("https://imagescdn.pantaloons.com/img/app/brands/pantaloons/svgicons/mobile-sprite-v5.png") 0% 0% / auto',
      display: "inline-block",
      backgroundPosition: "92px -21px",
      backgroundSize: "633px",
      display: "none",
    }}
  />

  <span
    className="inactive-text"
    style={{
      fontSize: "12px",
      fontFamily: "proxima-nova",
      fontWeight: 500,
      lineHeight: "15px",
      letterSpacing: "0.26pt",
      textTransform: "capitalize",
      color: "rgb(255, 255, 255)",
    }}
  >
    STORE MODE
  </span>
</div>

          </div>
        </div>
      </div>
 
    </>
  );
}
