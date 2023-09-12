import React from 'react'
import { useParams } from 'react-router-dom'
import JsxParser from 'react-jsx-parser'
import { motion } from 'framer-motion'
import eventData from './EventData'

const EventPage = () => {

    const { eventName } = useParams();

    const variants = {
      hidden: { y:135, opacity: 0 },
      visible: { y:0, opacity: 1 },
    }

  return (
    
    <div className="mt-[10em]">

      <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] min-[280px]:text-[1.7rem] text-center sm:text-[4rem] text-[2rem] font-bold font-rubik"><span className='font-josefin-sans font-bold'>{eventData[eventName].title}</span></motion.h1>

      <div className="flex justify-evenly items-center flex-wrap mt-[5em]">
        
        { eventData[eventName].imgs.map((img, index) => {
          return(
            <img src={img} alt="" key={index} className='h-[40vw] w-[30vw]' />
          )
        })}

      </div>

      <div className="">

        <JsxParser
          components={eventData}
          jsx={eventData[eventName].desc} 
        />
      </div>


    </div>

  )
}

export default EventPage




