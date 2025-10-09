// import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import "../../App.css";
// import logo from "../../logo.svg";


// function Footer() {
//   return (
//     <footer className="alt-footer">
//       <div className="alt-footer-top">
//          <img src={logo} alt="Smart Gaon Logo" className="logo" />
//         <h2>SmartGaon AI</h2>
//         <p>
//           Empowering rural India through digital transformation and connecting villages
//           with modern opportunities.
//         </p>
//         <div className="alt-social-icons">
//           <FaFacebookF />
//           <FaTwitter />
//           <FaLinkedinIn />
//           <FaInstagram />
//         </div>
//       </div>

//       <div className="alt-footer-links">
//         <a href="#">About Us</a>
//         <a href="#">Services</a>
//         <a href="#">Resources</a>
//         <a href="#">Contact</a>
//       </div>

//       <div className="alt-footer-bottom">
//         <p>© 2025 Smart Gaon | All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Services Section */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Agriculture AI</li>
            <li>Health Monitoring</li>
            <li>Education Tools</li>
            <li>Market Insights</li>
            <li>Water Management</li>
            <li>Financial Aid</li>
            <li>Weather Alerts</li>
            <li>Community Chat</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            SmartGaon AI is dedicated to bringing AI solutions 
            to rural India, improving lives in villages.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Address: 123 Village Tech Hub, Mumbai, Maharashtra 400001</p>
          <p>Email: info@smartgaon.ai</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 SmartGaon AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
