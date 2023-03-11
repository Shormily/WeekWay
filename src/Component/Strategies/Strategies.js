import React from "react";
import m1 from "../Image/m1.jpg";
import { BsCheckLg } from "react-icons/bs";
import { Fade } from "react-reveal";

const Strategies = () => {
  return (
    <div className=" max-w-[1600px] m-auto w-full ">
        <div className="container mt-20 ">
        <div id="about" className="grid lg:grid-cols-2 md:grid-cols-2">
      <div>
        <Fade left>
        <div className="w=2/8 py-20 px-12 ">
              
            <img className="  border-4 border-bg-gray-900 mx-5" src={m1} alt="" />
              
            </div>
        </Fade>
      </div>
      <div className="px-5 lg:px-20 lg:pt-14">
        <Fade right>
          <h2 className="text-4xl font-bold my-5">
            International & Global <br />
            <span className="text-[#065f46]">Strategies.</span>
          </h2>
          <h4 className="text-xl  my-5">
            The internationalization of USA, Asian and Indian firms—trends,
            motivations, and strategy researches
          </h4>
          <p className="my-5 flex items-center">
            <BsCheckLg className="mr-5 text-[#065f46]" />
            Satisfaction Value for Money Solutions
          </p>
          <p className="my-5 flex items-center">
            <BsCheckLg className="mr-5 text-[#065f46]" />
            Business Accounting Management
          </p>
          <p className="my-5 flex items-center">
            <BsCheckLg className="mr-5 text-[#065f46]" />
            Inventory Management Tracking System
          </p>
          <button className="bg-green-800  hover-effect px-8 py-4 my-10 text-sm font-bold text-[#fff] hover:bg-[#000] hover:text-[#fff]">
            MORE ABOUT US
          </button>
        </Fade>
      </div>
    </div>
        </div>
</div>
    
    
  
  );
};

export default Strategies;