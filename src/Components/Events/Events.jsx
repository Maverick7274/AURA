import { motion } from "framer-motion";
import ButtonComponent from "../ButtonComponent";
import Table from "./Table";

function Events() {
  const variants = {
    hidden: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="h-screen flex flex-col gap-[2rem] sm:mt-[5rem] mt-[10rem]">
      <div className="flex justify-center items-center">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="min-[280px]:text-[1.5rem] sm:text-[4rem] text-[1.2rem] font-bold font-rubik"
        >
          Events
        </motion.h1>

        

    </div>


    <div className='h-auto flex flex-col justify-center items-center gap-[5rem]'>

        <div className='flex flex-wrap justify-center items-center gap-[3rem] sm:flex-row md:flex-col xl:flex-row'>
          <ButtonComponent cover="https://res.cloudinary.com/dvxizqvwp/image/upload/v1694464456/ideathonPoster.jpg" link="/event/ideathon" Heading='Ideathon 2023'/>
          <ButtonComponent cover="https://res.cloudinary.com/dvxizqvwp/image/upload/v1694464455/circuit-a-thon.jpg" link="/event/circuit-a-thon" Heading='Circuit-A-Thon'/>
          <ButtonComponent cover="https://res.cloudinary.com/dvxizqvwp/image/upload/v1694468657/codathon.jpg" link="/event/codathon" Heading='Codathon 2.0'/>
        </div>

    </div>


        <div>
            {/* <Table /> */}
        </div>

    </div>
  );
}

export default Events;