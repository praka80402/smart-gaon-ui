import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ServiceSection from "./pages/dashboard/ServiceSection";
import WeatherReportPage from "./pages/weather-report/WeatherReportPage";
import Login from "./pages/login/login";
import Signup from "./pages/login/Signup";
import ShikshaSahayak from "./pages/Shiksha Sahayak/ShikshaSahayak";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage with header */}
        <Route
          path="/"
          element={
            <div className="App">
              <header>
                <img src={logo} alt="Smart Gaon Logo" className="logo" />
                <h1>Smart Gaon</h1>
                <p>
                  Empowering rural India through digital transformation.
                  Connecting villages with modern services, governance, and
                  opportunities.
                </p>
                <div className="buttons">
                  <Link to="/login">
                    <button className="btn">Login</button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn btn-outline">Sign Up</button>
                  </Link>
                </div>
              </header>

              <ServiceSection />
            </div>
          }
        />

        {/* Login Page (no header, opens separately) */}
        <Route path="/login" element={<Login />} />

        {/* Weather report page */}
        <Route path="/weather-report" element={<WeatherReportPage />} />

        {/*  Signup Page */}
        <Route path="/signup" element={<Signup />} />
         <Route path="/shiksha-sahayak" element={<ShikshaSahayak />} />

        

      </Routes>
    </Router>
  );
}

export default App;