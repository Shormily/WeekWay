import React from 'react';
import Brands from '../Brands/Brands';
import { BsArrowRightShort, BsTelephoneFill } from "react-icons/bs";
import { MdMap, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <>

 <Brands/>
 <div className="bg-gray-800 text-[#666666] lg:p-24 p-5">
      <div className="flex flex-col lg:flex-row">
        <div className="w-2/4 ">
          <h1 className='text-[#fff] text-4xl'>WeekWay</h1>
          <p className="my-4 text-[#fff]">
            Tractor is a premium WordPress theme embracing predominant features,
            outstanding pre-designed demos.
          </p>
          <button className="text-[#fff] font-bold text-sm flex items-center">
            SEE MORE <BsArrowRightShort className="text-xl text-[#4f46e5]" />
          </button>
        </div>
        <div className="lg:w-2/4 mx-5">
          <h5 className="text-[#fff] font-bold mb-5">CONTACT US</h5>
          <hr className="border border-[#fff] mb-5" />
          <p className="flex items-center text-[#fff]">
            <MdMap className="text-xl mr-3 my-4 text-[#4f46e5]" />
            183 Donato Parkways CA, US
          </p>
          <p className="flex items-center text-[#fff]">
            <BsTelephoneFill className="text-xl mr-3 my-4 text-[#4f46e5]" />
            (+880)000.000.000
          </p>
          <p className="flex items-center text-[#fff]">
            <MdMail className="text-xl mr-3 my-4 text-[#4f46e5]" />
            home@businext.com
          </p>
        </div>
        <div className="lg:w-2/4 mx-5">
          <h5 className="text-[#fff] font-bold mb-5">EXTRA LINKS</h5>
          <hr className="border border-[#3D3D3D] mb-9 " />
          <p className="my-3 hover:underline cursor-pointer text-[#fff]">Features</p>
          <p className="my-3 hover:underline cursor-pointer text-[#fff]">Support</p>
          <p className="my-3 hover:underline cursor-pointer text-[#fff]">Services</p>
          <p className="my-3 hover:underline cursor-pointer text-[#fff]">History</p>
          <p className="my-3 hover:underline cursor-pointer text-[#fff]">Dealers</p>
        </div>
        <div className="lg:w-2/4 mx-5">
          <h5 className="text-[#fff] font-bold mb-5">NEWS LETTER</h5>
          <hr className="border border-[#3D3D3D] mb-9" />
          <form>
            <input
              type="text"
              placeholder="Enter your email"
              className="py-3 px-5 w-full"
            />
            <button
              className="bg-gradient-to-r from-violet-700 to-blue-400 hover-effect px-10 py-4 my-5 text-sm font-bold text-[#fff] hover:bg-[#fff] hover:text-[#000]"
              type="submit"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      <p className="mt-10 text-[#fff]">
        &copy; 2023 All Rights Reserved by Shormily Raisa
      </p>
    </div>
    </>
  );
};

export default Footer;