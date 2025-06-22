import React, { useEffect, useState } from "react";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  return (
    <section className="messages">
      <h2>Contact Form Submissions</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg._id}>
              <strong>{msg.name}</strong> ({msg.email})<br />
              <em>{msg.city}</em> - {msg.phone}<br />
              <p>{msg.message}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Messages;
