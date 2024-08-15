import React from "react";

export default function Class1() {
  return (

    <div className="border-solid border-black border-2 m-3 p-16 rounded-2xl">

    <div className="max-w-4xl mx-auto border rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Section - Image */}
        <div className="col-span-1 md:col-span-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1661572960535-42a68c141554?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Coffee Time"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="col-span-2 md:col-span-2 flex flex-col justify-center p-6 space-y-4 border-solid border-black border-2 m-3 rounded-3xl">
          <div className="text-gray-500 text-sm flex items-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m4-4v8m0 4c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
            </svg>
            Members only
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Can coffee make you a better developer?
          </h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          
          {/* Author Section */}
          <div className="flex items-center space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Ram Prasad Pokharel</p>
              <p className="text-gray-600">{new Date().toLocaleDateString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
