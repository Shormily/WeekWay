import React, { useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaGoodreadsG,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "./Hook/useAuth";
// import { BsChatDots } from "react-icons/bs";
import { IoLogInSharp } from "react-icons/io5";
import useFirebase from "./Hook/useFirebase";


const Navbar = () => {
  const { user, logout } = useFirebase()
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <>
      <div className="w-full min-h-[60px]  flex justify-between items-center absolute z-20 text-white bg-gray-700/80">
        <ul className="hidden sm:flex px-4 p-4 mt-2 ">
          <li className="mx-4" >
            <NavLink as={NavLink}  to="/">Home</NavLink>
          </li>
          <li className="mr-4">
            <NavLink  as={NavLink}  to="/about">AboutUS</NavLink>
          </li>
         
          <li className="mr-4">
            <NavLink as={NavLink}  to="/service">Service</NavLink>
          </li>
         
          {/* <li className="mr-4" >
            <NavLink as={NavLink}  to="/dashboard">Dashboard</NavLink>
          </li> */}
       
          <li  className="mr-4">
            <NavLink as={NavLink}  to="/contact">Contact</NavLink>
          </li>
         <li className="mr-4 " >
          {!user?.email && (
                <NavLink
                  as={NavLink}
                  className=" text-light flex justify-between "
                  to="/sign  "
                >
                  SignIn
                   <IoLogInSharp className="mx-2" size="20" />
                </NavLink>
              )}
        {user?.email && (
                <NavLink
                  onClick={logout}
                  className="flex justify-between "
                  to="/sign  "
                  as={NavLink}
                >
                  SignOut
                   <IoLogInSharp className="mx-2" size="20" />
                  <span>
                    {user?.photoURL ? (
                      <img className=" w-9 h-9 rounded-full  " src={user.photoURL} alt="" />
                    ) : (
                      <small className="text-light ">
                        {user?.displayName}
                      </small>
                    )}
                  </span>
                </NavLink>
              )}
          </li> 
        </ul>
        
        <div className="flex justify-between">
          <FaFacebookF className="mx-4" />
          <FaTwitter className="mx-4" />
          <FaGoodreadsG className="mx-4" />
          <FaInstagram className="mx-4" />
        </div>
        <div  onClick={handleNav}  className="sm:hidden z-10">
          <FaBars size={30} className="mr-4 cursor-pointer" />
        </div>
        {/* Mobile Menu */}
        <div
         onClick={handleNav}
          className={
           nav?
           
           "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/100 px-4 py-7 flex flex-col" 
           
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
          }
        >
          <ul className="h-full w-full text-center pt-18">
             <li className="text-2xl py-4">
             <NavLink as={NavLink}  to="/">Home</NavLink>
            </li>
            <li className="text-2xl py-4">
            <NavLink  as={NavLink}  to="/about">AboutUS</NavLink>
            </li>
            <li className="text-2xl py-4">
            <NavLink as={NavLink}  to="/service">Service</NavLink>
            </li>
            {/* <li className="text-2xl py-4">
            <NavLink as={NavLink}  to="/dashboard">Dashboard</NavLink>
            </li> */}
            
            <li className="text-2xl py-3">
            <NavLink as={NavLink}  to="/contact">Contact</NavLink>
            </li> 
            <li className="text-2xl py-3" >
          {!user?.email && (
                <NavLink
                  as={NavLink}
                  className=" text-light flex justify-between "
                  to="/sign  "
                >
                  SignIn <IoLogInSharp className="mx-2" size="20" />
                  
                </NavLink>
              )}
        {user?.email && (
                <NavLink
                  onClick={logout}
                  className="flex justify-between "
                  to="/sign  "
                  as={NavLink}
                >
                  SignOut
                   <IoLogInSharp className="mx-2" size="20" />
                  <span>
                    {user?.photoURL ? (
                      <img className=" w-9 h-9 rounded-full " src={user.photoURL} alt="" />
                    ) : (
                      <small className="text-light ">
                        {user?.displayName}
                      </small>
                    )}
                  </span>
                </NavLink>
              )}
          </li> 
            {/* <li className="text-2xl py-4">
            {!user?.email && (
                <NavLink
                  as={NavLink}
                  className=" text-light flex justify-between "
                  to="/sign  "
                >
                  SignIn <IoLogInSharp className="mx-2" size="20" />
                </NavLink>
              )}
        {user?.email && (
                <NavLink
                  onClick={logout}
                  className="flex justify-between "
                  to="/sign  "
                  as={NavLink}
                >
                  SignOut <IoLogInSharp className="mx-2" size="20" />
                  <span>
                    {user?.photoURL ? (
                      <img className=" w-8 h-8 " src={user.photoURL} alt="" />
                    ) : (
                      <small className="text-light ms-3">
                        {user?.displayName}
                      </small>
                    )}
                  </span>
                </NavLink>
              )}
            </li>  */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;



