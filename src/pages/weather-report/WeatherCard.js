// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import "./Pages.css";
// import "./WeatherCard.css";

// export default function WeatherReportDetail() {
//   const [forecast, setForecast] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [unit, setUnit] = useState("C");
//   const [location, setLocation] = useState("Muzaffarpur");
//   const [search, setSearch] = useState("Muzaffarpur");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const API_KEY = "b432423c9b34e080da00a78f925da054"; 

//   // Fetch weather data
//   useEffect(() => {
//     async function fetchWeather() {
//       setLoading(true);
//       setError("");
//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/forecast?q=${location},IN&appid=${API_KEY}&units=metric`
//         );

//         // Group forecast by day
//         const grouped = {};
//         response.data.list.forEach((item) => {
//           const date = new Date(item.dt_txt).toLocaleDateString("en-IN", {
//             weekday: "long",
//           });
//           if (!grouped[date]) {
//             grouped[date] = [];
//           }
//           grouped[date].push(item);
//         });

//         // Prepare daily summary
//         const days = Object.keys(grouped).map((day) => {
//           const data = grouped[day][0];
//           return {
//             day,
//             temp_min: Math.round(
//               Math.min(...grouped[day].map((d) => d.main.temp_min))
//             ),
//             temp_max: Math.round(
//               Math.max(...grouped[day].map((d) => d.main.temp_max))
//             ),
//             desc: data.weather[0].description,
//             icon: data.weather[0].icon,
//             precipitation: data.pop ? Math.round(data.pop * 100) + "%" : "N/A",
//             humidity: data.main.humidity + "%",
//             wind: data.wind.speed + " m/s",
//           };
//         });

//         setForecast(days.slice(0, 4)); // Show 4 days
//       } catch (err) {
//         setError("City not found. Please try again.");
//         setForecast([]);
//       }
//       setLoading(false);
//     }
//     fetchWeather();
//   }, [location]);

//   // Convert °C <-> °F
//   const convertTemp = (temp) =>
//     unit === "C" ? `${temp}°C` : `${Math.round((temp * 9) / 5 + 32)}°F`;

//   const activeDay = forecast[activeIndex];

//   return (
//     <div className="page-container">
//       <h1 className="page-title">Weather Report</h1>
//       <p className="page-text">Search any city/state for detailed forecast</p>

//       {/* Search Bar */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Enter city (e.g., Delhi, Patna, Bangalore)"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               setLocation(search);
//               setActiveIndex(0);
//             }
//           }}
//         />
//         <button
//           onClick={() => {
//             setLocation(search);
//             setActiveIndex(0);
//           }}
//         >
//           Search
//         </button>
//       </div>

//       {/* Loading / Error */}
//       {loading && <p>Loading weather data...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Tabs */}
//       {!loading && forecast.length > 0 && (
//         <>
//           <div className="day-tabs">
//             {forecast.map((d, i) => (
//               <button
//                 key={i}
//                 className={`day-tab ${i === activeIndex ? "active" : ""}`}
//                 onClick={() => setActiveIndex(i)}
//               >
//                 {d.day}
//               </button>
//             ))}
//           </div>

//           {/* Unit Toggle */}
//           <div className="unit-toggle">
//             <button
//               onClick={() => setUnit("C")}
//               className={unit === "C" ? "active" : ""}
//             >
//               °C
//             </button>
//             <button
//               onClick={() => setUnit("F")}
//               className={unit === "F" ? "active" : ""}
//             >
//               °F
//             </button>
//           </div>

//           {/* Weather Card */}
//           {activeDay && (
//             <div className="weather-card">
//               <img
//                 src={`https://openweathermap.org/img/wn/${activeDay.icon}@2x.png`}
//                 alt="Weather Icon"
//                 className="weather-icon"
//               />
//               <h2 className="weather-temp">
//                 {convertTemp(activeDay.temp_min)} -{" "}
//                 {convertTemp(activeDay.temp_max)}
//               </h2>
//               <p className="weather-desc">{activeDay.desc}</p>

//               <div className="weather-metrics">
//                 <div>
//                   <strong>Precipitation:</strong> {activeDay.precipitation}
//                 </div>
//                 <div>
//                   <strong>Humidity:</strong> {activeDay.humidity}
//                 </div>
//                 <div>
//                   <strong>Wind:</strong> {activeDay.wind}
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./WeatherCard.css";

// export default function WeatherRealtime() {
//   const [current, setCurrent] = useState(null);
//   const [forecast, setForecast] = useState([]);
//   const [city, setCity] = useState("Muzaffarpur");
//   const [search, setSearch] = useState("Muzaffarpur");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const API_KEY = "b432423c9b34e080da00a78f925da054"; 

//   useEffect(() => {
//     async function fetchWeather() {
//       setLoading(true);
//       setError("");
//       try {
//         // Current weather
//         const currentRes = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//         );
//         setCurrent(currentRes.data);

//         // 5-day forecast (3h interval)
//         const forecastRes = await axios.get(
//           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
//         );

