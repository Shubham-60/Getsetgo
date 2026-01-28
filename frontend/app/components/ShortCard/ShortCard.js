import React from 'react';
import './style.css';

function ShortCard({ image, title, location, price, rating }) {
  return (
    <div className="shortcard">
      <div className="shortcard-img-wrapper">
        <img src={image} alt={title} className="shortcard-img" />
        <div className="shortcard-rating">
          <span>{rating} <span className="star">★</span></span>
        </div>
      </div>
      <div className="shortcard-content">
        <div className="shortcard-title">{title}</div>
        <div className="shortcard-location">{location}</div>
        <div className="shortcard-price">
          <span className="rupee">₹</span>
          <span className="amount">{price.toLocaleString()}</span>
          <span className="per">/ person</span>
        </div>
      </div>
    </div>
  );
}

export default ShortCard;