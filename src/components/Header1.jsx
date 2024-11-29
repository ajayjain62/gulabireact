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
      link: "http://localhost:5173/about",
      megaMenu: [
        { label: "Our Credo", link: "https://www.cipla.com/about-us/onecipla-credo" },
        { label: "Board of Directors", link: "https://www.cipla.com/about-us/board-directors" },
      ]
    },
    {
      label: "Franchise",
      link: "#",
      megaMenu: [
        { label: "Australia", link: "https://www.cipla.com/our-presence/australia" },
        { label: "Brazil", link: "https://www.cipla.com/our-presence/brazil" },
      ]
    },
    {
      label: "Product",
      link: "#",
      megaMenu: [
        { label: "Prescription Medicines", link: "https://www.cipla.com/products/prescription" },
        { label: "Over-the-Counter", link: "https://www.cipla.com/products/otc" },
      ]
    },
    {
      label: "Corporate Social Responsibility",
      link: "http://localhost:5173/csr",
    },
     {
      label: "Sustainability",
      link: "#",
    },
     {
      label: "Careers",
      link: "http://localhost:5173/career",
    },
     {
      label: "Media centre",
      link: "#",
    },
     {
      label: "Contact us",
      link: "http://localhost:5173/contact",
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
        <a className="logo" href="http://localhost:5173/" rel="home" title="Home">
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
      <div className="search-container">
  <form onSubmit={handleSearchSubmit} className="search-box">
    <div className="search-input-wrapper">
      <input 
        type="text" 
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Type to search..." 
        className="search-input"
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