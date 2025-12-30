// . Real-Time Chat Rendering with Auto-Scroll 
     

import { useEffect, useState, useRef } from "react";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    fetch("/api/messages")
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );
        setMessages(sorted);
      });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ height: "400px", overflowY: "auto" }}>
      {messages.map(msg => (
        <div key={msg._id}>
          <strong>{msg.from}:</strong> {msg.message}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatWindow;
