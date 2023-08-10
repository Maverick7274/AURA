import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import CountdownCondensed from "../Countdown/CountdownCondensed";
import SponsorCTA from "./SponsorCTA";

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const variants = {
    hidden: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hidden1: { y: -35, opacity: 0 },
    visible1: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="h-auto">
        <div className="sm:hero sm:mt-[0] mt-[7rem] h-screen">
          <div
            className="flex flex-col justify-center items-center"
          >
            <div className="">
              <motion.h1
                variants={variants}
                initial="hidden"
                animate="visible"
                className="py-[1rem] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik"
              >
                Our Sponsors
              </motion.h1>
            </div>

            <div className="carousel w-1/2">
              <div id="item1" className="carousel-item py-5 w-full">
                <div className="carousel-card flex flex-col justify-center items-center">
                  <h1 className="py-[1rem] text-center min-[100px]:text-[2rem] sm:text-[2rem] text-[2rem] font-bold font-rubik">
                    Company 1
                  </h1>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum non blanditiis sequi voluptatum. Consequuntur nesciunt
                    rerum sit reiciendis repudiandae dolores?
                  </p>
                </div>
              </div>
              <div id="item2" className="carousel-item py-5 w-full">
                <div className="carousel-card">
                  <h1 className="py-[1rem] text-center min-[100px]:text-[2rem] sm:text-[2rem] text-[2rem] font-bold font-rubik">
                    Company 2
                  </h1>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum non blanditiis sequi voluptatum. Consequuntur nesciunt
                    rerum sit reiciendis repudiandae dolores?
                  </p>
                </div>
              </div>
              <div id="item3" className="carousel-item py-5 w-full">
                <div className="carousel-card">
                  <h1 className="py-[1rem] text-center min-[100px]:text-[2rem] sm:text-[2rem] text-[2rem] font-bold font-rubik">
                    Company 3
                  </h1>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum non blanditiis sequi voluptatum. Consequuntur nesciunt
                    rerum sit reiciendis repudiandae dolores?
                  </p>
                </div>
              </div>
              <div id="item4" className="carousel-item py-5 w-full">
                <div className="carousel-card">
                  <h1 className="py-[1rem] text-center min-[100px]:text-[2rem] sm:text-[2rem] text-[2rem] font-bold font-rubik">
                    Company 4
                  </h1>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum non blanditiis sequi voluptatum. Consequuntur nesciunt
                    rerum sit reiciendis repudiandae dolores?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
              <a href="#item4" className="btn btn-xs">
                4
              </a>
            </div>
          </div>


          <div id="vision" className="h-screen flex flex-col justify-center items-center">
          <div className="pt-[45rem]">
            <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Previous Sponsers</motion.h1>
          </div>

          <div class="relative flex overflow-x-hidden">
            <div class="py-12 animate-marquee whitespace-nowrap">
              <span class="text-4xl mx-4">Marquee Item 1</span>
              <span class="text-4xl mx-4">Marquee Item 2</span>
              <span class="text-4xl mx-4">Marquee Item 3</span>
              <span class="text-4xl mx-4">Marquee Item 4</span>
              <span class="text-4xl mx-4">Marquee Item 5</span>
            </div>

            <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
              <span class="text-4xl mx-4">Marquee Item 1</span>
              <span class="text-4xl mx-4">Marquee Item 2</span>
              <span class="text-4xl mx-4">Marquee Item 3</span>
              <span class="text-4xl mx-4">Marquee Item 4</span>
              <span class="text-4xl mx-4">Marquee Item 5</span>
            </div>
          </div>


          </div>


        </div>
      </div>

      <div>
        <SponsorCTA />
      </div>

      <div className="fixed m-[2rem] bottom-0 right-0 bg-accent rounded p-[0.9rem] text-white">
        <CountdownCondensed />
      </div>
    </>
  );
};

export default Sponsors;
