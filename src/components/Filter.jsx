import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import './FilterSection.css'; // Import the CSS

const FilterSection = () => {
  // State to manage the visibility of each section
  const [openSections, setOpenSections] = useState({});

  // Function to toggle a section
  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Section data (you can modify or add more as needed)
  const sections = [
    { title: 'TREND', options: ['Vintage', 'Modern', 'Casual'] },
    { title: 'CATEGORY', options: ['Clothing', 'Footwear', 'Accessories'] },
    { title: 'PRICE', options: ['Under $50', '$50-$100', 'Above $100'] },
    { title: 'SIZES', options: ['Small', 'Medium', 'Large'] },
    { title: 'DISCOUNT', options: ['10% Off', '20% Off', '50% Off'] },
    { title: 'OCCASION', options: ['Party', 'Work', 'Casual'] },
    { title: 'COLOR', options: ['Red', 'Blue', 'Green'] },
    { title: 'MORE FILTERS', options: ['Eco-Friendly', 'Best Sellers'] },
  ];

  return (
    <div className="filter-section">
      <h3 className="filter-title">FILTER BY</h3>
      {sections.map((section, index) => (
        <div key={index} className="filter-section-item">
          <div
            className="filter-section-header"
            onClick={() => toggleSection(section.title)}
          >
            <span className="filter-section-title">{section.title}</span>
            <span className="filter-section-icon">
              {openSections[section.title] ? '−' : '+'}
            </span>
          </div>
          <div
            className={`filter-options ${
              openSections[section.title] ? 'open' : 'closed'
            }`}
          >
            {section.options.map((option, idx) => (
              <label key={idx} className="filter-option">
                <Checkbox className="filter-checkbox" />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;

// CSS Styles (Place this in a CSS file named FilterSection.css)

