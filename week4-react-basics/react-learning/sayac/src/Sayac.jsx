import React, { useState } from 'react';
import './Sayac.css'

function Sayac() {
  const [sayi, setSayi] = useState(0);
  const [isim, setIsim] = useState('');
  const [giris, setGiris] = useState('');


  return (
    <div className="sayac-container">
      <h2>Sayaç: {sayi}</h2>
      <button onClick={() => setSayi(sayi + 1)}>Artır</button>
      <button onClick={() => setSayi(sayi - 1)}>Azalt</button>
      <button onClick={() => setSayi(0)}>Sıfırla</button>

      <hr />

      <h3>Adınızı girin:</h3>
      <input 
        type="text"
        placeholder="Adınız"
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
      />

      <button onClick={() => setGiris(isim)}>Gönder</button>

        {giris && <p>Merhaba, {giris}!</p>}

    </div>    
  );
}

export default Sayac;
