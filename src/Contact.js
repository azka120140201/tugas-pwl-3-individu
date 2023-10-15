// Contact.js
import React, { useState } from 'react';

function Contact({ onMessageSubmit }) {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [dateTime, setDateTime] = useState(null);

  const handleSubmit = () => {
    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    // Lakukan validasi atau pengiriman pesan ke server di sini
    // Setelah berhasil dikirim, atur setSuccess(true);
    onMessageSubmit(`${formattedDateTime}: ${message}`); // Kirim pesan dengan tanggal dan jam
    setSuccess(true);
    setMessage(''); // Reset pesan setelah pengiriman
    setDateTime(formattedDateTime);
  };

  return (
    <div>
      <h2>Kontak Kami</h2>
      {success && (
        <p>
          Pesan berhasil dikirim pada: {dateTime}
        </p>
      )}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Masukkan pesan..."
      />
      <button onClick={handleSubmit}>Kirim Pesan</button>
    </div>
  );
}

export default Contact;
