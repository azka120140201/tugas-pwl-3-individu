import React from 'react';

function About() {
  return (
    <div>
      <h2>Tugas Individu 3</h2>
      <p>
        Tugas Individu 3 adalah sebuah proyek pengembangan aplikasi web sederhana menggunakan React JS. Aplikasi ini memiliki beberapa fitur utama, antara lain:
      </p>
      <ul>
        <li>Aplikasi terdiri dari setidaknya tiga komponen berbeda: Header, MainContent, dan Footer.</li>
        <li>Untuk navigasi, digunakan react-router-dom dengan setidaknya tiga halaman: Beranda, Tentang, dan Kontak.</li>
        <li>Pada halaman "Kontak", terdapat sebuah formulir yang memungkinkan pengguna mengirim pesan, dan konsep data binding digunakan untuk mengambil data dari formulir.</li>
        <li>Dalam aplikasi, ada contoh dari komponen stateful (misalnya, komponen yang menampilkan jumlah pesan yang telah dikirim) dan komponen stateless (misalnya, komponen yang hanya menampilkan informasi statis).</li>
        <li>Konsep state management sederhana diterapkan, menggunakan useState dan useContext untuk mengelola data pesan yang dikirim melalui formulir.</li>
        <li>Beberapa unit test sederhana juga ditulis dengan library pengujian React, dan lebih dari 80% dari baris kode telah diuji.</li>
      </ul>
      <p>
        Aplikasi ini merupakan bagian dari pembelajaran pemrograman web lanjut dan merupakan contoh penggunaan React JS dalam pengembangan web.
      </p>
    </div>
  );
}

export default About;
