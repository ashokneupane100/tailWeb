import React, { useState, useEffect } from "react";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to bg-gray-700 text-white text-center mt-1 py-10">
      <p className="text-xl">
        &copy; Ashok Neupane{" "}
        </p>
        <br />
        <p className="text-3xl">
        {dateTime.toLocaleString("en-IN", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
};




export default Footer;
