import React from "react";
import "./style.css";

export default function Info() {
  return (
    <div className="info-section">
      <div className="info-card">
        <div className="info-icon">
          <img src="./images/location.svg" alt="Location Icon" />
        </div>
        <div className="info-title">Handpicked Destinations</div>
        <div className="info-desc">
          We've carefully selected the best destinations across India that offer extraordinary experiences.
        </div>
      </div>
      <div className="info-card">
        <div className="info-icon">
        <img src="./images/currency.svg" alt="Currency Icon" />
        </div>
        <div className="info-title">Best Value for Money</div>
        <div className="info-desc">
          Get the most out of your travel budget with our carefully curated packages and transparent pricing.
        </div>
      </div>
      <div className="info-card">
        <div className="info-icon">
        <img src="./images/explore.svg" alt="Explore Icon" />
        </div>
        <div className="info-title">Personalized Recommendations</div>
        <div className="info-desc">
          Receive customized travel suggestions based on your unique preferences and interests.
        </div>
      </div>
    </div>
  );
}