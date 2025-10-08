import React, { useState, useEffect } from "react";
import "../../App.css";


import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const images = [img1, img2, img3];

function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="Slideshow" className="slide-img" />
    </div>
  );
}

export default Dashboard;
