import React from "react";
import { useState,useEffect } from "react";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white text-5xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          id="wavePath"
          fill="#273036"
          fillOpacity="1"
          d="M0,288L1440,96L1440,320L0,320Z"
        ></path>
        <text
          x="50%"
          y="75%"
          fill="white"
          className="text-5xl text-center"
          textAnchor="right"
        >
          
        </text>
        <text
          x="50%"
          y="90%" // Adjusted the y position to create more space
          fill="white"
          className="text-5xl"
          textAnchor="middle"
        >
        &copy; Ashok Neupane {dateTime.toLocaleString()}
        </text>
      </svg>
    </div>
  );
};

export default Footer;
