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
import SchoolLearning from "./pages/Shiksha Sahayak/SchoolLearning";
import SchoolSubject from "./pages/Shiksha Sahayak/SchoolSubject";
import PrivateRoute from "./pages/login/PrivateRoute";
import ExamPreparation from "./pages/Shiksha Sahayak/exam-prep/ExamPreparation";
function App() {
 return (
    // <Router>
    //   <div className="App">
    //     {/* Routes */}
    //     <Routes>
        
    //       <Route
    //         path="/"
    //         element={
    //           <>
    //             <Header />
    //             <Dashboard />
    //           </>
    //         }
    //       />

      
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/shiksha-sahayak" element={<ShikshaSahayak />} />
    //       <Route path="/weather-report" element={<WeatherReportPage />} />
    //        <Route path="/shiksha-sahayak/school-learning" element={<SchoolLearning />} />
    //        <Route path="/shiksha-sahayak/school-learning/class/:classId" element={<SchoolSubject />} />
    //     </Routes>

    //     <ChatBot />
    //     <Footer />
    //   </div>
    // </Router>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Public routes */}
           <Route
            path="/"
            element={
              // <>
                
                <Dashboard />
              // </>
            }
        />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes */}
          {/* <Route
            path="/"
            element={
              <PrivateRoute>
                <>
                  <Header />
                  <Dashboard />
                </>
              </PrivateRoute>
            }
          /> */}

          <Route
            path="/shiksha-sahayak"
            element={
              <PrivateRoute>
                <ShikshaSahayak />
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
            path="/shiksha-sahayak/school-learning"
            element={
              <PrivateRoute>
                <SchoolLearning />
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
        </Routes>

        {/* Always visible */}
        <ChatBot />
        <Footer />
      </div>
      </Router>
  );
}

export default App;


