
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import weatherIcon from "../../assets/weather.svg";
// import windIcon from "../../assets/wind.svg";
// import rainIcon from "../../assets/weather-icon.svg";
// import "./Weatherdashboard.css";

// export default function Weatherdashboard() {
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);
//   const API_KEY = "b432423c9b34e080da00a78f925da054"; // Replace with your API key

//   useEffect(() => {
//     async function fetchWeather(lat, lon) {
//       try {
//         const res = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//         );
//         setWeather(res.data);
//       } catch (err) {
//         console.error("Weather fetch error:", err);
//         setError("Failed to fetch weather");
//       }
//     }

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           fetchWeather(position.coords.latitude, position.coords.longitude);
//         },
//         () => {
//           setError("Location access denied, showing Mumbai weather");

//           fetchWeather(19.076, 72.8777);
//         }
//       );
//     } else {
//       setError("Geolocation not supported, showing Mumbai weather");
//       fetchWeather(19.076, 72.8777);
//     }
//   }, []);

//   if (!weather) return <p>Loading...</p>;

//   const getWeatherIcon = (condition) => {
//     switch (condition.toLowerCase()) {
//       case "clear":
//         return weatherIcon;
//       case "clouds":
//         return rainIcon;
//       case "rain":
//         return rainIcon;
//       case "wind":
//         return windIcon;
//       default:
//         return weatherIcon; // fallback
//     }
//   };

//   return (
//     <div className="weather-widget">
//       <div className="weather-top">
//         <img
//           src={getWeatherIcon(weather.weather[0].main)}
//           alt={weather.weather[0].description}
//           className="weather-icon"
//         />

//         <div>
//           <h2>{Math.round(weather.main.temp)}°C</h2>
//           <p>
//             {weather.weather[0].description}, <b>{weather.name}</b>
//           </p>
//         </div>
//       </div>

//       <div className="weather-bottom">
//         <div>
//           🌧️ <p>{weather.rain ? weather.rain["1h"] + "%" : "0%"}</p>
//           <span>Precipitation</span>
//         </div>
//         <div>
//           💧 <p>{weather.main.humidity}%</p>
//           <span>Humidity</span>
//         </div>
//         <div>
//           <img src={windIcon} alt="wind" className="mini-icon" />
//           <p>{weather.wind.speed} km/h</p>
//           <span>Wind</span>
//         </div>
//       </div>

//       {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import weatherIcon from "../../assets/weather.svg";
import windIcon from "../../assets/wind.svg";
import rainIcon from "../../assets/weather-icon.svg";
import "./Weatherdashboard.css";

export default function Weatherdashboard() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "b432423c9b34e080da00a78f925da054"; // Replace with your API key

  useEffect(() => {
    async function fetchWeather(lat, lon) {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        setWeather(res.data);
      } catch (err) {
        console.error("Weather fetch error:", err);
        setError("Failed to fetch weather");
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setError("Location access denied, showing Mumbai weather");
          fetchWeather(19.076, 72.8777);
        }
      );
    } else {
      setError("Geolocation not supported, showing Mumbai weather");
      fetchWeather(19.076, 72.8777);
    }
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
        return weatherIcon;
    }
  };

  // ✅ Get current date and day
  const currentDate = new Date();
  const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const dateString = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="weather-widget">
      <div className="weather-top">
        <img
          src={getWeatherIcon(weather.weather[0].main)}
          alt={weather.weather[0].description}
          className="weather-icon"
        />

        <div className="weather-info">
          <h2>{Math.round(weather.main.temp)}°C</h2>
          {/* ✅ Date and Day Display */}
          <p className="weather-date">
            {dayName}, {dateString}
          </p>
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
        <div>
          <img src={windIcon} alt="wind" className="mini-icon" />
          <p>{weather.wind.speed} km/h</p>
          <span>Wind</span>
        </div>
      </div>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
