import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-black text-white px-5 py-3 flex justify-between items-center flex-wrap">
      <NavLink to="/">
        <div className="flex items-center">
          <svg
            viewBox="0 0 100 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10"
          >
            <path
              d="M25 0C18.571 0 13.357 3.686 10.357 10.058C14.107 7.984 18.179 7.96 22.571 10C24.024 10.754 25.086 11.933 26.786 14.058C29.571 17.5 33.571 20 40.5 20C46.929 20 52.143 16.314 55.143 9.942C51.393 12.016 47.321 12.04 42.929 10C41.476 9.246 40.414 8.067 38.714 5.942C35.929 2.5 31.929 0 25 0ZM25 20C18.571 20 13.357 23.686 10.357 30.058C14.107 27.984 18.179 27.96 22.571 30C24.024 30.754 25.086 31.933 26.786 34.058C29.571 37.5 33.571 40 40.5 40C46.929 40 52.143 36.314 55.143 29.942C51.393 32.016 47.321 32.04 42.929 30C41.476 29.246 40.414 28.067 38.714 25.942C35.929 22.5 31.929 20 25 20Z"
              fill="#06B6D4"
            />
          </svg>
          <div className="ml-2 text-xl font-semibold">TailyWeb</div>
        </div>
      </NavLink>
      <nav className="space-x-4 mt-2 sm:mt-0">
        <NavLink to="/about-page" className="hover:text-gray-300">
          About
        </NavLink>
        <NavLink to="/contact-page" className="hover:text-gray-300">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
