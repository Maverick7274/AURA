import React from 'react'
import { motion } from 'framer-motion'

const Timeline = ({timelineData}) => {

    const variants = {
        hidden: { y:35, opacity: 0 },
        visible: { y:0, opacity: 1 },
        hidden1 : {y:-35, opacity:0},
        visible1 : {y:0, opacity:1}
      }

  return (
    // <!-- component -->
        <div className="container">
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            { timelineData.map((item, index) => {
            // console.log(`${item.title} ${item.content} ${item.isLeft}`),
            return (
            <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className={`flex md:contents ${item.isLeft ? "flex-row-reverse" : ""}`} key={index}>
                {
                    item.isLeft ? "" : 
                    <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className="h-full w-6 flex items-center justify-center">
                            <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className="h-full w-1 bg-secondary pointer-events-none"></motion.div>
                        </motion.div>
                        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></motion.div>
                    </motion.div>    
                }

                <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className={item.isLeft ? "bg-accent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md" : "bg-accent col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"}>
                    <h3 className="font-semibold text-l g mb-1">{item.title}</h3>
                    <p className="leading-tight text-justify">
                        {item.content}
                    </p>
                </motion.div>

                {
                    item.isLeft ? <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className="h-full w-6 flex items-center justify-center">
                        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className="h-full w-1 bg-secondary pointer-events-none"></motion.div>
                    </motion.div>
                        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></motion.div>
                    </motion.div> : ""
                }
              
            </motion.div>
            )
            })}
            {/* <!-- right --> */}
            {/* <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"
                ></div>
              </div>
              <div
                className="bg-accent col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div> */}
          </div>
        </div>
  )
}

export default Timeline