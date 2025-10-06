import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ServiceSection from "./pages/dashboard/ServiceSection";
// Import the WeatherReportPage directly (assuming it's the default export)
import WeatherReportPage from './pages/weather-report/WeatherReportPage';
import SarkariSeva from "./pages/sarkari-seva/SarkariSeva";

function App() {

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header>
          <img src={logo} alt="Smart Gaon Logo" className="logo" />
          <h1>Smart Gaon</h1>
          <p>
            Empowering rural India through digital transformation. Connecting
            villages with modern services, governance, and opportunities.
          </p>
          <div className="buttons">
            <button className="btn">Login</button>
            <button className="btn btn-outline">Sign Up</button>
          </div>
        </header>

        {/* Define Routes using React Router v6 syntax */}
        <Routes>
          <Route path="/" element={<ServiceSection />} 
          
          
          
          />
          
          {/* Route for weather report */}
          <Route path="/weather-report" element={<WeatherReportPage />} />
           <Route path="/sarkari-seva" element={<SarkariSeva />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
