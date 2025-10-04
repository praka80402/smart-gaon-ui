// src/pages/weather-report/WeatherReportPage.js
import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherReportPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <WeatherCard />
    </div>
  );
};

export default WeatherReportPage;
