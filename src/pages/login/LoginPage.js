
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
// import "./login.css";

// import { GoogleLogin } from "@react-oauth/google";

// const BASE_URL = "http://localhost:8080/api/auth";

// const LoginPage = ({ showModal, setShowModal, setLoggedIn }) => {
//   const [activeTab, setActiveTab] = useState("login");
//   const [messages, setMessages] = useState({
//     loginError: "",
//     signupError: "",
//     signupSuccess: "",
//   });

//   const navigate = useNavigate();

//   // ✅ Auto-redirect if user already logged in
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const redirectAfterLogin =
//         localStorage.getItem("redirectAfterLogin") || "/user-dashboard";
//       localStorage.removeItem("redirectAfterLogin");
//       navigate(redirectAfterLogin, { replace: true });
//     }
//   }, []);
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       navigate("/");
// //     }
// //   }, [navigate]);

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
//     //   setMessages({ ...messages, loginError: "" });
     

//       // ✅ Redirect to stored route (if user clicked a service)
//       const redirectPath =
//         localStorage.getItem("redirectAfterLogin") || "/";
//       localStorage.removeItem("redirectAfterLogin");

//        setShowModal(false);

//       setTimeout(() => navigate(redirectPath), 500);
//     } catch (err) {
//         console.error("Login failed:", err);
//     //   setMessages({
//     //     ...messages,
//     //     loginError:
//     //       err.response?.data || "Invalid email or password. Please try again.",
//     //   });
//     }
//   };

//   // ✅ Handle Signup
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const firstName = e.target.firstName.value.trim();
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
//       {/* ✅ Header */}
//       <Modal.Header
//         closeButton
//         className="modal-header-custom d-flex align-items-center"
//       >
//         <div className="d-flex align-items-center">
//           <img
//             src={require("../../logo.svg").default}
//             alt="SmartGaon AI Logo"
//             className="modal-logo"
//           />
//           <Modal.Title className="ms-2 fw-semibold">SmartGaon AI</Modal.Title>
//         </div>
//       </Modal.Header>

//       {/* ✅ Body */}
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
//             {/* ✅ LOGIN TAB */}
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

//             {/* ✅ SIGNUP TAB */}
//             <Tab.Pane eventKey="signup">
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
//                   pattern="[0-9]{10}"
//                   onInput={(e) =>
//                     (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
//                   }
//                   required
//                 />
//                 <input
//                   name="signupEmail"
//                   className="form-control mb-2"
//                   placeholder="Email"
//                   required
//                 />
//                 <input
//                   name="signupPassword"
//                   className="form-control mb-2"
//                   placeholder="Password"
//                   required
//                 />
//                 <input
//                   name="signupConfirmPassword"
//                   className="form-control mb-3"
//                   placeholder="Confirm Password"
//                   required
//                 />

//                 <button type="submit" className="btn btn-success w-100 mb-3">
//                   <FontAwesomeIcon icon={faUserPlus} className="me-2" />
//                   Sign Up
//                 </button>

//                 {/* ✅ Google Sign-Up Button */}
//                 {/* <button
//                   type="button"
//                   className="google-btn w-100"
//                   onClick={() => alert("Google Sign-Up Coming Soon!")}
//                 >
//                   <img
//                     src="https://www.svgrepo.com/show/475656/google-color.svg"
//                     alt="Google"
//                     className="google-icon"
//                   />
//                   Sign up with Google
//                 </button> */}
//                <div className="google-login-btn w-100 d-flex justify-content-center">
//   <GoogleLogin
//     onSuccess={async (credentialResponse) => {
//       try {
//         const res = await axios.post("http://localhost:8080/api/auth/google", {
//           token: credentialResponse.credential,
//         });

//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("email", res.data.email);
//         localStorage.setItem("name", res.data.name);

//         alert("✅ Google Sign-In Successful!");
//         setShowModal(false);
//         navigate("/user-dashboard");
//       } catch (err) {
//         console.error("Google Sign-In failed:", err);
//         alert("❌ Google Sign-In failed, please try again.");
//       }
//     }}
//     onError={() => alert("Google Sign-In Failed")}
//   />
// </div>


//                 {messages.signupError && (
//                   <div className="text-danger mt-2">{messages.signupError}</div>
//                 )}
//                 {messages.signupSuccess && (
//                   <div className="text-success mt-2">
//                     {messages.signupSuccess}
//                   </div>
//                 )}
//               </form>
//             </Tab.Pane>
//           </Tab.Content>
//         </Tab.Container>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default LoginPage;


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
// import "./login.css";
// import { GoogleLogin } from "@react-oauth/google";

