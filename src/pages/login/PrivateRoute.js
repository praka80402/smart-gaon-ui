import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); 
   const location = useLocation();

//   return isAuthenticated ? children : <Navigate to="/login" replace />;
  // if (!token) {
  //   return <Navigate to="/login"  state={{ from: location }} replace />;
  // }
    if (!token) {
    const redirectPath =
      location.pathname + location.search + location.hash;
    localStorage.setItem("redirectAfterLogin", redirectPath);
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
