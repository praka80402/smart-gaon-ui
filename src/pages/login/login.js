

import React from "react";
import "./login.css";
import avatar from "../../assets/avatar.png"; // use your avatar image
import logo from "../../logo.svg";
import { useNavigate } from "react-router-dom";
function Login() {
const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <div className="login-box">
         <span className="close-btn" onClick={() => navigate("/")}>
          &times;
        </span>

        {/* Left side with avatar */}
        <div className="login-left">
          <img src={avatar} alt="User Avatar" className="login-avatar" />
        </div>

        {/* Right side with form */}
        <div className="login-right">
             <img src={logo} alt="Smart Gaon Logo" className="logo" />
          <h2>User Login</h2>
          <form className="login-form">
            <div className="input-group">
              {/* <span className="icon">📧</span> */}
              <input type="email" placeholder="Email Id" required />
            </div>
            <div className="input-group">
              {/* <span className="icon">🔒</span> */}
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="login-extra">
            <a href="#">Forgot Username / Password?</a>
            <p>
              Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


