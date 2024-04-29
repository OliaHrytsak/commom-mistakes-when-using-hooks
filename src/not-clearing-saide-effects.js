import React, { useEffect, useState } from "react";

function NotClearingSideEffects() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    const websocket = new WebSocket("ws://localhost:8080");

    websocket.onopen = () => {
      setMessages((prevMessages) => [...prevMessages, "WebSocket connected"]);
    };

    websocket.onmessage = (event) => {
      const receivedMessage = event.data;
      
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    websocket.onclose = () => {
      setMessages((prevMessages) => [...prevMessages, "WebSocket disconnected"]);
    };

    // Missing cleanup function!
    // Without cleanup, WebSocket connection remains open even after the component unmounts.

    // return () => {
    //   console.log("WebSocket disconnected");
    //   websocket.close();
    // };
  }, []);

  return (
    <div>
      <h2>Connection Status:</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default NotClearingSideEffects;