// const BASE_URL = "http://localhost:8080/api/auth";

// const LoginPage = ({ showModal, setShowModal, setLoggedIn }) => {
//   const [activeTab, setActiveTab] = useState("login");
//   const [messages, setMessages] = useState({
//     loginError: "",
//     signupError: "",
//     signupSuccess: "",
//   });

//   const navigate = useNavigate();

 
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const redirectAfterLogin =
//         localStorage.getItem("redirectAfterLogin") || "/user-dashboard";
//       localStorage.removeItem("redirectAfterLogin");
//       navigate(redirectAfterLogin, { replace: true });
//     }
//   }, []);

   

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
//       // setShowModal(false);

//       // Redirect after login
//       const redirectPath =
//         localStorage.getItem("redirectAfterLogin") || "/";
//       localStorage.removeItem("redirectAfterLogin");
//       setShowModal(false);

//       // setTimeout(() => {
//       //   window.location.href = redirectPath;
      
//       // }, 400);
//       setTimeout(() => navigate(redirectPath), 500);
//     } catch (err) {
//       console.error("Login failed:", err);
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
//     const firstName = e.target.firstName.value.trim();
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

//   // ✅ Handle Google Sign-In / Sign-Up
//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       const res = await axios.post(`${BASE_URL}/google`, {
//         token: credentialResponse.credential,
//       });

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("email", res.data.email);
//       localStorage.setItem("name", res.data.name);
//       setLoggedIn(true);
//       setShowModal(false);

//       // ✅ Redirect to clicked service or dashboard
//       const redirectPath =
//         localStorage.getItem("redirectAfterLogin") || "/user-dashboard";
//       localStorage.removeItem("redirectAfterLogin");

//       setTimeout(() => {
//         window.location.href = redirectPath;
//       }, 400);
//     } catch (err) {
//       console.error("Google Sign-In failed:", err);
//       alert("❌ Google Sign-In failed, please try again.");
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
//       {/* ✅ Header */}
//       <Modal.Header
//         closeButton
//         className="modal-header-custom d-flex align-items-center"
//       >
//         <div className="d-flex align-items-center">
//           <img
//             src={require("../../logo.svg").default}
//             alt="SmartGaon AI Logo"
//             className="modal-logo"
//           />
//           <Modal.Title className="ms-2 fw-semibold">SmartGaon AI</Modal.Title>
//         </div>
//       </Modal.Header>

//       {/* ✅ Body */}
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
//             {/* ✅ LOGIN TAB */}
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
//                 <button type="submit" className="btn btn-success w-100 mb-3">
//                   <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
//                   Login
//                 </button>

//                 {/* ✅ Google Login */}
//                 <div className="google-login-btn w-100 d-flex justify-content-center">
//                   <GoogleLogin
//                     onSuccess={handleGoogleSuccess}
//                     onError={() => alert("Google Sign-In Failed")}
//                   />
//                 </div>

//                 {messages.loginError && (
//                   <div className="error-msg mt-2 text-danger text-center">
//                     {messages.loginError}
//                   </div>
//                 )}
//               </form>
//             </Tab.Pane>

//             {/* ✅ SIGNUP TAB */}
//             <Tab.Pane eventKey="signup">
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
//                   pattern="[0-9]{10}"
//                   onInput={(e) =>
//                     (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
//                   }
//                   required
//                 />
//                 <input
//                   name="signupEmail"
//                   className="form-control mb-2"
//                   placeholder="Email"
//                   required
//                 />
//                 <input
//                   name="signupPassword"
//                   className="form-control mb-2"
//                   type="password"
//                   placeholder="Password"
//                   required
//                 />
//                 <input
//                   name="signupConfirmPassword"
//                   className="form-control mb-3"
//                   type="password"
//                   placeholder="Confirm Password"
//                   required
//                 />

//                 <button type="submit" className="btn btn-success w-100 mb-3">
//                   <FontAwesomeIcon icon={faUserPlus} className="me-2" />
//                   Sign Up
//                 </button>

//                 {/* ✅ Google Sign-Up */}
//                 <div className="google-login-btn w-100 d-flex justify-content-center">
//                   <GoogleLogin
//                     onSuccess={handleGoogleSuccess}
//                     onError={() => alert("Google Sign-Up Failed")}
//                   />
//                 </div>

