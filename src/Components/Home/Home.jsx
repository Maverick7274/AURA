// import ImageSlider from '../ImageSlider/ImageSlider.jsx'
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import Faqs from '../Accordion/Faqs';
import AboutFest from '../About/AboutFest';
import PastEvents from '../PastEvents/PastEvents';
import Venue from '../Venue/Venue';
import CountdownCTA from './CountdownCTA';
import Tabs from '../Tabs';
import {motion} from 'framer-motion';
import {tabData, scheduleData} from './timeline';
import Hero from './Hero';
import SocialCTA from '../SocialCTA/SocialCTA';
import Timeline from '../Timeline';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const [tabContent, setTabContent] = useState(tabData)

  const variants = {
    hidden: { y:135, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }


  return (
    <>
      <div>
        <Hero />
      </div>

      <div className='pt-[5rem]'>
        <SocialCTA />
      </div>

        <div className='pt-[8rem]'>
          <AboutFest />
        </div>

        <div className='py-[5rem]'>
          <CountdownCTA />
        </div>

        <div className='flex flex-col justify-center items-center text-center sm:px-[0] px-[2rem] pt-[5rem]'>
          <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Schedule</motion.h1>
          {/* <motion.p variants={variants} initial='hidden' whileInView='visible' className='font-space-grotesk max-[280px]:text-[1.1rem] text-[0.9rem] sm:text-[2rem]'>Will be declared 7 days prior to the event. Stay updated with our <a target='blank' href='https://www.instagram.com/aurafest.live/' className='link link-accent'>Instagram</a></motion.p> */}
        </div>

        <Timeline timelineData={scheduleData}/>

        {/* <Tabs tabContent={tabContent} setTabContent={setTabContent} visibility="visible" /> */}

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