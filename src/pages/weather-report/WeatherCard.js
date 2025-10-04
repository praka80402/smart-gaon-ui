// src/pages/weather-report/WeatherCard.js
import React from 'react';

const WeatherCard = () => {
  return (
    <div style={styles.cardContainer}>
      {/* Temperature and Location */}
      <div style={styles.header}>
        <div style={styles.tempRow}>
          <div style={styles.tempNumber}>29</div>
          <div style={styles.tempUnit}>
            <span style={styles.deg}>°C</span> | <span style={styles.deg}>°F</span>
          </div>
        </div>
        <div style={styles.location}>Party Cloudy, <b>New Delhi</b></div>
      </div>
      
      {/* Divider */}
      <hr style={styles.divider} />
      
      {/* Details: Precipitation, Humidity, Wind */}
      <div style={styles.details}>
        {/* Precipitation */}
        <div style={styles.detailItem}>
          <div style={styles.icon}>🌧️</div>
          <div style={styles.detailText}>
            <div style={styles.value}>0%</div>
            <div style={styles.label}>Precipitation</div>
          </div>
        </div>
        {/* Humidity */}
        <div style={styles.detailItem}>
          <div style={styles.icon}>💧</div>
          <div style={styles.detailText}>
            <div style={styles.value}>50%</div>
            <div style={styles.label}>Humidity</div>
          </div>
        </div>
        {/* Wind */}
        <div style={styles.detailItem}>
          <div style={styles.icon}>🌬️</div>
          <div style={styles.detailText}>
            <div style={styles.value}>8 km/h</div>
            <div style={styles.label}>Wind</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  cardContainer: {
    maxWidth: '350px',
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
  },
  tempRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    fontSize: '50px',
    fontWeight: 'bold',
  },
  tempNumber: {
    marginRight: '8px',
    color: '#2E7D32',
  },
  tempUnit: {
    fontSize: '18px',
  },
  deg: {
    fontSize: '14px',
  },
  location: {
    marginTop: '8px',
    fontSize: '16px',
    fontWeight: '600',
  },
  divider: {
    margin: '16px 0',
    border: 'none',
    height: '1px',
    backgroundColor: '#e0e0e0',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '24px',
    marginBottom: '8px',
  },
  detailText: {
    textAlign: 'center',
  },
  value: {
    fontSize: '14px',
    fontWeight: '600',
  },
  label: {
    fontSize: '12px',
    color: '#555',
  },
};

export default WeatherCard;
