
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./WeatherCard.css";

// export default function WeatherCard() {
//   const [current, setCurrent] = useState(null);
//   const [forecast, setForecast] = useState([]);
//   const [city, setCity] = useState("Mumbai");
//   const [search, setSearch] = useState("Mumbai");
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

//         setForecast(days.slice(0, 5));
//       } catch (err) {
//         setError("City not found. Try again.");
//         setCurrent(null);
//         setForecast([]);
//       }
//       setLoading(false);
//     }

//     fetchWeather();
//   }, [city]);

//  return (
//   <div className="wr-page">
//     {/* Header row */}
//     <div className="wr-top">
//       <h1 className="wr-title">Weather Report</h1>

//       {/* Search Bar */}
//       <div className="wr-search">
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Enter city..."
//           onKeyDown={(e) => e.key === "Enter" && setCity(search)}
//         />
//         <button onClick={() => setCity(search)}>Search</button>
//       </div>
//     </div>

//     <div className="wr-content">
//       {/* Current Weather Left */}
//       {current && (
//         <div className="wr-current">
//           <h2>
//             {current.name}, {current.sys.country}
//           </h2>
//           <div className="wr-current-info">
//             <img
//               src={`https://openweathermap.org/img/wn/${current.weather[0].icon}`}
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

//       {/* Forecast Right */}
//       <div className="wr-forecast">
//         {forecast.map((f, i) => (
//           <div key={i} className="wr-card">
//             <p className="wr-day">{f.day}</p>
//             <img
//               src={`https://openweathermap.org/img/wn/${f.icon}@2x.png`}
//               alt={f.desc}
//               className="forecast-icon"
//             />
//             <p>
//               {f.min}° / {f.max}°
//             </p>
//             <p className="wr-desc">{f.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );
// }