//                 {messages.signupError && (
//                   <div className="text-danger mt-2">{messages.signupError}</div>
//                 )}
//                 {messages.signupSuccess && (
//                   <div className="text-success mt-2">
//                     {messages.signupSuccess}
//                   </div>
//                 )}
//               </form>
//             </Tab.Pane>
//           </Tab.Content>
//         </Tab.Container>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default LoginPage;

// --------------------

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Tab, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faEnvelope,
  faLock,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { GoogleLogin } from "@react-oauth/google";

const BASE_URL = "http://localhost:8080/api/auth";

const LoginPage = ({ showModal, setShowModal, setLoggedIn }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMessage, setForgotMessage] = useState("");

  // Validation states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmMatch, setIsConfirmMatch] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [showPasswordRules, setShowPasswordRules] = useState(false);

  const [messages, setMessages] = useState({
    loginError: "",
    signupError: "",
    signupSuccess: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const redirectAfterLogin =
        localStorage.getItem("redirectAfterLogin") || "/user-dashboard";
      localStorage.removeItem("redirectAfterLogin");
      navigate(redirectAfterLogin, { replace: true });
    }
  }, []);

  // Regex patterns
  const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\[\]:;"'<>,.?/]).{8,15}$/;
  const phoneRegex = /^[0-9]{10}$/;

  // ✅ Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(loginEmail)) {
      setIsEmailValid(false);
      setMessages({ ...messages, loginError: "Invalid email format." });
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/login`, {
        email: loginEmail,
        password: loginPassword,
      });

      localStorage.setItem("token", res.data);
      localStorage.setItem("email", loginEmail);
      setLoggedIn(true);
      setShowModal(false);

      const redirectPath =
        localStorage.getItem("redirectAfterLogin") || "/";
      localStorage.removeItem("redirectAfterLogin");

      navigate(redirectPath, { replace: true });
    } catch {
      setMessages({ ...messages, loginError: "Invalid email or password." });
    }
  };

  // ✅ Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(signupEmail)) {
      setIsEmailValid(false);
      setMessages({ ...messages, signupError: "Invalid email format." });
      return;
    }

    if (!passwordRegex.test(signupPassword)) {
      setIsPasswordValid(false);
      setMessages({
        ...messages,
        signupError:
          "Password must be 8–15 chars, include 1 capital, 1 number & 1 special symbol.",
      });
      return;
    }

    if (!phoneRegex.test(phone)) {
      setIsPhoneValid(false);
      setMessages({
        ...messages,
        signupError: "Invalid phone number (must be 10 digits).",
      });
      return;
    }

    if (signupPassword !== confirmPassword) {
      setIsConfirmMatch(false);
      setMessages({
        ...messages,
        signupError: "Passwords do not match.",
      });
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/signup`, {
        firstName: e.target.firstName.value.trim(),
        lastName: e.target.lastName.value.trim(),
        email: signupEmail,
        phone,
        password: signupPassword,
      });
      setMessages({
        ...messages,
        signupSuccess: res.data || "Signup successful!",
        signupError: "",
      });
      e.target.reset();
    } catch {
      setMessages({
        ...messages,
        signupError: "Signup failed. Try again later.",
        signupSuccess: "",
      });
    }
  };

  // ✅ Forgot password
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BASE_URL}/forgot-password?email=${forgotEmail}`
      );
      setForgotMessage(res.data || "If your email exists, a reset link was sent.");
    } catch {
      setForgotMessage("Email not found or server error.");
    }
  };

  // ✅ Google Login / Signup
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(`${BASE_URL}/google`, {
        token: credentialResponse.credential,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("name", res.data.name);

      setLoggedIn(true);
      setShowModal(false);

      const redirectPath =
        localStorage.getItem("redirectAfterLogin") || "/user-dashboard";
      localStorage.removeItem("redirectAfterLogin");

      navigate(redirectPath, { replace: true });
    } catch (err) {
      console.error("Google Sign-In failed:", err);
      alert("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
        setIsForgotMode(false);
      }}
      centered
      backdrop="static"
      keyboard={false}
      className="custom-login-modal"
    >
      <Modal.Header
        closeButton
        className="modal-header-custom bg-success text-white"
      >
        <div className="d-flex align-items-center">
          <img
            src={require("../../logo.svg").default}
            alt="SmartGaon AI Logo"
            className="modal-logo"
          />
          <Modal.Title className="ms-2 fw-semibold">SmartGaon AI</Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body>
        {isForgotMode ? (
          <div className="forgot-password-view text-center">
            <h5>Forgot Password</h5>
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your registered email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-success w-100">
                Send Reset Link
              </button>
              {forgotMessage && (
                <p className="mt-3 text-success">{forgotMessage}</p>
              )}
            </form>
            <button
              className="btn btn-link mt-3 text-success"
              onClick={() => setIsForgotMode(false)}
            >
              ← Back to Login
            </button>
          </div>
        ) : (
          <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
            <Nav variant="tabs" className="mb-3 justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="signup">Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              {/* ✅ LOGIN */}
              <Tab.Pane eventKey="login">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="form-control"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="form-control"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-success w-100 mb-2">
                    <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                    Login
                  </button>

                  {/* Forgot Password */}
                  <div className="text-center mt-2">
                    <button
                      type="button"
                      className="btn btn-link text-success text-decoration-none"
                      onClick={() => setIsForgotMode(true)}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Google Login */}
                  <div className="google-login-btn w-100 d-flex justify-content-center mt-3">
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={() => alert("Google Sign-In Failed")}
                    />
                  </div>

                  {messages.loginError && (
                    <div className="text-danger mt-2 text-center">
                      {messages.loginError}
                    </div>
                  )}
                </form>
              </Tab.Pane>

              {/* ✅ SIGNUP */}
              <Tab.Pane eventKey="signup">
                <form onSubmit={handleSignup}>
                  <input
                    name="firstName"
                    className="form-control mb-2"
                    placeholder="First Name"
                    required
                  />
                  <input
                    name="lastName"
                    className="form-control mb-2"
                    placeholder="Last Name"
                    required
                  />
                  <input
                    name="phone"
                    type="text"
                    maxLength="10"
                    placeholder="Phone Number"
                    className={`form-control mb-2 ${
                      phone.length > 0
                        ? phoneRegex.test(phone)
                          ? "is-valid"
                          : "is-invalid"
                        : ""
                    }`}
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    required
                  />
                  <input
                    name="signupEmail"
                    placeholder="Email"
                    className={`form-control mb-2 ${
                      signupEmail
                        ? isEmailValid
                          ? "is-valid"
                          : "is-invalid"
                        : ""
                    }`}
                    value={signupEmail}
                    onChange={(e) => {
                      const val = e.target.value.trim();
                      setSignupEmail(val);
                      setIsEmailValid(emailRegex.test(val));
                    }}
                    required
                  />
                  <input
                    name="signupPassword"
                    type="password"
                    placeholder="Password"
                    className={`form-control mb-2 ${
                      signupPassword
                        ? passwordRegex.test(signupPassword)
                          ? "is-valid"
                          : "is-invalid"
                        : ""
                    }`}
                    value={signupPassword}
                    onFocus={() => setShowPasswordRules(true)}
                    onBlur={() => setShowPasswordRules(false)}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSignupPassword(val);
                      setIsPasswordValid(passwordRegex.test(val));
                      setIsConfirmMatch(val === confirmPassword);
                    }}
                    required
                  />

                  {showPasswordRules && (
                    <div className="alert alert-info py-2 mb-2 small text-start">
                      <ul className="mb-0">
                        <li>8–15 characters long</li>
                        <li>At least 1 uppercase letter (A–Z)</li>
                        <li>At least 1 number (0–9)</li>
                        <li>At least 1 special symbol (!@#$%^&*)</li>
                      </ul>
                    </div>
                  )}

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={`form-control mb-3 ${
                      confirmPassword
                        ? isConfirmMatch
                          ? "is-valid"
                          : "is-invalid"
                        : ""
                    }`}
                    value={confirmPassword}
                    onChange={(e) => {
                      const val = e.target.value;
                      setConfirmPassword(val);
                      setIsConfirmMatch(val === signupPassword);
                    }}
                    required
                  />

                  {confirmPassword && !isConfirmMatch && (
                    <div className="text-danger small mt-1">
                      ❌ Your passwords do not match.
                    </div>
                  )}
                  {confirmPassword && isConfirmMatch && (
                    <div className="text-success small mt-1">
                      ✅ Passwords match.
                    </div>
                  )}

                  <button type="submit" className="btn btn-success w-100 mb-3">
                    <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                    Sign Up
                  </button>

                  <div className="google-login-btn w-100 d-flex justify-content-center">
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={() => alert("Google Sign-Up Failed")}
                    />
                  </div>

                  {messages.signupError && (
                    <div className="text-danger mt-2">
                      {messages.signupError}
                    </div>
                  )}
                  {messages.signupSuccess && (
                    <div className="text-success mt-2">
                      {messages.signupSuccess}
                    </div>
                  )}
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LoginPage;
