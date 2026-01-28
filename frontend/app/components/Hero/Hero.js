'use client';

import React from 'react';
import './style.css';

export default function Hero() {
  return (
    <div className="hero-container">
        <img src="/images/hero7.jpg" className="hero-img">
        </img>

      <div className="hero-content">
        <h1>Find Your <span className="mid-part">Perfect Getaway</span></h1>
        <p>Explore handpicked destinations tailored to your interests, budget, and travel dates.</p>
        <a href="#travel-form" className="hero-button">Start Your Journey</a>
      </div>
    </div>
  );
}

