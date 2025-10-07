import React from "react";
import "./Footer.css";
import {  FaMobileAlt, FaShieldAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
     

      {/* <h3 className="footer-title">⭐ Portal Features</h3>
      <ul className="features-list">
        <li><FaUsers /> Citizen Management</li>
        <li><FaChartLine /> Development Tracking</li>
        <li><FaFileAlt /> Service Requests</li>
        <li><FaRupeeSign /> Financial Reports</li>
      </ul> */}

      <h2 className="welcome">Welcome to Smart Gaon</h2>
      <p className="tagline">Empowering villages through digital transformation</p>

      <div className="stats">
        <p><strong>500+</strong><br /> Villages Connected</p>
        <p><strong>10K+</strong><br /> Citizens Served</p>
        <p><strong>95%</strong><br /> Satisfaction Rate</p>
      </div>

      <div className="footer-extra">
        <p><FaMobileAlt /> <strong>Mobile Friendly</strong><br /> Access from anywhere, anytime</p>
        <p><FaShieldAlt /> <strong>Secure & Reliable</strong><br /> Your data is safe with us</p>
        <p><FaClock /> <strong>24/7 Support</strong><br /> Always here to help</p>
      </div>
    </div>
  );
};

export default Footer;
