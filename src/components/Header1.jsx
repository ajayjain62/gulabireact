import React, { useState } from "react";
import './Header.css'; // Ensure this path is correct

const MegaMenu = ({ items }) => (
  <div className="mega-menu">
    <ul className="mega-menu-list">
      {items.map((item, index) => (
        <li key={index} className="mega-menu-item">
          <a href={item.link} target="_self" style={{ textDecoration: 'none' }}>
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
      link: "https://www.cipla.com/about-us",
      megaMenu: [
        { label: "Our Credo", link: "https://www.cipla.com/about-us/onecipla-credo" },
        { label: "Board of Directors", link: "https://www.cipla.com/about-us/board-directors" },
      ]
    },
    {
      label: "Our Presence",
      link: "https://www.cipla.com/our-presence",
      megaMenu: [
        { label: "Australia", link: "https://www.cipla.com/our-presence/australia" },
        { label: "Brazil", link: "https://www.cipla.com/our-presence/brazil" },
      ]
    },
    {
      label: "Our Offerings",
      link: "https://www.cipla.com/products",
      megaMenu: [
        { label: "Prescription Medicines", link: "https://www.cipla.com/products/prescription" },
        { label: "Over-the-Counter", link: "https://www.cipla.com/products/otc" },
      ]
    },
    {
      label: "investors",
      link: "https://www.cipla.com/contact",
    },
     {
      label: "sustainability",
      link: "https://www.cipla.com/contact",
    },
     {
      label: "careers",
      link: "https://www.cipla.com/contact",
    },
     {
      label: "media centre",
      link: "https://www.cipla.com/contact",
    },
     {
      label: "corporate social responsibility",
      link: "https://www.cipla.com/contact",
    },
     {
      label: "contact us",
      link: "https://www.cipla.com/contact",
    }
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <header className="header">
      <div className="logo-holder">
        <a className="logo" href="https://www.cipla.com/" rel="home" title="Home">
          <img alt="Home" src="https://i.postimg.cc/0NYGQGCD/logo-2.png" />
        </a>
      </div>
      <nav className="navbar">
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.link} className="menu-link">{item.label}</a>
              {item.megaMenu && (
                <MegaMenu items={item.megaMenu} />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="search-holder">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button">🔍</button>
        </form>
      </div>
    </header>
  );
};

export default Header;