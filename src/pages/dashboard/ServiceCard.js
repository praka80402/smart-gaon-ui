// src/components/ServiceCard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // import Link for navigation
import './ServiceCard.css'

// Import your SVG icons
import sarkariIcon from '../../assets/home-icon.svg';
import shikshaIcon from '../../assets/sahayak-icon.svg';
import gramIcon from '../../assets/doctor-icon.svg';
import kishanIcon from '../../assets/kisan-icon.svg';
import gaonConnectIcon from '../../assets/connect-icon.svg';
import gaonBazarIcon from '../../assets/bazar-icon.svg';
import sevaBazarIcon from '../../assets/seva-icon.svg';
import weatherIcon from '../../assets/weather-icon.svg';

const iconsMap = {
  "Sarkari Seva": sarkariIcon,
  "Shiksha Sahayak": shikshaIcon,
  "Gram Doctor": gramIcon,
  "Kishan Mitra": kishanIcon,
  "Gaon Connect": gaonConnectIcon,
  "Gaon Bazar": gaonBazarIcon,
  "Seva Bazar": sevaBazarIcon,
  "Weather Report": weatherIcon,
};

// const ServiceCard = ({ name, to }) => {
//    const navigate = useNavigate();
//   const iconSrc = iconsMap[name] || '';

//  const handleClick = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       // Save the intended route for after login
//       localStorage.setItem('redirectAfterLogin', to);
//       navigate("/login");
//     } else {
//       navigate(to);
//     }
//   };
//    return (
//     <div
//       className="service-card"
//       onClick={handleClick}
//       style={{ cursor: "pointer" }}
//     >
//       {iconSrc && <img src={iconSrc} alt={name} className="icon" />}
//       <h5>{name}</h5>
//     </div>
//   );
// };

const ServiceCard = ({ name, to, setShowLoginModal }) => {
  const navigate = useNavigate();
  const iconSrc = iconsMap[name] || '';

  const handleClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('redirectAfterLogin', to);
      setShowLoginModal(true); // ✅ open modal directly
    } else {
      navigate(to);
    }
  };

  return (
    <div
      className="service-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {iconSrc && <img src={iconSrc} alt={name} className="icon" />}
      <h5>{name}</h5>
    </div>
  );
};







//   const CardContent = (
//     <div className="service-card">
//       {iconSrc && <img src={iconSrc} alt={name} className="icon" />}
//       <h5>{name}</h5>
//     </div>
//   );

//   if (to) {
//     return (
//       <Link to={to} style={{ textDecoration: 'none' }}>
//         {CardContent}
//       </Link>
//     );
//   }

  
//   return CardContent;
// };

export default ServiceCard;
