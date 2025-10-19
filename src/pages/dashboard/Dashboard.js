import React from "react";
import Slideimage from "./Slideimage";
import Weatherdashboard from "./Weatherdashboard";
import ServiceSection from "./ServiceSection";
import ImpactSection from "./ImpactSection";
// import "./Dashboard.css";
import "../../App.css";
import ConnectingVillage from "./ConnectingVillage";
import SuccessStory from "./SuccessStory";



function Dashboard({ setShowLoginModal }) {
  return (
     <div className="dashboard">

     
      
      <Slideimage />
      <ImpactSection />
      <section className="dashboard-section impact-layout">
        <div className="impact-left">
        
          <ServiceSection setShowLoginModal={setShowLoginModal} />
        </div>
        <div className="impact-right">
          <Weatherdashboard />
        </div>
      </section>
      <ConnectingVillage />
       <SuccessStory />
    </div>
  );
}







export default Dashboard;

