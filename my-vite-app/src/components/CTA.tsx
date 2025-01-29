import React from 'react';
import DashBoard from "../../public/Svg/DashBoard"
const CTA = () => {
  return (
    <div className="p-10 relative">
      <svg width="1192" height="414" viewBox="0 0 1192 414" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z" fill="#4640DE" />

        {/* Embedding divs inside SVG */}
        <foreignObject x="50" y="50" width="1092" height="300">
          <div className="flex justify-between items-center w-full h-full p-10">
            {/* Left Content */}
            <div className=" text-white p-6 rounded-lg">
              <h2 className="text-4xl font-bold text-white">Start Posting <br></br> Jobs Today</h2>
              <p className='mt-4' >Start Posting Jobs for only $10</p>
              <button className='mt-6 bg-white  text-purple-700 p-4 w-full' >Sign Up for Free</button>
            </div>

            {/* Right Content */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg mt-4 absolute right-0 bottom-0">
              <DashBoard />
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default CTA;
