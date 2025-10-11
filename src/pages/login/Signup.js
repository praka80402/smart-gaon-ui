// import React, { useState } from "react";
// import "./Signup.css";
// import { useNavigate } from "react-router-dom";
// // import Footer from "./footer"; 
// import logo from "../../logo.svg";
// const Signup = () => {
//       const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("❌ Passwords do not match!");
//       return;
//     }

//     console.log("Signup Data:", formData);
//     alert("✅ Signup form submitted!");
//   };

//   return (
//     <>
     
//          <span className="close-btn" onClick={() => navigate("/")}>
//           &times;
//         </span>
//       <div className="auth-container">
//         <div className="auth-box">
//  <img src={logo} alt="Smart Gaon Logo" className="logo" />
//           <h1>Smart Gaon</h1>
//           <p className="subtitle">Create your account</p>

//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               pattern="[0-9]{10}"
//               title="Enter a valid 10-digit phone number"
//               required
//             />

//             <div className="password-field">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <span
//                 className="toggle-password"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "🙈" : "👁"}
//               </span>
//             </div>

//             <div className="password-field">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button type="submit" className="btn-primary">
//               Sign Up →
//             </button>
//           </form>

//           <p className="switch-auth">
//             Already have an account? <a href="/login">Login</a>
//           </p>
//         </div>
//       </div>

//       {/* ✅ Footer below */}
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert("✅ Signup successful! Please login.");
        navigate("/login"); // redirect to login after signup
      } else {
        const error = await response.text();
        alert("❌ Signup failed: " + error);
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <span className="close-btn" onClick={() => navigate("/")}>
        &times;
      </span>
      <div className="auth-container">
        <div className="auth-box">
          <img src={logo} alt="Smart Gaon Logo" className="logo" />
          <h1>Smart Gaon</h1>
          <p className="subtitle">Create your account</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              required
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              Sign Up →
            </button>
          </form>

          <p className="switch-auth">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
