import React, { useEffect, useState } from "react";
import axios from "axios";
import weatherIcon from "../../assets/weather.svg";
import windIcon from "../../assets/wind.svg";
import rainIcon from "../../assets/weather-icon.svg"; 
import "./Weatherdashboard.css";

export default function Weatherdashboard() {
  const [weather, setWeather] = useState(null);
  const city = "Mumbai"; 
  const API_KEY = "b432423c9b34e080da00a78f925da054";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(res.data);
      } catch (err) {
        console.error("Weather fetch error:", err);
      }
    }
    fetchWeather();
  }, []);

  if (!weather) return <p>Loading...</p>;
   const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return weatherIcon;
      case "clouds":
        return rainIcon;
      case "rain":
        return rainIcon;
      case "wind":
        return windIcon;
      default:
        return weatherIcon; // fallback
    }
  };
   
  return (
    <div className="weather-widget">
      <div className="weather-top">
        {/* <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather"
        /> */}

         <img
          src={getWeatherIcon(weather.weather[0].main)}
          alt={weather.weather[0].description}
          className="weather-icon"
        />


        <div>
          <h2>{Math.round(weather.main.temp)}°C</h2>
          <p>
            {weather.weather[0].description}, <b>{weather.name}</b>
          </p>
        </div>
      </div>

      <div className="weather-bottom">
        <div>
          🌧️ <p>{weather.rain ? weather.rain["1h"] + "%" : "0%"}</p>
          <span>Precipitation</span>
        </div>
        <div>
          💧 <p>{weather.main.humidity}%</p>
          <span>Humidity</span>
        </div>
        {/* <div>
          🌬️ <p>{weather.wind.speed} km/h</p>
          <span>Wind</span>
        </div> */}
         
          <div>
          <img src={windIcon} alt="wind" className="mini-icon" />
          <p>{weather.wind.speed} km/h</p>
          <span>Wind</span>
        </div>

      </div>
    </div>
  );
}
