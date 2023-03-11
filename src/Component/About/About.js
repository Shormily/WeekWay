import React from "react";
import imo from "../Image/imo.jpg";
import so from "../Image/so.png";
import so2 from "../Image/so2.png";
import so1 from "../Image/so1.png";
import BusinessInnovation from "../BusinessInnovation/BusinessInnovation";
import Strategies from "../Strategies/Strategies.js";

const About = () => {
  return (
    <>
      <BusinessInnovation />
      <Strategies />

      <section class="text-neutral-700 dark:text-neutral-300 max-w-[1140px] m-auto w-full ">
        <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 class="mb-6 text-3xl font-bold">Testimonials</h3>
          <p class="mb-6 pb-2 md:mb-12 md:pb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>

        <div class="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={so} alt="" />
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
          </div>
          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 ">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={so2} alt="" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                <hr />
                <p class="mt-4">
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={so1} alt="" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">John Smith</h4>
                <hr />
                <p class="mt-4">
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
