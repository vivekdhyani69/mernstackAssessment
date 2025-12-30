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
