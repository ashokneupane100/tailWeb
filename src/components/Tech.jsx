import React from 'react'
import { FaAngular, FaCss3Alt, FaJava, FaReact } from 'react-icons/fa'
import { IoLogoHtml5, IoLogoJavascript } from 'react-icons/io'
import { IoLogoVue } from 'react-icons/io5'

const Tech = () => {
  return (
    <div >
      <h1 className='text-center text-2xl font-bold'>Technologies I use</h1>
      <div className='grid grid-cols-4 text-[100px] space-y-10 justify-items-center '>
        <FaReact />
        <IoLogoVue />
        <IoLogoHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <FaJava />
        <FaAngular />

      </div>


    </div>
  )
}

export default Tech