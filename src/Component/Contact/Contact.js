import React from "react";
import con5 from "../Image/con3.png";
import "./Contact.css"
const Contact = () => {
  return (
    <div className="bg-[#F7F7F7] pb-18 p-14">
      <div className=" max-w-[1200px] m-auto w-full  ">
        <div className="container ">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 ">
       
            <div className=" text-black text-3xl mb-3 ">
            <h1 className="mb-8 mt-16 text-4xl text-violet-700 font-semibold">Contact US</h1>
            <img className="h-50 w-96 " src={con5} alt="" />
             
            
            </div>

            <div className="w=2/4 py-16 px-12  ">
              {/* <h2 className="text-3xl mb-4">Register</h2> */}
             
              <from action="#" >
                <div className="grid grid-cols-2 d-flex gap-5 mt-20">
                <input
                className="mt-5 mb-3 p-3   w-100 shadow"
                placeholder="E-mai;"
                type="text"
              />
                  <input
                className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-100 shadow"
                placeholder="password"
                type="text"
              />
                  
                </div>
                
              
               
                <div className="">
                  <input
                    type="checkbox"
                    className="border border-gray-400 py-1 rounded-md mt-2 mb-2"
                  />
                  <span> I accept the Terms & Privacy Policy</span>
                </div>
                <div>
                <textarea
                className="mt-5 p-4  w-full shadow"
                placeholder="Message"
                type="text"
              />
                </div>
                <div className="mt-2">
                  <button className="w-full  bg-gradient-to-r from-violet-700 to-blue-400 p-2 text-white rounded-md">
                    Register Now
                  </button>
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
