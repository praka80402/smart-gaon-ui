// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link , useLocation} from "react-router-dom";
// // import logo from "./logo.svg";
// import "./App.css";
// // import ServiceSection from "./pages/dashboard/ServiceSection";
// import WeatherReportPage from "./pages/weather-report/WeatherReportPage";
// // import Login from "./pages/login/login";
// // import Signup from "./pages/login/Signup";
// import LoginPage from "./pages/login/LoginPage";
// import ShikshaSahayak from "./pages/Shiksha Sahayak/ShikshaSahayak";
// import Header from "./pages/dashboard/Header";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Footer from "./pages/dashboard/Footer";
// // import Weatherdashboard from "./pages/dashboard/Weatherdashboard";
// import ChatBot from "./pages/dashboard/Chatbot";
// import SchoolLearning from "./pages/Shiksha Sahayak/SchoolLearning";
// import SchoolSubject from "./pages/Shiksha Sahayak/SchoolSubject";
// import PrivateRoute from "./pages/login/PrivateRoute";
// // <<<<<<< HEAD

// // =======
// import ExamPreparation from "./pages/Shiksha Sahayak/exam-prep/ExamPreparation";
// import Ncert from "./pages/Shiksha Sahayak/Ncert-course/Ncert";
// // >>>>>>> cd6b13e1c2a084c81241180ac4d73d89adf58b34
// function App() {
//   //  const token = localStorage.getItem("token");
//   // const location = useLocation();
//  return (
     
  
//     <Router>
//       <div className="App">
//       {/* {token ? <UserHeader /> : <Header />} */}
//         <Header />
//         <Routes>
//           {/* Public routes */}
//            <Route
//             path="/"
//             element={
//               // <>
                
//                 <Dashboard />
//               // </>
//             }
//         />
//           <Route path="/login" element={<LoginPage />} />
//           {/* <Route path="/signup" element={<Signup />} /> */}
// {/* 
//                 <Route
//         path="/ServiceSection"
//         element={
//           <PrivateRoute>
//            <ServiceSection />
//           </PrivateRoute>
//         }
//       /> */}


//           {/* Protected routes */}
//           {/* <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Header />
//                   <Dashboard />
//                 </>
//               </PrivateRoute>
//             }
//           /> */}

//           <Route
//             path="/shiksha-sahayak"
//             element={
//               <PrivateRoute>
//                 <ShikshaSahayak />
//               </PrivateRoute>
//             }
//           />
        
        

//           <Route
//             path="/weather-report"
//             element={
//               <PrivateRoute>
//                 <WeatherReportPage />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/shiksha-sahayak/school-learning"
//             element={
//               <PrivateRoute>
//                 <Ncert />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/shiksha-sahayak/practice"
//             element={
//               <PrivateRoute>
//                 <ExamPreparation />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/shiksha-sahayak/school-learning/class/:classId"
//             element={
//               <PrivateRoute>
//                 <SchoolSubject />
//               </PrivateRoute>
//             }
//           />
//         </Routes>

//         {/* Always visible */}
//         <ChatBot />
//         <Footer />
//       </div>
//       </Router>
//   );
// }

// export default App;

// ------------------------------------------------------------------------

// import React from "react";
// import { BrowserRouter as Router, Routes, Route,  Navigate } from "react-router-dom";
// import "./App.css";

// import WeatherReportPage from "./pages/weather-report/WeatherReportPage";
// import LoginPage from "./pages/login/LoginPage";
// import ShikshaSahayak from "./pages/Shiksha Sahayak/ShikshaSahayak";
// import Header from "./pages/dashboard/Header";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Footer from "./pages/dashboard/Footer";
// import ChatBot from "./pages/dashboard/Chatbot";
// import SchoolSubject from "./pages/Shiksha Sahayak/SchoolSubject";
// import PrivateRoute from "./pages/login/PrivateRoute";
// import ExamPreparation from "./pages/Shiksha Sahayak/exam-prep/ExamPreparation";
// import Ncert from "./pages/Shiksha Sahayak/Ncert-course/Ncert";

// function App() {
  
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           {/* <Route path="/login" element={<LoginPage />} /> */}

//            <Route
//             path="/login"
//             element={
//               localStorage.getItem("token") ? (
//                 <Navigate to="/Dashboard" replace />
//               ) : (
//                 <LoginPage />
//               )
//             }
//           />


//           <Route
//             path="/shiksha-sahayak"
//             element={
//               <PrivateRoute>
//                 <ShikshaSahayak />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/weather-report"
//             element={
//               <PrivateRoute>
//                 <WeatherReportPage />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/shiksha-sahayak/school-learning"
//             element={
//               <PrivateRoute>
//                 <Ncert />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/shiksha-sahayak/practice"
//             element={
//               <PrivateRoute>
//                 <ExamPreparation />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/shiksha-sahayak/school-learning/class/:classId"
//             element={
//               <PrivateRoute>
//                 <SchoolSubject />
//               </PrivateRoute>
//             }
//           />
//         </Routes>

//         <ChatBot />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";

// import WeatherReportPage from "./pages/weather-report/WeatherReportPage";
// import LoginPage from "./pages/login/LoginPage";
// import ShikshaSahayak from "./pages/Shiksha Sahayak/ShikshaSahayak";
// import Header from "./pages/dashboard/Header";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Footer from "./pages/dashboard/Footer";
// import ChatBot from "./pages/dashboard/Chatbot";
// import SchoolSubject from "./pages/Shiksha Sahayak/SchoolSubject";
// import PrivateRoute from "./pages/login/PrivateRoute";
// import ExamPreparation from "./pages/Shiksha Sahayak/exam-prep/ExamPreparation";
// import Ncert from "./pages/Shiksha Sahayak/Ncert-course/Ncert";

// function App() {
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

//   return (
//     <Router>
//       <div className="App">
//         {/* ✅ Pass modal control props to Header */}
//         <Header
//           setShowLoginModal={setShowLoginModal}
//           loggedIn={loggedIn}
//           setLoggedIn={setLoggedIn}
//         />

//         <Routes>
//           <Route path="/" element={<Dashboard />} />

//           <Route
//             path="/login"
//             element={
//               loggedIn ? (
//                 <Navigate to="/" replace />
//               ) : (
//                 <LoginPage
//                   showModal={showLoginModal}
//                   setShowModal={setShowLoginModal}
//                   setLoggedIn={setLoggedIn}
//                 />
//               )
//             }
//           />

//           <Route
//             path="/shiksha-sahayak"
//             element={
//               <PrivateRoute>
//                 <ShikshaSahayak />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/weather-report"
//             element={
//               <PrivateRoute>
//                 <WeatherReportPage />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/shiksha-sahayak/school-learning"
//             element={
//               <PrivateRoute>
//                 <Ncert />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/shiksha-sahayak/practice"
//             element={
//               <PrivateRoute>
//                 <ExamPreparation />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/shiksha-sahayak/school-learning/class/:classId"
//             element={
//               <PrivateRoute>
//                 <SchoolSubject />
//               </PrivateRoute>
//             }
//           />
//         </Routes>

//         <ChatBot />
//         <Footer />

//         {/* ✅ Always include Login Modal globally */}
//         <LoginPage
//           showModal={showLoginModal}
//           setShowModal={setShowLoginModal}
//           setLoggedIn={setLoggedIn}
//         />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
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


function App() {
  // 🔑 Global login modal & authentication state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

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


