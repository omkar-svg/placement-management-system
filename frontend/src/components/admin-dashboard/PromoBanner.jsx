import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import './PromoBanner.css';

function PromoBanner({ heading, subheading }) {
  return (
    <section className="promo-banner">
      <div className="promo-banner__icon">
        <FaUniversity />
      </div>
      <div className="promo-banner__text">
        <h3>{heading}</h3>
        <p>{subheading}</p>
      </div>
      <div className="promo-banner__image" aria-hidden="true" />
    </section>
  );
}

export default PromoBanner;
