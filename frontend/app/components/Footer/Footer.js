"use client";

import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col footer-brand-col">
          <h2 className="footer-brand">GetSetGo</h2>
          <p className="footer-desc">
            Discover the best travel experiences tailored to your preferences and budget.
          </p>
        </div>
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>About</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Stay Connected</h3>
          <p className="footer-desc">
            Subscribe to our newsletter for travel tips and exclusive offers.
          </p>
          <form className="footer-newsletter">
            <input type="email" placeholder="Your email" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        © 2025 GetSetGo. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;