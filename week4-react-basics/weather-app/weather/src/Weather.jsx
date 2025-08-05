// src/Weather.jsx
import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const fetchWeather = async () => {
  if (!city) return;
  setLoading(true);
  setError("");
  try {
    const apiKey = "27f521c46e228dc60c95bfeb3226b74f"; // Buraya doğru key’i koy
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=tr`;
    console.log("Fetch URL:", url); // URL’yi kontrol et
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Şehir bulunamadı!");
    }
    }

    const data = await response.json();
    setWeatherData(data);
  } catch (err) {
    setError(err.message);
    setWeatherData(null);
  } finally {
    setLoading(false);
  }
};
    

  return (
    <div className="weather-container">
      <h2>Hava Durumu Uygulaması</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Şehir adı girin"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Getir</button>
      </div>

      {loading && <p>Yükleniyor...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-card">
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p>Sıcaklık: {weatherData.main.temp}°C</p>
          <p>Hava: {weatherData.weather[0].description}</p>
          <p>Nem: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
