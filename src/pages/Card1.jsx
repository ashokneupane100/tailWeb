import React from "react";

export default function Card1() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div
  className="bg-purple-900 min-h-96 flex items-center justify-center px-4 py-[-2rem] sm:px-14 md:px-20 lg:px-40 rounded-lg"
  style={{ marginTop: "15%", marginBottom: "15%" }}
>
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-8 md:p-8 max-w-sm text-center w-full ">
          <div className="grid grid-cols-1">
            <div className="-mb-9 text-black -mt-5 px-4 py-2 rounded-t-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Tailwind CSS Card
              </h2>
              <p className="text-gray-500 mt-2">
                "A utility-first CSS framework for rapid UI development."
              </p>
            </div>
            <br />
            <br />
            <div className="bg-gradient-to-r from-purple-950 to-green-900 flex flex-row -mx-8 -mb-8 rounded-b-lg p-4">
              <div className="rounded-full h-24 w-24 flex mt-4 -mb-8 ml-1">
                <img
                  src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-1/381154154_122111062862037360_9155862262436299491_n.jpg?stp=c252.0.418.418a_dst-jpg_s160x160&_nc_cat=101&ccb=1-7&_nc_sid=6738e8&_nc_ohc=zMy7h0vJ9ZAQ7kNvgGII1gB&_nc_ht=scontent.fktm17-1.fna&oh=00_AYDEQjdxNOjY0sbm6LUrGPvVnfMcLU0zG0AKzmlozw3rPg&oe=66C5250B"
                  alt="Tailwind CSS"
                  className="h-1/2 w-1/2 rounded-full bg-white"
                />
              </div>

              <div className="text-left mt-4 ml-4">
                <p className="text-sm text-gray-500 -ml-8 text-white">Created By:</p>
                <p className="text-base font-medium text-white -ml-8">
                  Ashok Neupane
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}