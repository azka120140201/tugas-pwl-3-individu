// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

function App() {
  const [messages, setMessages] = useState([]); // State untuk menyimpan pesan

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent messages={messages} />} />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact onMessageSubmit={addMessage} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
