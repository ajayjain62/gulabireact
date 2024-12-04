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
      link: "http://localhost:5173/about",
      megaMenu: [
        { label: "Our Credo", link: "https://www.cipla.com/about-us/onecipla-credo" },
        { label: "Board of Directors", link: "https://www.cipla.com/about-us/board-directors" },
      ],
    },
    {
      label: "Our Expertise",
      link: "http://localhost:5173/product",
      megaMenu: [
        { label: "Skin Glow", link: "#" },
        { label: "Bone & Joint Care", link: "#" },
        { label: "Female Vitality", link: "#" },
        { label: "Height Enhancer", link: "#" },
        { label: "Antioxidants", link: "#" },
        { label: "Male Vitality", link: "#" },
        { label: "Performance", link: "#" },
        { label: "Dandruff", link: "#" },
        { label: "Extracts", link: "#" },
        { label: "Speciality Super Foods", link: "#" },
        { label: "Anti Anemic", link: "#" },
        { label: "Antidiabetic", link: "#" },
        { label: "Cardiology", link: "#" },
        { label: "Weight Loss", link: "#" },
        { label: "Eye Health", link: "#" },
        { label: "Memory Enhancer", link: "#" },
        { label: "Hair Fall Control", link: "#" },
        { label: "Collagen Supplement", link: "#" },
        { label: "Body Detox", link: "#" },
        { label: "Immunity Booster", link: "#" },
      ],
    },
    {
      label: "Corporate Social Responsibility",
      link: "http://localhost:5173/csr",
    },
    {
      label: "Media Centre",
      link: "#",
    },
    {
      label: "Franchise",
      link: "#",
      megaMenu: [
        { label: "Australia", link: "https://www.cipla.com/our-presence/australia" },
        { label: "Brazil", link: "https://www.cipla.com/our-presence/brazil" },
      ],
    },
    {
      label: "Careers",
      link: "http://localhost:5173/career",
    },
    {
      label: "Contact Us",
      link: "http://localhost:5173/contact",
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
        <a className="unique-logo" href="http://localhost:5173/" rel="home" title="Home">
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