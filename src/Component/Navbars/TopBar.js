import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 font-family: 'M PLUS Rounded 1c', sans-serif;">
        <div className="flex  items-center  ">
          <BsChatSquareDots size={30} className="mr-2 text-violet-700" />
          <h1 className="text-xl font-bold text-gray-700">WEEKWAY</h1>
        </div>
        <div className="flex">
        <div className="hidden md:flex mt-3  item-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2 text-violet-700" />
          <p className="text-sm font-bold text-gray-700">9AM - 5pm</p>
        </div>
        <div className="hidden md:flex mt-3 item-center px-6">
          <AiFillPhone size={20} className="mr-2 text-violet-700" />
          <p className="text-sm font-bold text-gray-700">1-888-817-1234</p>
        </div>
        <button className=" px-4 py-2 border bg-gradient-to-r from-violet-700 to-blue-400  text-slate-100 font-semibold">
          Get a Free Quote
        </button>
            
        </div>
        
      </div>
    </>
  );
};

export default TopBar;
