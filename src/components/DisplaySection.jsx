import React from 'react';
import Tech from '../pages/Tech';
import Intro from '../pages/Intro';

const DisplaySection = () => {
  return (
    <div className='grid grid-cols-1'>
    <div className='m-6 grid grid-cols-1 md:grid-cols-2 items-center md:mb-12 px-4'>
      <div className='flex justify-center'>
        <div className='dis-img h-auto max-w-full'>
          <dotlottie-player 
            src="https://lottie.host/b27fcd0b-f126-43f5-8637-7aeda07f6958/tOOmdjCsQj.json" 
            background="transparent" 
            speed="1" 
            loop 
            autoplay 
            style={{ height: "100%", width: "100%" }} 
          ></dotlottie-player>
        </div>
      </div>
      <div className='text-center md:text-left'>
        <h1 className='text-3xl font-bold text-gray-800'>Hi, I am Ashok Neupane</h1>
        <p className='text-red-500 font-semibold text-xl mt-2'>Full Stack Web Developer, JavaScript Lover, Tech Enthusiast</p>
        <p className='mt-4 text-lg'>
          Hello! I am a passionate Full Stack Web Developer with a deep love for JavaScript and a keen interest in technology entrepreneurship. With a solid foundation in both front-end and back-end development, I thrive on creating dynamic, user-friendly web applications that not only meet client needs but also provide an engaging user experience.
        </p>
      </div>
    </div>
    <Tech />
    <Intro />
    </div>
  );
};

export default DisplaySection;