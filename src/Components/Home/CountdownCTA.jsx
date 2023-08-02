import React from 'react'
import {motion} from 'framer-motion'
import Countdown from '../Countdown/Countdown'


const variants = {
  hidden: { y:35, opacity: 0 },
  visible: { y:0, opacity: 1 },
}

function CountdownCTA() {
  return (
    
    <div className='flex flex-col gap-[2rem] justify-center items-center bg-primary p-[7rem]'>
        <div>
            <motion.h1 variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}} className='text-white sm:text-[3rem] text-[2rem] text-center font-bold font-space-mono tracking-[0.2rem]'><span className='text-accent drop-shadow-[0.3px_1px_0px_#ffffff]'>Extravaganza</span> <span className='drop-shadow-[0.3px_1px_0px_#000000]'>begins in</span></motion.h1>
            {/* <h1 className='text-white text-[3rem] font-bold font-space-mono tracking-[0.2rem]'>Unveiling Grandeur in</h1> */}
        </div>
        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{duration:0.6}}>
          <Countdown />
        </motion.div>
    </div>
  )
}

export default CountdownCTA