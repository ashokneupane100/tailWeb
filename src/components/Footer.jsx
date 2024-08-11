import React from "react";

const Footer = () => {
  return (
    <div className="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          id="wavePath"
          fill="#273036"
          fillOpacity="1"
          d="M0,288L1440,96L1440,320L0,320Z"
        ></path>
        <text x="50%" y="75%" fill="white" className="text-2xl vsm:invisible">
          Developed by:
        </text>
        <text x="50%" y="85%" fill="white" className="text-2xl vsm:invisible">
          &copy; Ashok Neupane {new Date().getFullYear()}
        </text>
      </svg>
    </div>
  );
};

export default Footer;
