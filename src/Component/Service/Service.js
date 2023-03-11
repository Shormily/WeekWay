import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Service = () => {
    const [travel,settravel] = useState([]);
    
    useEffect(() =>{
        fetch('./travel.JSON')
        .then(res => res.json())
        .then(data => settravel(data));

    },[])
    return (
        <>
         <h1 className="text-center mt-16 text-4xl text-violet-700 font-semibold">Our Service</h1>
           <div className="max-w-[1450px] m-auto w-full px-4 py-8 ">
        <div className="grid lg:grid-cols-8  md:grid-cols-2 grid-cols-1 gap-4 sm:items-center">
        {
                    travel.map( travels =><Product travels={travels} ></Product>
                   
                    )
                } 

        </div>
         </div>
              
              
            
        </>
    );
};

export default Service;