// App.js
import React from 'react';
import Motivasyon from './Motivasyon';
import './index.css';

function App() {
  return (
    <div>
      <h1> ❤︎ Motivasyon Mesajları ❤︎ </h1>
      <Motivasyon mesaj="Her yeni gün yeni bir başlangıçtır." />
      <Motivasyon mesaj="Vazgeçme, harika şeyler zaman alır." />
      <Motivasyon mesaj="Sen güçlüsün, sen yaparsın!" />
    </div>
  );
}

export default App;
