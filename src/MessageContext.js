// MessageContext.js
import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export function useMessageContext() {
  return useContext(MessageContext);
}

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
