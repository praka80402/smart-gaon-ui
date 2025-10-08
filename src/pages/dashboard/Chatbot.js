import React, { useState } from "react";
import "./Chatbot.css";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hello! I’m your SmartGaon Assistant. How can I help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    // Fake bot reply (you can later connect to AI / backend)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "🤖 I’ll get back to you on that!", sender: "bot" }
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chatbot">
      {/* Floating button */}
      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>SmartGaon Chatbot</span>
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
              placeholder="Type your message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
