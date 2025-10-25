import React from "react";
// import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FeedPage from "./FeedPage";
// import "./Styles/Feed.css";
import "./UserDashboard.css";
// import SuccessStory from "../dashboard/SuccessStory";

export default function UserDashboard() {
  return (
    <div className="feed-page">
      
      <div className="feed-container">
        <Sidebar />
        <FeedPage />
      </div>
      


    </div>
   

    
  );
}
