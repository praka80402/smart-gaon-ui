import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Smart Gaon Logo" className="logo" />
        <h1>Smart Gaon</h1>
        <p>Empowering rural India through digital transformation. Connecting villages with modern services, governance, and opportunities.</p>
        <div className="buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
      <section className="services">
        <ServiceCard name="Sarkari Seva" />
        <ServiceCard name="Shiksha Sahayak" />
        <ServiceCard name="Gram Doctor" />
        <ServiceCard name="Kishan Mitra" />
        <ServiceCard name="Gaon Connect" />
        <ServiceCard name="Gaon Bazar" />
        <ServiceCard name="Seva Bazar" />
        <ServiceCard name="Weather Report" />
      </section>
    </div>
  );
}

function ServiceCard({ name }) {
  return (
    <div className="service-card">
      <div className="icon"></div>
      <h3>{name}</h3>
    </div>
  );
}

export default App;