//         // Group forecast into days
//         const grouped = {};
//         forecastRes.data.list.forEach((item) => {
//           const date = new Date(item.dt_txt);
//           const dayLabel = date.toLocaleDateString("en-IN", {
//             weekday: "short",
//             day: "numeric",
//             month: "short",
//           });
//           if (!grouped[dayLabel]) grouped[dayLabel] = [];
//           grouped[dayLabel].push(item);
//         });

//         // Take daily summary
//         const days = Object.keys(grouped).map((day) => {
//           const arr = grouped[day];
//           return {
//             day,
//             min: Math.round(Math.min(...arr.map((x) => x.main.temp_min))),
//             max: Math.round(Math.max(...arr.map((x) => x.main.temp_max))),
//             icon: arr[0].weather[0].icon,
//             desc: arr[0].weather[0].description,
           
//           };
//         });

//         setForecast(days.slice(0, 5)); // Today + next 4 days
//       } catch (err) {
//         setError("City not found. Try again.");
//         setCurrent(null);
//         setForecast([]);
//       }
//       setLoading(false);
//     }

//     fetchWeather();
//   }, [city]);

//   return (
//     <div className="wr-page">
//       <h1 className="wr-title">Weather Report</h1>
//       <div className="wr-search">
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Enter city..."
//           onKeyDown={(e) => e.key === "Enter" && setCity(search)}
//         />
//         <button onClick={() => setCity(search)}>Search</button>
//       </div>

//       {loading && <p>Loading...</p>}
//       {error && <p className="wr-error">{error}</p>}

//       {current && (
//         <div className="wr-current">
//           <h2>
//             {current.name}, {current.sys.country}
//           </h2>
//           <div className="wr-current-info">
//             <img
//               src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
//               alt="icon"
//             />
            
//             <div>
//               <h3>{Math.round(current.main.temp)}°C</h3>
//               <p>{current.weather[0].description}</p>
//               <p>💧 {current.main.humidity}%</p>
//               <p>💨 {current.wind.speed} m/s</p>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="wr-forecast">
//         {forecast.map((f, i) => (
//           <div key={i} className="wr-card">
//             <p className="wr-day">{f.day}</p>
//             <img
//               src={`https://openweathermap.org/img/wn/${f.icon}@2x.png`}
//               alt="icon"
//             />
//             <p>
//               {f.min}° / {f.max}°
//             </p>
//             <p className="wr-desc">{f.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherCard.css";

export default function WeatherCard() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Mumbai");
  const [search, setSearch] = useState("Mumbai");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "b432423c9b34e080da00a78f925da054"; // your OpenWeather API key

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError("");
      try {
        // Current weather
        const currentRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setCurrent(currentRes.data);

        // 5-day forecast (3h interval)
        const forecastRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        // Group forecast into days
        const grouped = {};
        forecastRes.data.list.forEach((item) => {
          const date = new Date(item.dt_txt);
          const dayLabel = date.toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
          });
          if (!grouped[dayLabel]) grouped[dayLabel] = [];
          grouped[dayLabel].push(item);
        });

        // Take daily summary
        const days = Object.keys(grouped).map((day) => {
          const arr = grouped[day];
          return {
            day,
            min: Math.round(Math.min(...arr.map((x) => x.main.temp_min))),
            max: Math.round(Math.max(...arr.map((x) => x.main.temp_max))),
            icon: arr[0].weather[0].icon,          // ✅ Weather icon (colorful)
            desc: arr[0].weather[0].description,   // ✅ Weather description
          };
        });

        setForecast(days.slice(0, 5)); // Today + next 4 days
      } catch (err) {
        setError("City not found. Try again.");
        setCurrent(null);
        setForecast([]);
      }
      setLoading(false);
    }

    fetchWeather();
  }, [city]);

  return (
    <div className="wr-page">
      <h1 className="wr-title">Weather Report</h1>

      {/* Search Bar */}
      <div className="wr-search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter city..."
          onKeyDown={(e) => e.key === "Enter" && setCity(search)}
        />
        <button onClick={() => setCity(search)}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="wr-error">{error}</p>}

      {/* Current Weather */}
      {current && (
        <div className="wr-current">
          <h2>
            {current.name}, {current.sys.country}
          </h2>
          <div className="wr-current-info">
            <img
              src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
              alt="icon"
            />
            <div>
              <h3>{Math.round(current.main.temp)}°C</h3>
              <p>{current.weather[0].description}</p>
              <p>💧 {current.main.humidity}%</p>
              <p>💨 {current.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}

      {/* Forecast Cards */}
      <div className="wr-forecast">
        {forecast.map((f, i) => (
          <div key={i} className="wr-card">
            <p className="wr-day">{f.day}</p>
            <img
              src={`https://openweathermap.org/img/wn/${f.icon}@2x.png`}
              alt={f.desc}
              className="forecast-icon"
            />
            <p>
              {f.min}° / {f.max}°
            </p>
            <p className="wr-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
