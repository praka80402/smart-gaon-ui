// import React from "react";
// import "../../App.css";
// //import { useTranslation } from 'react-i18next';
// import i18n from '../../i18n';

// function Footer() {
  
 
//   return (
//     <footer className="footer">
//       <div className="footer-container">
      
//         <div className="footer-column">
//           <h3>Services</h3>
//           <ul>
//             <li>Sarkari Seva </li>

//             <li>Shiksha Sahayak</li>
//             <li>Gaon Bazaar</li>
//             <li>Gram Doctor</li>
//             <li>Kishan Mitra</li>
//             <li>Seva Bazaar</li>
//             <li>Gaon Bazaar</li>
//             <li>Weather Report</li>
//              <li>Donation</li>
//           </ul>
//         </div>

       
//         <div className="footer-column">
//           <h3>{i18n.t('aboutUs')}</h3>
//           <p>{i18n.t('aboutDescription')}</p>
//         </div>

       
//         <div className="footer-column">
//           <h3>Contact</h3>
//           <p>Address: 123 Village Tech Hub, Mumbai, Maharashtra 400001</p>
//           <p>Email: info@smartgaon.ai</p>
//           <p>Phone: +91 12345 67890</p>
//         </div>
//       </div>

    
//       <div className="footer-bottom">
//         <p>© 2025 SmartGaon AI. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import i18n from "../../i18n";

function Footer({ setShowLoginModal }) { // ✅ Expecting prop from parent
  const navigate = useNavigate();

  const handleFooterClick = (path) => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("redirectAfterLogin", path);
      setShowLoginModal(true);
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li onClick={() => handleFooterClick("/sarkari-seva")}>Sarkari Seva</li>
            <li onClick={() => handleFooterClick("/shiksha-sahayak")}>Shiksha Sahayak</li>
            <li onClick={() => handleFooterClick("/gram-doctor")}>Gram Doctor</li>
            <li onClick={() => handleFooterClick("/kishanMitra")}>Kishan Mitra</li>
            <li onClick={() => handleFooterClick("/gaon-connect")}>My Village</li>
            <li onClick={() => handleFooterClick("/gaon-bazaar")}>Gaon Bazar</li>
            <li onClick={() => handleFooterClick("/sewa-bazaar")}>Seva Bazar</li>
            <li onClick={() => handleFooterClick("/weather-report")}>Weather Report</li>
            <li onClick={() => handleFooterClick("/donation")}>Donation</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>{i18n.t("aboutUs")}</h3>
          <p>{i18n.t("aboutDescription")}</p>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>📍 123 Village Tech Hub, Mumbai, Maharashtra 400001</p>
          <p>📧 info@smartgaon.ai</p>
          <p>📞 +91 12345 67890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SmartGaon AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
