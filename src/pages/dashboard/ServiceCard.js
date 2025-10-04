// src/components/ServiceCard.js
import React from 'react';
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

const ServiceCard = ({ name }) => {
  const iconSrc = iconsMap[name] || '';

  return (
    <div className="service-card">
      {/* Render the SVG icon */}
      {iconSrc && <img src={iconSrc} alt={name} className="icon" />}
      <h3>{name}</h3>
    </div>
  );
};

export default ServiceCard;
