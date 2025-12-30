// . Optimizing Rendering
// Suppose the chat window has 10,000 messages. Rendering all of them makes React UI very slow.
//  👉 How would you optimize rendering so that only the latest 50 messages are visible, but older ones can be loaded on scroll-up?


import { useState, useEffect } from "react";

function ChatWindow1({ allMessages }) {
  const [visibleCount, setVisibleCount] = useState(50);

  const visibleMessages = allMessages.slice(-visibleCount);

  function handleScroll(e) {
    if (e.target.scrollTop === 0) {
      setVisibleCount(prev => prev + 50);
    }
  }

  return (
    <div
      style={{ height: "400px", overflowY: "auto" }}
      onScroll={handleScroll}
    >
      {visibleMessages.map(msg => (
        <div key={msg._id}>{msg.message}</div>
      ))}
    </div>
  );
}

export default ChatWindow1;
