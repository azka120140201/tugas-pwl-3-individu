// MainContent.js
import React from 'react';

function MainContent({ messages }) {
  return (
    <div>
      <h2>Kirim Pesan di Contact</h2>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      ) : (
        <p>Belum ada pesan yang dikirim.</p>
        
      )}
    </div>
  );
}

export default MainContent;
