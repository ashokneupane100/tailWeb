import React from 'react'

function Intro() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center my-8'> Who am I ? </h1>
      <div className='flex justify-center pt-8 gap-y-10'>
        <div className='h-[400px] w-[400px] bg-black rounded-full flex justify-center items-center  '>

          <div className='text-white p-10 text-center mx-4 space-y-6'>
            
            <p>Name : Ashok Neupane</p>
            <p>Experience: HTML, CSS, JavaScript, React, NodeJs Express, MongoDB</p>
            <p>Email: ashokabrother@gmail.com</p>
            <p>Tel:+977987656</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro