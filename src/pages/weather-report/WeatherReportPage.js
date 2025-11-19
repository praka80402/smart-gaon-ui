// src/pages/weather-report/WeatherReportPage.js
import React from 'react';
// import WeatherCard from './WeatherCard';
import WeatherDashboard from './WeatherDashboard';

const WeatherReportPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <WeatherDashboard />
    </div>
  );
};

export default WeatherReportPage;
