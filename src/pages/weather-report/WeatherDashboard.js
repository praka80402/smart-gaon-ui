
// import React, { useEffect, useState } from "react";
// import AlertBanner from "./AlertBanner";
// import "./WeatherCard.css";

// export default function WeatherDashboard() {
//   const [weather, setWeather] = useState(null);
//   const [alert, setAlert] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;

//           fetch(`http://localhost:8080/api/weather?lat=${latitude}&lon=${longitude}`)
//             .then((res) => {
//               if (!res.ok) throw new Error("Network error");
//               return res.json();
//             })
//             .then((data) => {
//               setWeather(data);
//               checkForAlerts(data);
//             })
//             .catch(() => setError("Failed to fetch weather"));
//         },
//         () => setError("Location access denied")
//       );
//     } else {
//       setError("Geolocation not supported");
//     }
//   }, []);

//   const checkForAlerts = (data) => {
//     const nextFew = data.list.slice(0, 8); 
//     for (let hour of nextFew) {
//       const desc = hour.weather[0].description.toLowerCase();
//       const wind = hour.wind.speed;
//       const rain = hour.rain ? hour.rain["3h"] || 0 : 0;

//       if (wind > 60 || rain > 20 || desc.includes("storm") || desc.includes("cyclone")) {
//         setAlert("⚠️ Severe weather (cyclone, storm, or heavy rain) expected within 24 hours!");
//         return;
//       }
//     }
//   };

//   if (error) return <p style={{ color: "red" }}>{error}</p>;
//   if (!weather) return <p>Loading weather data...</p>;

//   const current = weather.list[0];
//   const city = weather.city?.name || "Your Area";
//   // Get current hour
// const hour = new Date().getHours();
// const isDay = hour >= 6 && hour < 18; // 6 AM to 6 PM = Daytime
// const icon = isDay ? "☀️" : "🌙";
// const textColor = isDay ? "daytime" : "nighttime"; 

//   return (
//     <div className="weather-container">
//       {alert && <AlertBanner message={alert} />}

//       <h2>Weather in {city} </h2>
//       {/* <p>📍 Lat: {weather.city.coord.lat.toFixed(2)}, Lon: {weather.city.coord.lon.toFixed(2)}</p> */}

//          <p className="today-info">
//      Today’s Weather —{" "}
//     {new Date().toLocaleDateString("en-US", {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     })}
//   </p>
//      <p>📍 Lat: {weather.city.coord.lat.toFixed(2)}, Lon: {weather.city.coord.lon.toFixed(2)}</p>
//       <div className="weather-box">
//         <p>🌡 Temperature: {current.main.temp}°C</p>
//         <p>💨 Wind: {current.wind.speed} km/h</p>
//         <p>💧 Humidity: {current.main.humidity}%</p>
//         <p>🌥 Condition: {current.weather[0].description}</p>
//       </div>
        
      
//        <h3>Upcoming Forecast </h3>
// <div className="forecast-grid">
//   {weather.list.slice(0, 8).map((item, index) => {
//     const date = new Date(item.dt_txt);
//     const day = date.toLocaleDateString("en-US", { weekday: "short" });
//     const time = date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });

//     return (
//       <div key={index} className="forecast-card">
//         <p className="day">{day}</p>
//         <p className="time">{time}</p>

//         <img
//           src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
//           alt={item.weather[0].description}
//         />

//         <p className="temp">{Math.round(item.main.temp)}°C</p>
//         <p>{item.weather[0].main}</p>
//       </div>
//     );
//   })}
// </div>



//     </div>
//   );
// }

// --------------------

import React, { useEffect, useState } from "react";
import AlertBanner from "./AlertBanner";
import "./WeatherCard.css";

export default function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const [alert, setAlert] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          fetch(`http://localhost:8080/api/weather?lat=${latitude}&lon=${longitude}`)
            .then((res) => {
              if (!res.ok) throw new Error("Network error");
              return res.json();
            })
            .then((data) => {
              setWeather(data);
              checkForAlerts(data);
            })
            .catch(() => setError("Failed to fetch weather"));
        },
        () => setError("Location access denied")
      );
    } else {
      setError("Geolocation not supported");
    }
  }, []);

  const checkForAlerts = (data) => {
    const nextFew = data.list.slice(0, 8);
    for (let hour of nextFew) {
      const desc = hour.weather[0].description.toLowerCase();
      const wind = hour.wind.speed;
      const rain = hour.rain ? hour.rain["3h"] || 0 : 0;

      if (wind > 60 || rain > 20 || desc.includes("storm") || desc.includes("cyclone")) {
        setAlert("⚠️ Severe weather (cyclone, storm, or heavy rain) expected within 24 hours!");
        return;
      }
    }
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!weather) return <p>Loading weather data...</p>;

  const current = weather.list[0];
  const city = weather.city?.name || "Your Area";

  // 🕓 Day/Night Mode
  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour < 18;
  const icon = isDay ? "☀️" : "🌙";
  const textColor = isDay ? "daytime" : "nighttime";

  return (
    <div className="weather-container">
      {alert && <AlertBanner message={alert} />}

      <h2>Weather in {city}</h2>

      {/* 🗓️ Today’s Date and Day */}
      <p className={`today-info ${textColor}`}>
        {icon} Today’s Weather —{" "}
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <p>
        📍 Lat: {weather.city.coord.lat.toFixed(2)}, Lon:{" "}
        {weather.city.coord.lon.toFixed(2)}
      </p>

      {/* 🌤 Current Weather Box */}
      <div className="weather-box">
        <p>🌡 Temperature: {current.main.temp}°C</p>
        <p>💨 Wind: {current.wind.speed} km/h</p>
        <p>💧 Humidity: {current.main.humidity}%</p>
        <p>🌥 Condition: {current.weather[0].description}</p>
      </div>

   
      <h3>Upcoming Forecast </h3>
      <div className="forecast-grid">
        {weather.list.slice(0, 8).map((item, index) => {
          const date = new Date(item.dt_txt);
          const day = date.toLocaleDateString("en-US", { weekday: "short" });
          const time = date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
          const weatherType = item.weather[0].main.toLowerCase();

        
          const bgColor =
            weatherType.includes("clear")
              ? "#fffbe6"
              : weatherType.includes("rain")
              ? "#e0f2fe"
              : weatherType.includes("cloud")
              ? "#f1f5f9"
              : weatherType.includes("storm")
              ? "#ede9fe"
              : "#ffffff";

          return (
            <div
              key={index}
              className="forecast-card"
              style={{ backgroundColor: bgColor }}
            >
              <p className="day">{day}</p>
              <p className="time">{time}</p>

              {/* 🖼️ Colored Weather Icons */}
              <img
                src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
              />

              <p className="temp">{Math.round(item.main.temp)}°C</p>
              <p>{item.weather[0].main}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
