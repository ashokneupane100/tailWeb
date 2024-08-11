import React from 'react'

function Intro() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center my-8'> Who am I ? </h1>
      <div className='flex justify-center pt-8 '>
        <div className='h-[400px] w-[400px] bg-black rounded-full flex justify-center items-center  '>

          <div className='text-white p-10 text-center'>
            <p>Name : Ashok Neupane</p>
            <p>Email: ashokabrother@gmail.com</p>
            <p>Tel:+977987656</p>
            <p>Experience:JavaScript, HTML,CSS,React,NodeJs Express,MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro