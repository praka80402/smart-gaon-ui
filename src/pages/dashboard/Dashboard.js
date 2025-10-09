import React from "react";
import Slideimage from "./Slideimage";
import Weatherdashboard from "./Weatherdashboard";
import ServiceSection from "./ServiceSection";
import ImpactSection from "./ImpactSection";
// import "./Dashboard.css";
import "../../App.css";
import ConnectingVillage from "./ConnectingVillage";
function Dashboard() {
  return (
     
    <div className="dashboard">
      {/* Slideshow */}
      <Slideimage />

      {/* Our Impact */}
      <ImpactSection />

      {/* Services + Weather */}
      <section className="dashboard-section impact-layout">
        <div className="impact-left">
          <ServiceSection />
        </div>
        <div className="impact-right">
          <Weatherdashboard/>
        </div>
      </section>

      {/* Reach */}
      {/* <section className="reach-section">
        <h2>Our Reach Across States</h2>
      </section> */}
       <ConnectingVillage />   {/* ✅ imported component */}
    
    </div>
  );
}

export default Dashboard;

