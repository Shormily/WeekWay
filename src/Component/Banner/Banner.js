import React from "react";
import img14 from "../Image/img14.jpg"
import imos from "../Image/imos.jpg"
import re1 from "../Image/re1.jpg"
import re2 from "../Image/re2.jpg"
import Booking from "../Booking/Booking";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import Strategies from "../Strategies/Strategies";


const Banner = () => {
  return (
    <>
       <div className="max-w-ful h-[80vh]">
        <img className="h-full w-full object-cover" src={imos} alt="/" />
      </div>
       <div className="">
        <div className="absolute top-[50%] w-full md:-[50%]  h-full text-white ">
          <h1 className="font-bold text-6xl text-center ">Find Your <span className="text-orange-600 italic">Special</span> Trip</h1>
          <h2 className="text-4xl font-bold py-4 italic text-center">With WeekWay</h2>
         
        </div>
      </div>  
      {/* Activities part */}
      <div className="max-w-[1140px] m-auto w-full md:flex  mt-[-75px]">

        <div className="relative p-4">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
            {/* Resort */}
          </h3>
          <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={re1} alt='/'/>
        </div>
        <div className="relative p-4">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
            {/* Resort */}
          </h3>
          <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={img14} alt='/'/>
        </div>
        <div className="relative p-4">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
            {/* Resort */}
          </h3>
          <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={re2} alt='/'/>
        </div>
      </div>
      
  <Booking/>
<Gallery/>
<Strategies/>
<Contact/> 
    </>
  );
};

export default Banner;
