// src/components/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // import Link for navigation
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

const ServiceCard = ({ name, to }) => {
  const iconSrc = iconsMap[name] || '';

  // If a 'to' prop is provided, wrap card with Link for navigation
  const CardContent = (
    <div className="service-card">
      {iconSrc && <img src={iconSrc} alt={name} className="icon" />}
      <h3>{name}</h3>
    </div>
  );

  if (to) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        {CardContent}
      </Link>
    );
  }

  // If no 'to', just render the card
  return CardContent;
};

export default ServiceCard;
