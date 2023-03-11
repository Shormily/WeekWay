import React from "react";
import { Fade, Zoom } from "react-reveal";
import BICard from "../BICard/BICard";
import pic2 from "../Image/pic2.jpg";
import re1 from "../Image/re1.jpg";
import img3 from "../Image/img3.jpg";
import img4 from "../Image/img4.jpg";
import re from "../Image/re.jpg";
import BusinessInnovationCard from "./BusinessInnovationCard";

const BusinessInnovation = () => {
  const data = [
    {
      _id: 1,
      date: "AUG 04, 2018",
      topic: "MATERIAL ENGINEERING",
      title: "Commercial Ministry to Hike Import Duty on Aluminium",
      des: "The commerce ministry is in favour of hiking import duty on aluminium…",
      img: pic2,
    },
    {
      _id: 2,
      date: "AUG 04, 2018",
      topic: "POWER AND ENERGY",
      title: "Steels’ Safety: India Appeals Against WTO’s Panel Ruling",
      des: "New Delhi: India has challenged the WTO dispute panel's ruling that …",
      img: re1,
    },
  ];
  const data2 = [
    {
      _id: 1,
      date: "AUG 04, 2018",
      title: "Commercial Ministry to Hike Import Duty on Aluminium",
      img: pic2,
    },
    {
      _id: 2,
      date: "AUG 04, 2018",
      title: "Steels’ Safety: India Appeals Against WTO’s Panel Ruling",
      img: re,
    },
    {
      _id: 3,
      date: "AUG 04, 2018",
      title: "Default Interest Rate in Small Loans Now is Lowest",
      img: img3,
    },
    {
      _id: 4,
      date: "AUG 04, 2018",
      title: "Why Trump is so clumsy about fighting for ‘Free Trade’",
      img: img4,
    },
    
  ];
  return (
    <div className="py-20 my-14 max-w-[1800px] m-auto w-full " id="innovations">
      <Fade down>
        <h2 className="text-4xl font-bold text-center">
          360° Business <span className="text-[#D0011C]">Innovation.</span>
        </h2>
      </Fade>
      <Fade left>
        <p className="text-[#878787] lg:mx-40 mx-5 text-center my-5 text-xl">
          It is imperative that everyone follows the policies and guidelines to
          ensure their own <br /> safety and the safety of others around them.
        </p>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:ml-20 mx-5">
          {data.map((d) => (
            <div className="py-10">
              <Zoom>
                <BusinessInnovationCard key={d._id} d={d} />
              </Zoom>
            </div>
          ))}
        </div>
        <div>
          {data2.map((d2) => (
            <Fade right>
              <BICard key={d2._id} d2={d2} />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessInnovation;