import React from "react";
import "../../App.css";
//import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function Footer() {
  // const { t } = useTranslation();
 
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
          <h3>{i18n.t('aboutUs')}</h3>
          <p>{i18n.t('aboutDescription')}</p>
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
