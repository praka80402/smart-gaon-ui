import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../../App.css";

function Footer() {
  return (
    <footer className="alt-footer">
      <div className="alt-footer-top">
        <h2>🌱 Smart Gaon</h2>
        <p>
          Empowering rural India through digital transformation and connecting villages
          with modern opportunities.
        </p>
        <div className="alt-social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>

      <div className="alt-footer-links">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Resources</a>
        <a href="#">Contact</a>
      </div>

      <div className="alt-footer-bottom">
        <p>© 2025 Smart Gaon | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
