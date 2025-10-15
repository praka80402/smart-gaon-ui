import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSection = ({ setShowLoginModal }) => {
  return (
    <section className="services">
      <ServiceCard name="Sarkari Seva" to="/sarkari-seva" setShowLoginModal={setShowLoginModal} />
      <ServiceCard name="Shiksha Sahayak" to="/shiksha-sahayak" setShowLoginModal={setShowLoginModal} />
      <ServiceCard name="Gram Doctor" to="/gram-doctor" setShowLoginModal={setShowLoginModal} />
      <ServiceCard name="Kishan Mitra"to="/kishanMitra" setShowLoginModal={setShowLoginModal} />
      <ServiceCard name="Gaon Connect"to="/gaon-connect" setShowLoginModal={setShowLoginModal} />
      <ServiceCard name="Gaon Bazar" setShowLoginModal={setShowLoginModal} />
      <ServiceCard name="Seva Bazar" setShowLoginModal={setShowLoginModal} />
      <ServiceCard name="Weather Report" to="/weather-report" setShowLoginModal={setShowLoginModal} />
    </section>
  );
};

export default ServiceSection;