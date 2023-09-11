import { motion } from "framer-motion";
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


        <div>
            <Table />
        </div>

    </div>
  );
}

export default Events;
