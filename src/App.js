import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Pages & Components
import Header from "./pages/dashboard/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./pages/dashboard/Footer";
import ChatBot from "./pages/dashboard/Chatbot";
import LoginPage from "./pages/login/LoginPage";
import PrivateRoute from "./pages/login/PrivateRoute";
import ShikshaSahayak from "./pages/Shiksha Sahayak/ShikshaSahayak";
import WeatherReportPage from "./pages/weather-report/WeatherReportPage";
import Ncert from "./pages/Shiksha Sahayak/Ncert-course/Ncert";
import ExamPreparation from "./pages/Shiksha Sahayak/exam-prep/ExamPreparation";
import SchoolSubject from "./pages/Shiksha Sahayak/SchoolSubject";


import UserDashboard from "./pages/userProfile/UserDashboard";
import MyProfile from "./pages/userProfile/MyProfile/MyProfile";
// import ProfilePage from "./pages/userProfile/ProfilePage";
import UserHeader from "./pages/userProfile/components/Header";
import GramDoctor from "./pages/GramDoctor/GramDoctor";
import KishanMitra from "./pages/KishanMitra/KishanMitra";
import SarkariSeva from "./pages/sarkari-seva/SarkariSeva";
import GaonConnect from "./pages/GaonConnect/GaonConnect";
// import SevaBazaarDashboard from "./pages/SevaBazaar/SevaBazaarDashboard";
import SevaBazaarHome from "./pages/SevaBazaar/SevaBazaarHome";
import GaonBazaarDashboard from "./pages/GaonBazaar/GaonBazaarDashboard";
import GaonBazaarHome from "./pages/GaonBazaar/GaonBazaarHome";
import Donation from "./pages/Donation/Donation";
import ResetPassword from "./pages/login/ResetPassword";


function App() {
  // 🔑 Global login modal & authentication state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  
    useEffect(() => {
    const handleStorageChange = () => {
      setLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* ✅ Header (with login modal control) */}
        {/* <Header
          setShowLoginModal={setShowLoginModal}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        /> */}
         {loggedIn ? (
          <UserHeader setLoggedIn={setLoggedIn} />
        ) : (
          <Header
            setShowLoginModal={setShowLoginModal}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        )}



        <Routes>
          {/* 🏠 Dashboard — public landing page */}
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/" element={<Dashboard setShowLoginModal={setShowLoginModal} />} />

          {/* ⚙️ Private Routes — require login */}
          <Route
            path="/shiksha-sahayak"
            element={
              <PrivateRoute>
                <ShikshaSahayak />
              </PrivateRoute>
            }
          />

          <Route
  path="/gaon-connect"
  element={
    <PrivateRoute>
      <GaonConnect />
    </PrivateRoute>
  }
/>

          <Route
            path="/weather-report"
            element={
              <PrivateRoute>
                <WeatherReportPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/sarkari-seva"
            element={
              <PrivateRoute>
                <SarkariSeva />
              </PrivateRoute>
            }
          />  
              <Route
                path="/donation"
                     element={
                  <PrivateRoute>
                  <Donation />
               </PrivateRoute>
                  }
                 /> 

          <Route
  path="/gram-doctor"
  element={
    <PrivateRoute>
      <GramDoctor />
    </PrivateRoute>
  }
/>
       <Route
  path="/kishanMitra"
  element={
    <PrivateRoute>
      <KishanMitra />
    </PrivateRoute>
  }
/>    
            <Route
  path="/sewa-bazaar"
  element={
    <PrivateRoute>
    <SevaBazaarHome/>
    </PrivateRoute>
  }
/>
        {/* 🛒 Gaon Bazaar */}
          <Route
            path="/gaon-bazaar"
            element={
              <PrivateRoute>
                <GaonBazaarHome />
              </PrivateRoute>
            }
          />

  {/* existing routes */}
  <Route path="/reset-password" element={<ResetPassword />} />

          <Route
            path="/shiksha-sahayak/school-learning"
            element={
              <PrivateRoute>
                <Ncert />
              </PrivateRoute>
            }
          />

          <Route
            path="/shiksha-sahayak/practice"
            element={
              <PrivateRoute>
                <ExamPreparation />
              </PrivateRoute>
            }
          />

          <Route
            path="/shiksha-sahayak/school-learning/class/:classId"
            element={
              <PrivateRoute>
                <SchoolSubject />
              </PrivateRoute>
            }
          />

           {/* 👤 User Dashboard (Feed + Sidebar + Header inside it) */}
          <Route
            path="/user-dashboard"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />

          {/* 👤 User Profile Page */}
          {/* <Route
            path="/MyProfile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          /> */}
           <Route
            path="/profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />


          {/* 🚫 Optional: Redirect /login route to home if already logged in */}
          <Route
            path="/login"
            element={
              loggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>

       
        <ChatBot />
        <Footer setShowLoginModal={setShowLoginModal} />
        {/* <Footer /> */}

        {/* 🟢 Global Login Modal (accessible from anywhere) */}
        <LoginPage
          showModal={showLoginModal}
          setShowModal={setShowLoginModal}
          setLoggedIn={setLoggedIn}
        />
      </div>
    </Router>
  );
}

export default App;


