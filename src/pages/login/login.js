 
// -----------------------------

// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Modal, Tab, Nav } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSignInAlt,
//   faEnvelope,
//   faLock,
//   faUserPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./login.css"; // ✅ External CSS file

// const BASE_URL = "http://localhost:8080/api/auth";

// const LoginPage = ({ showModal, setShowModal, setLoggedIn }) => {
//   const [activeTab, setActiveTab] = useState("login");
//   const [messages, setMessages] = useState({
//     loginError: "",
//     signupError: "",
//     signupSuccess: "",
//   });

//   const navigate = useNavigate();
//     useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/");
//     }
//   }, [navigate]);

//   // ✅ Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const email = e.target.loginEmail.value.trim();
//     const password = e.target.loginPassword.value.trim();

//     try {
//       const res = await axios.post(`${BASE_URL}/login`, { email, password });
//       localStorage.setItem("token", res.data);
//       localStorage.setItem("email", email);
//       setLoggedIn(true);
//       setMessages({ ...messages, loginError: "" });
//       setShowModal(false);

//         const redirectPath =
//         localStorage.getItem("redirectAfterLogin") || "/dashboard";
//       localStorage.removeItem("redirectAfterLogin")
//       // setTimeout(() => navigate("/dashboard"), 400);
//       setTimeout(() => navigate(redirectPath), 400)
//     } catch (err) {
//       setMessages({
//         ...messages,
//         loginError:
//           err.response?.data || "Invalid email or password. Please try again.",
//       });
//     }
//   };

//   // ✅ Handle Signup
//   const handleSignup = async (e) => {
//     e.preventDefault();
//      const firstName = e.target.firstName.value.trim();
//     const lastName = e.target.lastName.value.trim();
//     const email = e.target.signupEmail.value.trim();
//     const phone = e.target.phone.value.trim();
//     const password = e.target.signupPassword.value.trim();
//     const confirmPassword = e.target.signupConfirmPassword.value.trim();

//     if (password !== confirmPassword) {
//       setMessages({ ...messages, signupError: "Passwords do not match." });
//       return;
//     }

//     if (phone.length !== 10) {
//       setMessages({
//         ...messages,
//         signupError: "Please enter a valid 10-digit phone number.",
//       });
//       return;
//     }

//     try {
//       const res = await axios.post(`${BASE_URL}/signup`, {
//         firstName,
//         lastName,
//         email,
//         phone,
//         password,
//       });
//       setMessages({
//         ...messages,
//         signupSuccess: res.data || "User registered successfully!",
//         signupError: "",
//       });
//       e.target.reset();
//     } catch (err) {
//       setMessages({
//         ...messages,
//         signupError:
//           err.response?.data || "Signup failed. Please try again later.",
//         signupSuccess: "",
//       });
//     }
//   };

//   return (
//     <Modal
//       show={showModal}
//       onHide={() => setShowModal(false)}
//       centered
//       backdrop="static"
//       keyboard={false}
//       className="custom-login-modal"
//     >
//       {/* <Modal.Header closeButton className="modal-header-custom">
//         <Modal.Title>
//           <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//           SmartGaon AI
//         </Modal.Title>
//       </Modal.Header> */}
//     <Modal.Header closeButton className="modal-header-custom d-flex align-items-center">
//   <div className="d-flex align-items-center">
//     <img
//       src={require("../../logo.svg").default} 
//       alt="SmartGaon AI Logo"
//       className="modal-logo"
//     />
//     <Modal.Title className="ms-2 fw-semibold">
//       SmartGaon AI
//     </Modal.Title>
//   </div>
// </Modal.Header>

//       <Modal.Body>
//         <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
//           <Nav variant="tabs" className="mb-3 justify-content-center">
//             <Nav.Item>
//               <Nav.Link eventKey="login">Login</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="signup">Sign Up</Nav.Link>
//             </Nav.Item>
//           </Nav>

