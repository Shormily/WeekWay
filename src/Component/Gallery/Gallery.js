import React from "react";
import pic1 from "../Image/pic1.jpg";
import pic2 from "../Image/pic2.jpg";
import pic3 from "../Image/pic3.jpg";
import pic4 from "../Image/pic4.jpg";
import pic from "../Image/pic.jpg";
import so from "../Image/so.png";
import so1 from "../Image/so1.png";
import so2 from "../Image/so2.png";
import user1 from "../Image/user1.jpg";
import user2 from "../Image/user2.jpg";
import img2 from "../Image/img2.jpg";
import img3 from "../Image/img3.jpg";
import img4 from "../Image/img4.jpg";
import m5 from "../Image/m5.jpg";
import m4 from "../Image/m4.jpg";
import m3 from "../Image/m3.jpg";
import m2 from "../Image/m2.jpg";
import m1 from "../Image/m1.jpg";
import "./Gallery.css";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BusinessInnovation from "../BusinessInnovation/BusinessInnovation";

const Gallery = () => {
  return (
    <>
    <BusinessInnovation/>
     
    <h1 className="text-5xl font-bold text-center pb-20">
        Testimonials
        </h1>
      <div className="max-w-[1200px] m-auto w-full px-4 py-8 p-5 pb-20">
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          modules={[Grid, Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            580: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            440: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            460: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            420: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            415: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            410: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            409: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            389: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            377: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            426: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            430: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
         <SwiperSlide>
          <div
        class="block rounded-lg bg-white shadow-lg dark:bg-danger-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#8D1C2F]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-danger-800 dark:bg-danger-800">
          <img
            src={so} 
            alt=""/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p class="mt-4">
           
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
          </SwiperSlide>
         <SwiperSlide>
          <div
        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
          <img
            src={so1} 
            alt=""/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p class="mt-4">
           
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
          </SwiperSlide>
         <SwiperSlide>
          <div
        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#6590D5]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
          <img
            src={so2} 
            alt=""/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p class="mt-4">
           
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
          </SwiperSlide>
         <SwiperSlide>
          <div
        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 mb-3 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
        <div
          class="mx-auto mb-3 -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
          <img
            src={user1} 
            alt=""/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p class="mt-4">
           
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
          </SwiperSlide>
         <SwiperSlide>
          <div
        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#F7E4BE]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden mb-3 rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
          <img
            src={user2} 
            alt=""/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p class="mt-4">
           
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
          </SwiperSlide>
         <SwiperSlide>
          <div
        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
          <img
            src={so2} 
            alt=""/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p class="mt-4">
           
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
          </SwiperSlide>
         <SwiperSlide>
          <div
        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
          <img
            src={so2} 
            alt=""/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p class="mt-4">
           
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
          </SwiperSlide>
         <SwiperSlide>
          <div
        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
          <img
            src={so2} 
            alt=""/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p class="mt-4">
           
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
          </SwiperSlide>
         <SwiperSlide>
          <div
        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
          <img
            src={so2} 
            alt=""/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p class="mt-4">
           
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
          </SwiperSlide>
        </Swiper>
      </div>

      
      {/* <div className="max-w-[1140px] m-auto w-full px-4 py-8">
        <div className="grid lg:grid-cols-4 sm-grid-cols-2 gap-4">
          <div className="sm:col-span-2 col-span-6 row-span-2">
            <img
              className="w-full h-full object-cover border-4 border-bg-gray-900 shadow-lg"
              src={pic}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover border-4 border-bg-gray-900 shadow-lg"
              src={pic1}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover border-4 border-bg-gray-900 shadow-lg"
              src={pic3}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover border-4 border-bg-gray-900 shadow-lg"
              src={pic4}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover border-4 border-bg-gray-900 shadow-lg"
              src={pic2}
              alt=""
            />
          </div>
        </div>
      </div> */}
     
    </>
  );
};

export default Gallery;
