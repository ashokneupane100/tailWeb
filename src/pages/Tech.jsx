import React from 'react';
import { FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa';
import { IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import { DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';

const Tech = () => {
  return (
    <div className="m-6">
      <h1 className="text-center text-2xl font-bold mb-12">Technologies I Use</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        <div className="flex items-center justify-center text-[100px]">
          <FaReact />
        </div>
        <div className="flex items-center justify-center text-[100px]">
          <IoLogoHtml5 />
        </div>
        <div className="flex items-center justify-center text-[100px]">
          <FaCss3Alt />
        </div>
        <div className="flex items-center justify-center text-[100px]">
          <IoLogoJavascript />
        </div>
        <div className="flex items-center justify-center text-[100px]">
          <DiMongodb />
        </div>
        <div className="flex items-center justify-center text-[100px]">
          <SiExpress />
        </div>
        <div className="flex items-center justify-center text-[100px]">
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Tech;