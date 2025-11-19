


// //java
// import React, { useState } from "react";
// import "./Chatbot.css";
// import chatIcon from "../../assets/chatbot.jpeg";

// function ChatBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: "👋 Hello! I’m your SmartGaon Assistant. How can I help you?", sender: "bot" }
//   ]);
//   const [input, setInput] = useState("");
//   const [listening, setListening] = useState(false);

//   const toggleChat = () => setIsOpen(!isOpen);

//   // ✅ Text to Speech (Bot Voice Reply)
//   const speak = (text) => {
//     const speech = new SpeechSynthesisUtterance(text);
//     speech.lang = "en-IN"; // change to "hi-IN" for Hindi voice
//     window.speechSynthesis.speak(speech);
//   };

//   // ✅ Send Message to Backend
//   const handleSend = async () => {
//     if (input.trim() === "") return;

//     const newMessages = [...messages, { text: input, sender: "user" }];
//     setMessages(newMessages);

//     const userMessage = input;
//     setInput("");

//     try {
//       // 🔗 Call Spring Boot backend
//       const response = await fetch("http://localhost:8080/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage })
//       });

//       const data = await response.json();
//       setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);

//       speak(data.reply); // 🔊 Bot speaks answer
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { text: "⚠️ Server not responding. Please try later.", sender: "bot" }
//       ]);
//     }
//   };

//   // ✅ Voice to Text (Speech Recognition)
//   const startVoiceInput = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert("🎙️ Voice Recognition not supported in your browser. Use Chrome.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-IN"; // change to "hi-IN" for Hindi
//     recognition.start();
//     setListening(true);

//     recognition.onresult = (event) => {
//       const voiceText = event.results[0][0].transcript;
//       setInput(voiceText);
//       setListening(false);
//     };

//     recognition.onerror = () => setListening(false);
//   };

//   return (
//     <div className="chatbot">
//       {/* Floating Button */}
//       <button className="chat-toggle" onClick={toggleChat}>
//         <img src={chatIcon} alt="Chat" className="chat-icon" />
//       </button>

//       {isOpen && (
//         <div className="chat-window">
//           <div className="chat-header">
//             <span>SmartGaon AI Assistant</span>
//             <button onClick={toggleChat}>×</button>
//           </div>

//           <div className="chat-body">
//             {messages.map((msg, i) => (
//               <div key={i} className={`chat-msg ${msg.sender}`}>
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <div className="chat-footer">
//             <input
//               type="text"
//               value={input}
//               placeholder="Type or Speak..."
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />

//             {/* 🎤 Voice Button */}
//             <button className="mic-btn" onClick={startVoiceInput}>
//               {listening ? "🎙️..." : "🎤"}
//             </button>

//             {/* Send Button */}
//             <button onClick={handleSend}>Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ChatBot;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ Add this
import "./Chatbot.css";
import chatIcon from "../../assets/chatbot.jpeg";
import config from "../../config";

function ChatBot() {
  const navigate = useNavigate(); // ✅ Now we can navigate inside app

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hello! I’m your SmartGaon Assistant. How can I help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  // ✅ Map Service Names to React Routes
  const serviceRoutes = {
    "sarkari seva": "/sarkari-seva",
    "shiksha sahayak": "/shiksha-sahayak",
    "gram doctor": "/gram-doctor",
    "kishan mitra": "/kishanMitra",
    "my village": "/gaon-connect",
    "gaon connect": "/gaon-connect",
    "gaon bazar": "/gaon-bazaar",
    "seva bazar": "/sewa-bazaar",
    "weather report": "/weather-report",
    "donation": "/donation",
    "crop monitoring": "/kishanMitra",         // ✅ Because Crop Monitoring is inside Kishan Mitra page
    "organic farming": "/kishanMitra"          // ✅ Same logic
  };

  // ✅ Text to Speech
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
  };

  // ✅ Handle Send
  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = input.toLowerCase();
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    // ✅ Navigation Detection
    for (const key in serviceRoutes) {
      if (userMessage.includes(key)) {
        const route = serviceRoutes[key];

        // Show clickable link
        setMessages((prev) => [
          ...prev,
          { text: `✅ Opening ${key}...`, sender: "bot" }
        ]);

        speak(`Opening ${key}`);

        // ✅ Navigate without reloading
        setTimeout(() => navigate(route), 500);

        return;
      }
    }

    // ✅ Otherwise call backend for answer
    try {
      const response = await fetch(`${config.API_BASE_URL}/chat`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMessage })
});

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
      speak(data.reply);

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Server not responding. Please try again later.", sender: "bot" }
      ]);
    }
  };

  // ✅ Voice Input
  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("🎙️ Use Chrome for Voice Support.");

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
      setListening(false);
    };
  };

  return (
    <div className="chatbot">
      <button className="chat-toggle" onClick={toggleChat}>
        <img src={chatIcon} alt="Chat" className="chat-icon" />
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>SmartGaon AI Assistant</span>
            <button onClick={toggleChat}>×</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              value={input}
              placeholder="Type or Speak..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button className="mic-btn" onClick={startVoiceInput}>
              {listening ? "🎙..." : "🎤"}
            </button>

            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
