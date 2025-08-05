// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'; // App bileşenimizi içe aktardık

// React 18 ile gelen yeni createRoot yapısı
const root = ReactDOM.createRoot(document.getElementById('root'));

// Uygulamanın çalıştığı ana bileşeni root'a bağlıyoruz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
