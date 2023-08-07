// import ImageSlider from '../ImageSlider/ImageSlider.jsx'
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import Faqs from '../Accordion/Faqs';
import AboutFest from '../About/AboutFest';
import PastEvents from '../PastEvents/PastEvents';
import {motion} from 'framer-motion'
import Venue from '../Venue/Venue';
import Countdown from '../Countdown/Countdown';
import CountdownCTA from './CountdownCTA';
import Timeline from '../Timeline';
import Tabs from '../Tabs';

import tabData from './timeline';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const variants = {
    hidden: { y:35, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

  console.log(tabData[0].content)



  const [tabContent, setTabContent] = useState(tabData)


  return (
    <>
        <div className='hero h-screen mb-[7rem]'>
          <div className='h-full w-full'>
            <video src="https://res.cloudinary.com/djqnbowat/video/upload/v1686743623/assets/videos/HeroMontagePC_qk6sx5.mp4" className='object-cover w-full h-full' autoPlay loop muted />
          </div>
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='absolute w-full h-full flex flex-col justify-center items-center z-[100] text-center text-white'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <motion.h1 variants={variants} initial='hidden' animate='visible' transition={{duration:0.6}} className='mb-5 pt-[5rem] px-[3rem] min-[280px]:text-[2rem] sm:text-[4rem] text-[3rem] font-bold font-rubik text-center'>Welcome to <span className='font-josefin-sans font-bold'>AURA FEST 2023</span>!</motion.h1>
              <motion.h2 variants={variants} initial='hidden' animate='visible' transition={{delay:0.3, duration:0.6}} className='mb-5 min-[280px]:text-[1rem] sm:text-[3.5rem] text-[1.7rem] text-center font-space-grotesk'>Unleash Your Passion, Embrace the Extraordinary!</motion.h2>
              <motion.p variants={variants} initial='hidden' animate='visible' transition={{delay:0.3, duration:0.5}} className='flex justify-center font-patua-one sm:flex hidden'>
                Are you ready to seize the spotlight and let your brilliance shine through!?
              </motion.p>
              <motion.div className='pt-[2rem]' variants={variants} initial='hidden' animate='visible' transition={{duration:0.6}}>
                <Countdown />
                <div className='sm:text-l text-xl pt-[1rem] font-space-mono tracking-widest'>
                  Until the main event!
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className='pt-[8rem]'>
          <AboutFest />
        </div>

        <div className='py-[5rem]'>
          <CountdownCTA />
        </div>

        <Tabs tabContent={tabContent} setTabContent={setTabContent} />

        <div className='pt-[4.3rem]'>
          <Venue />
        </div>

        <div>
          <PastEvents />
        </div>

        <div className='h-screen my-[4rem] sm:mx-[10rem] mx-[1rem]'>
          <Faqs />
        </div>

        {/* <div className='pt-[4.3rem]'>
          <ImageSlider />
        </div> */}
    </>
  )
}

export default Home