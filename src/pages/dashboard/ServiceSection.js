// src/components/ServiceSection.js
import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
  return (
    <section className="services">
      <ServiceCard name="Sarkari Seva"  to="/sarkari-seva"/>
      <ServiceCard name="Shiksha Sahayak" />
      <ServiceCard name="Gram Doctor" />
      <ServiceCard name="Kishan Mitra" />
      <ServiceCard name="Gaon Connect" />
      <ServiceCard name="Gaon Bazar" />
      <ServiceCard name="Seva Bazar" />
      <ServiceCard name="Weather Report" to="/weather-report"  />
    </section>
  );
};

export default ServiceSection;