//           <Tab.Content>
//             {/* LOGIN TAB */}
//             <Tab.Pane eventKey="login">
//               <form onSubmit={handleLogin}>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="loginEmail"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FontAwesomeIcon icon={faLock} className="me-2" />
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="loginPassword"
//                     className="form-control"
//                     placeholder="Enter password"
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-success w-100">
//                   <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
//                   Login
//                 </button>
//                 {messages.loginError && (
//                   <div className="error-msg mt-2 text-danger">
//                     {messages.loginError}
//                   </div>
//                 )}
//               </form>
//             </Tab.Pane>

//             {/* SIGNUP TAB */}
//             {/* <Tab.Pane eventKey="signup">
//               <form onSubmit={handleSignup}>
//                 <input
//                   name="firstName"
//                   className="form-control mb-2"
//                   placeholder="First Name"
//                   required
//                 />
//                 <input
//                   name="lastName"
//                   className="form-control mb-2"
//                   placeholder="Last Name"
//                   required
//                 />
//                 <input
//                   name="phone"
//                   className="form-control mb-2"
//                   type="text"
//                   placeholder="Phone Number"
//                   maxLength="10"
//                   onInput={(e) =>
//                     (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
//                   }
//                   required
//                 />
//                 <input
//                   name="signupEmail"
//                   className="form-control mb-2"
//                   placeholder="Email"
//                   type="email"
//                   required
//                 />
//                 <input
//                   name="signupPassword"
//                   className="form-control mb-2"
//                   placeholder="Password"
//                   type="password"
//                   required
//                 />
//                 <input
//                   name="signupConfirmPassword"
//                   className="form-control mb-3"
//                   placeholder="Confirm Password"
//                   type="password"
//                   required
//                 />
//                 <button type="submit" className="btn btn-primary w-100">
//                   <FontAwesomeIcon icon={faUserPlus} className="me-2" />
//                   Sign Up 
//                 </button>
//                 {messages.signupError && (
//                   <div className="text-danger mt-2">{messages.signupError}</div>
//                 )}
//                 {messages.signupSuccess && (
//                   <div className="text-success mt-2">
//                     {messages.signupSuccess}
//                   </div>
//                 )}
//               </form>
//             </Tab.Pane> */}

//             {/* SIGNUP TAB */}
// <Tab.Pane eventKey="signup">
//   <form onSubmit={handleSignup}>
//     <input
//       name="firstName"
//       className="form-control mb-2"
//       placeholder="First Name"
//       required
//     />
//     <input
//       name="lastName"
//       className="form-control mb-2"
//       placeholder="Last Name"
//       required
//     />
//     <input
//       name="phone"
//       className="form-control mb-2"
//       type="text"
//       placeholder="Phone Number"
//       maxLength="10"
//       pattern="[0-9]{10}"
//       onInput={(e) => {
//         e.target.value = e.target.value.replace(/[^0-9]/g, "");
//       }}
//       required
//     />
//     <input
//       name="signupEmail"
//       className="form-control mb-2"
//       placeholder="Email"
//       required
//     />
//     <input
//       name="signupPassword"
//       className="form-control mb-2"
//       placeholder="Password"
//       required
//     />
//     <input
//       name="signupConfirmPassword"
//       className="form-control mb-3"
//       placeholder="Confirm Password"
//       required
//     />

//     <button type="submit" className="btn btn-success w-100 mb-3">
//       <FontAwesomeIcon icon={faUserPlus} className="me-2" />
//       Sign Up 
//     </button>

//     {/* ✅ Google Sign-Up Button */}
//     <button
//       type="button"
//       className="google-btn w-100"
//       onClick={() => alert('Google Sign-Up Coming Soon!')}
//     >
//       <img
//         src="https://www.svgrepo.com/show/475656/google-color.svg"
//         alt="Google"
//         className="google-icon"
//       />
//       Sign up with Google
//     </button>

//     {messages.signupError && (
//       <div className="text-danger mt-2">{messages.signupError}</div>
//     )}
//     {messages.signupSuccess && (
//       <div className="text-success mt-2">{messages.signupSuccess}</div>
//     )}
//   </form>
// </Tab.Pane>

//           </Tab.Content>
//         </Tab.Container>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default LoginPage;

