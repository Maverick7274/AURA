import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sponserData from "./SponserData";


function OurSponsors() {

    const [tabContent, setTabContent] = useState(sponserData);

    console.log(tabContent)

  const variants = {
    hidden: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hidden1: { y: -35, opacity: 0 },
    visible1: { y: 0, opacity: 1 },
  };

  function ScrollTop() {
    window.scrollTo(0, 0);
  }

  const logos = ["item1", "item2", "item3", "item4", "item5"];

  const [currentID, setCurrentID] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentID((currentID) => (currentID + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [logos.length]);


  return (
    <div>
      <div className="h-auto">
        <div className="sm:hero sm:mt-[0] mt-[7rem] h-[60vh]">
          <div className="flex flex-col justify-center items-center">
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

            {/* <Tabs tabContent={tabContent} setTabContent={setTabContent} visibility="hidden" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSponsors;
