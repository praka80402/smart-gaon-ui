import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../logo.svg";

import Footer from "./footer"; // 

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    
  };

  return (
    <>
      <div className="login-container">
             
        {/* ✅ Back Button in top-right */}
        <button className="back-btn" onClick={() => navigate("/")}>
          ⬅ Back
        </button>

        {/* Logo */}
       
         <img src={logo} alt="Smart Gaon Logo" className="logo" />
        {/* Title */}
        <h2 className="title">Smart Gaon</h2>
        <p className="subtitle">Digital Village Management Portal</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="text"
              name="username"
              placeholder="Username or Email"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="icon eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "" : "👁"}
            </span>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/" className="forgot-link">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login to Portal →
          </button>
        </form>

          <p className="switch-auth">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      {/* </div> */}

      {/* ✅ Footer below */}
      <Footer />
    </>
  );
};

export default Login;
