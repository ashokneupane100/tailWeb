import React, { useState, useEffect } from "react";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white text-center py-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          id="wavePath"
          fill="#273036"
          fillOpacity="1"
          d="M0,288L1440,96L1440,320L0,320Z"
        ></path>
        <text
          x="50%"
          y="90%"
          fill="white"
          className="bg-green-900 text-white rounded-lg text-5xl sm:text-5xl md:text-5xl"
          textAnchor="middle"
        >
          <tspan className="text-3xl">&copy; Ashok Neupane{" "}</tspan>
          <tspan>
            {dateTime.toLocaleString("en-IN", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default Footer;
