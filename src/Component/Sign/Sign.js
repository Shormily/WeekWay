import React from 'react';
import {  useState } from "react"
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail} from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import useFirebase from '../Hook/useFirebase';
import Swal from 'sweetalert2';
import sign from "../Image/sign.png";
const Sign = () => {
  const {signInUsingGoogle,createNewUserByEmail} = useFirebase();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [isLogin,setIsLogin] = useState(false)



  const navigate = useNavigate();
  const location = useLocation();

  const hanldeGoogleLogin = () => {
    signInUsingGoogle(location,navigate)
      
     
  };



  
const auth = getAuth()

  const handleRegister = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('password must be at least 6 characters long.')
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
setError('Password Must contain 2 upper case');
return;
    }
    if(isLogin){
      processLogin(email,password);
    }
    else{
      registerNewUser(email,password);
    }
    
  }
  const processLogin = (email,password) =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((result) => {
     
      const distination = location?.state?.from || '/about';
      console.log( distination);
      navigate(distination);

      Swal.fire(
        'Successfully Sign In!',
        'welcome to our Medical Clinic',
        'success'
      )
    })
    .catch((error) => {
      setError(error.message);
    });
  }

    const registerNewUser = (email,password)=>{
      createUserWithEmailAndPassword(auth, email, password)
      .then(result=>{
          const user =result.user;
          createNewUserByEmail()
          console.log(user)
          setError('Successfully Sign In!!Now Go To Another Page');
          verifyEmail();
      })
      .catch(error =>{
        setError("already use this email")
      })
     
    }
    const handleResetPassword = () =>{
      sendPasswordResetEmail(auth,email)
      .then(result =>{

      })
    }
    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(result =>{
        console.log(result);
      })
    }
    
    const toggleLogin = e =>{
      setIsLogin(e.target.checked)
    }
    
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    
  } 
    return (
        <>
           
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
  <div className="bg-[#fff] pb-18 p-14">
      <div className=" max-w-[1200px] m-auto w-full  ">
        <div className="container ">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 ">
       
            <div className=" text-black text-3xl mb-3 ">
            
            <img className="h-full w-full " src={sign} alt="" />
             
            
            </div>

            <div className="w=2/4 py-16 px-12  ">
              {/* <h2 className="text-3xl mb-4">Register</h2> */}
              <h1 className=" mt-16 text-4xl text-violet-700 font-semibold">{isLogin ? "Log In" : "Register Now"}</h1>
              <from action="#" >
                <div className=" gap-5 ">
                <input
                className="mt-5 mb-3 p-3   w-full shadow"
                placeholder="name"
                type="text"
              />
                <input
                className="mt-5 mb-3 p-3   w-full shadow"
                placeholder="E-mail"
                type="text"
                onChange={handleEmailChange} 
              />
                  <input
                className="mt-5 mb-3 p-3  w-full shadow"
                placeholder="password"
                type="text"
                onChange={handlePasswordChange}
              />
                  
                </div>
                
              
               
                <div className="">
                  <input
                    type="checkbox"
                    className="border border-gray-400 py-5 rounded-md mt-2 mb-2"
                    onChange={toggleLogin}
                  />
                  <span > Already You have Account? Please Log In.!!</span>
                </div>
                
                <div className="mt-2">
                  <button className="w-full  bg-gradient-to-r from-violet-700 to-blue-400 p-2 text-white rounded-md">
                  {isLogin ? "Log In" : "Register Now"}
                  </button>
                </div>
                <div className="mt-2">
                  <button className="w-full  bg-gradient-to-r from-violet-700 to-blue-400 p-2 text-white rounded-md"  onClick={hanldeGoogleLogin}>
                    Sign In Google
                  </button>
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
 
        </>
    );
};

export default Sign;