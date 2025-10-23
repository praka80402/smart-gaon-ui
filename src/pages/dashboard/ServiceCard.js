
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css';

import sarkariIcon from '../../assets/home-icon.svg';
import shikshaIcon from '../../assets/sahayak-icon.svg';
import gramIcon from '../../assets/doctor-icon.svg';
import kishanIcon from '../../assets/kisan-icon.svg';
import gaonConnectIcon from '../../assets/connect-icon.svg';
import gaonBazarIcon from '../../assets/bazar-icon.svg';
import sevaBazarIcon from '../../assets/seva-icon.svg';
import weatherIcon from '../../assets/weather-icon.svg';
import donation from '../../assets/Donation.jpeg';

const iconsMap = {
  "Sarkari Seva": sarkariIcon,
  "Shiksha Sahayak": shikshaIcon,
  "Gram Doctor": gramIcon,
  "Kishan Mitra": kishanIcon,
  "My Village": gaonConnectIcon,
  "Gaon Bazar": gaonBazarIcon,
  "Seva Bazar": sevaBazarIcon,
  "Weather Report": weatherIcon,
  "Donation": donation,
};

const ServiceCard = ({ name, to, setShowLoginModal }) => {
  const navigate = useNavigate();
  const iconSrc = iconsMap[name] || '';

  const handleClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('redirectAfterLogin', to);
      setShowLoginModal(true);
    } else {
      navigate(to);
    }
  };

  return (
    <div className="service-card" onClick={handleClick}>
      {iconSrc && (
        <img
          src={iconSrc}
          alt={name}
          className={`icon ${name === "Donation" ? "donation-icon" : ""}`}
        />
      )}
      <h5>{name}</h5>
    </div>
  );
};

export default ServiceCard;
