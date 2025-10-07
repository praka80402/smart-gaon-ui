import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
  return (
    <section className="services">
      <ServiceCard name="Sarkari Seva" />
      <ServiceCard name="Shiksha Sahayak"  to="/shiksha-sahayak"/>
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