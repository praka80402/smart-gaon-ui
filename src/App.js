import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
// import ServiceSection from "./pages/dashboard/ServiceSection";
import WeatherReportPage from "./pages/weather-report/WeatherReportPage";
import Login from "./pages/login/login";
import Signup from "./pages/login/Signup";
import ShikshaSahayak from "./pages/Shiksha Sahayak/ShikshaSahayak";
import Header from "./pages/dashboard/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./pages/dashboard/Footer";
// import Weatherdashboard from "./pages/dashboard/Weatherdashboard";
import ChatBot from "./pages/dashboard/Chatbot";

function App() {
 return (
    <Router>
      <div className="App">
        {/* Routes */}
        <Routes>
        
          <Route
            path="/"
            element={
              <>
                <Header />
                <Dashboard />
              </>
            }
          />

      
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shiksha-sahayak" element={<ShikshaSahayak />} />
          <Route path="/weather-report" element={<WeatherReportPage />} />
        </Routes>

        <ChatBot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


