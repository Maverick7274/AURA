/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { Link } from 'react-router-dom'
import VideoPlayer from '../VideoPlayer'

function AboutFest() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      

    const variants = {
        hidden: { y:135, opacity: 0 },
        visible: { y:0, opacity: 1 },
      }
  return (
    <div id='aboutfest' className='flex flex-col justify-center items-center sm:gap-[5rem] gap-[3rem] pb-[3rem] sm:px-[5rem] px-[3rem]'>
        <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">About <span className='font-josefin-sans font-bold'>AURA</span></motion.h1>
        <div className='flex justify-center items-center sm:flex-col xl:flex-row 2xl:flex-row flex-col sm:gap-[2rem] xl:gap-0 gap-[2rem]'>
            <motion.div variants={variants} initial='hidden' whileInView='visible' className='flex justify-center items-center'>
                <VideoPlayer videoURI="https://res.cloudinary.com/djqnbowat/video/upload/v1692314097/AURA_FEST_TEASER_a6pfva.mp4" thumbnail="https://res.cloudinary.com/djqnbowat/image/upload/v1692314572/teaser-thumbnail_vz5zgm.png"/>
            </motion.div>
            <motion.div variants={variants} initial='hidden' whileInView='visible' className='flex flex-col font-space-grotesk max-[280px]:text-[1.1rem] text-[0.9rem] sm:text-[1.2rem] gap-[1.2rem] text-justify sm:px-[2rem] px-0'>
                <p>
                    Welcome to AURA Fest 2023! Unleash Your Passion, Embrace the Extraordinary! AURA is back, bigger, better, and bolder than ever! Join us for an electrifying celebration of talent, creativity, and excitement.
                </p>
                <p className='hidden sm:block'>
                    Ignite your inner fire and showcase your skills in captivating events and competitions tailored for every interest. Experience breathtaking performances by renowned artists, immerse yourself in workshops led by industry experts, and test your mettle in adrenaline-pumping competitions. Connect, collaborate, and celebrate with like-minded individuals, forming lasting friendships and building connections. 
                </p>
            </motion.div>
        </div>
        <motion.div variants={variants} initial='hidden' whileInView='visible' className='grid justify-end'>
            <Link to='/about' className='btn btn-outline btn-secondary w-[10rem]'>
                Learn More
            </Link>
        </motion.div>
        {/* <div className='sticky m-[2rem] bottom-0 right-0 bg-accent rounded p-[0.9rem] text-white'>
        <CountdownCondensed />
      </div> */}
    </div>
  )
}

export default AboutFest