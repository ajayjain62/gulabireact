import React from 'react';
import './PrivateLab.css';

const ContactForm = () => {
  return (
    <form id="contact-form" className="contact-form">
      <div className="input-field">
        <label htmlFor="name">
          Name
          <em className="required">*</em>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="input"
        />
      </div>

      <div className="input-field">
        <label htmlFor="email">
          Email ID
          <em className="required">*</em>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
          className="input"
        />
      </div>

      <div className="input-field">
        <label htmlFor="mobile">
          Mobile No.
          <em className="required">*</em>
        </label>
        <div className="tel-input-container">
          <button type="button" className="country-code-selector">+91</button>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            className="tel-input"
          />
        </div>
      </div>

      <div className="input-field">
        <label htmlFor="org">
          Organisation
          <em className="required">*</em>
        </label>
        <input
          id="org"
          name="org"
          type="text"
          required
          className="input"
        />
      </div>

      <div className="submit-container">
        <a
          href="#"
          className="submit-button"
        >
          <img
            src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg"
            alt="Host Icon"
            height={16}
            width={16}
            className="submit-icon"
          />
          Submit
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
