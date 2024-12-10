import React, { useState } from "react";
import "./Header.css"; // Ensure the correct path

const MegaMenu = ({ items }) => (
  <div className="unique-mega-menu">
    <ul className="unique-mega-menu-list">
      {items.map((item, index) => (
        <li key={index} className="unique-mega-menu-item">
          <a href={item.link} target="_self" className="unique-mega-menu-link">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const menuItems = [
    {
      label: "About Us",
      link: "/about",
      megaMenu: [
        { label: "Our Credo", link: "#" },
        { label: "Board of Directors", link: "#" },
      ],
    },
    {
      label: "Our Expertise",
      link: "/our-expertise",
      megaMenu: [
        { label: "Skin Glow", link: "/skin-glow" },
        { label: "Bone & Joint Care", link: "/bone-and-joint" },
        { label: "Female Vitality", link: "/female-vitality" },
        { label: "Height Enhancer", link: "/height-enhancer" },
        { label: "Antioxidants", link: "/anti-oxidant" },
        { label: "Male Vitality", link: "/male-vitality" },
        { label: "Performance", link: "/performance" },
        { label: "Dandruff", link: "/dandruff" },
        { label: "Extracts", link: "/extracts" },
        { label: "Speciality Super Foods", link: "/speciality-superfoods" },
        { label: "Anti Anemic", link: "/anti-anemic" },
        { label: "Antidiabetic", link: "/anti-diabetic" },
        { label: "Cardiology", link: "/cardiology" },
        { label: "Weight Loss", link: "/weight-loss" },
        { label: "Eye Health", link: "/eye-health" },
        { label: "Memory Enhancer", link: "/memory-enhancer" },
        { label: "Hair Fall Control", link: "/hair-fall-control" },
        { label: "Collagen Supplement", link: "/collagen-supplement" },
        { label: "Body Detox", link: "/body-detox" },
        { label: "Immunity Booster", link: "/immunity-booster" },
      ],
    },
    {
      label: "Corporate Social Responsibility",
      link: "/csr",
    },
    {
      label: "Media Centre",
      link: "/media-center",
    },
    {
      label: "Franchise",
      link: "/franchise",
      megaMenu: [
        { label: "Australia", link: "#" },
        { label: "Brazil", link: "#" },
      ],
    },
    {
      label: "Careers",
      link: "/career",
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (  

    <header className="header">
      <div className="unique-logo-holder">
        <a className="unique-logo" href="/" rel="home" title="Home">
          <img alt="Home" src="https://i.postimg.cc/2SfrmKRH/GOA-1.png" className="unique-logo-img" />
        </a>
      </div>
      <nav className="unique-navbar">
        <ul className="unique-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="unique-menu-item">
              <a href={item.link} className="unique-menu-link">
                {item.label}
              </a>
              {item.megaMenu && <MegaMenu items={item.megaMenu} />}
            </li>
          ))}
        </ul>
      </nav>
      <div className="search-container">
  <form onSubmit={handleSearchSubmit} className="search-box">
    <div className="search-inputq-wrapper">
      <input 
        type="text" 
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Type to search..." 
        className="search-inputq"
      />
      <button type="submit" className="search-icon-button">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="white" 
          viewBox="0 0 24 24" 
          width="22" 
          height="22"
          aria-hidden="true"
        >
          <path 
            d="M10 2a8 8 0 1 1-5.657 13.657l-4.292 4.293a1 1 0 0 1-1.414-1.414l4.293-4.292A8 8 0 0 1 10 2zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4z"
          />
        </svg>
      </button>
    </div>
  </form>
</div>

    </header>
  );
};

export default Header;