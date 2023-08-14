import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import mouseScrollDown from "../../assets/mouseScrollDown.svg";
import CountdownCondensed from "../Countdown/CountdownCondensed";

const Contact = () => {
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
      <div className="h-auto w-full">
        <div className="hero h-screen w-full">
          <div
            id="contact"
            className="flex flex-col justify-center items-center w-full"
          >
            <div className="w-full">
              <motion.h1
                variants={variants}
                initial="hidden"
                animate="visible"
                className="py-[1rem] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik"
              >
                Contact Us
              </motion.h1>
            </div>

            <form
              action="#"
              className="w-[50%]"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Name here"
                    className="input input-bordered input-info w-full"
                  />

                  <label className="label">
                    <span className="label-text">
                      What is your Phone Number?
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Phone Number here"
                    className="input input-bordered input-info w-full"
                  />

                  <label className="label">
                    <span className="label-text">What is your E-Mail I.D.?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your E-Mail I.D. here"
                    className="input input-bordered input-info w-full"
                  />

                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-secondary textarea-bordered h-24"
                    placeholder="Enter Your Message here"
                  ></textarea>

                  <button className="my-5 btn btn-info">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sticky m-[2rem] bottom-15 right-0 bg-accent rounded p-[0.9rem] text-white">
        <CountdownCondensed />
      </div>
    </>
  );
};

export default Contact;
