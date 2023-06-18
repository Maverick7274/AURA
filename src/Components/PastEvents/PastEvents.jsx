/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import HighLightPhotos from '../../Data/HighLights'
import BlurHashImages from '../BlurHashImages'

function PastEvents() {

    const variants = {
        hidden: { y:35, opacity: 0 },
        visible: { y:0, opacity: 1 },
      }
    
  return (
    <div id='pastevents' className=' min-[280px]:pb-[1rem] pb-[4rem] sm:px-[5rem] px-[3rem]'>
        <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Past Events</motion.h1>
        <motion.div variants={variants} initial='hidden' whileInView='visible' className=''>
            <div className='flex flex-col font-space-grotesk min-[280px]:text-[1.1rem] text-[0.9rem] sm:text-[1.2rem] text-justify sm:px-[2rem] px-[0.9rem]'>
                <p>
                Reflecting on the past year's college fest, we are filled with an overwhelming sense of joy, inspiration, and camaraderie. It was a whirlwind of excitement and unforgettable moments that brought our campus alive.
                </p>
                <p className='sm:block hidden'>
                From captivating performances that left us in awe to the intense competitions that pushed boundaries, it was a true celebration of talent and creativity. The workshops and interactive sessions empowered us to unlock our potential and broaden our horizons. But most importantly, it was the connections we formed, the friendships we made, and the collective spirit that made the fest truly exceptional.
                </p>
            </div>
            <motion.div variants={variants} initial='hidden' whileInView='visible' className='flex justify-center items-center py-[2rem]'>
                <div className="carousel w-[1280px] group">
                    <div id="slide1" className="carousel-item relative w-full">
                        {/* {
                            HighLightPhotos.map((photo) => (
                                <BlurHashImages key={photo.id} image={photo.image} hash={photo.hash} width={photo.width} height={photo.height} />
                            ))

                        } */}
                        <BlurHashImages src={HighLightPhotos[0].image} hash={HighLightPhotos[0].hash} width={HighLightPhotos[0].width} height={HighLightPhotos[0].height} alt="" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn hidden group-hover:flex btn-circle">❮</a> 
                        <a href="#slide2" className="btn hidden group-hover:flex btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <BlurHashImages src={HighLightPhotos[1].image} hash={HighLightPhotos[0].hash} width={HighLightPhotos[0].width} height={HighLightPhotos[0].height} alt="" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn hidden group-hover:flex btn-circle">❮</a> 
                        <a href="#slide3" className="btn hidden group-hover:flex btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                            <BlurHashImages src={HighLightPhotos[2].image} hash={HighLightPhotos[0].hash} width={HighLightPhotos[0].width} height={HighLightPhotos[0].height} alt="" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn hidden group-hover:flex btn-circle">❮</a> 
                        <a href="#slide4" className="btn hidden group-hover:flex btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                            <BlurHashImages src={HighLightPhotos[3].image} hash={HighLightPhotos[0].hash} width={HighLightPhotos[0].width} height={HighLightPhotos[0].height} alt="" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn hidden group-hover:flex btn-circle">❮</a> 
                        <a href="#slide1" className="btn hidden group-hover:flex btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={variants} initial='hidden' whileInView='visible' className='grid justify-center'>
                <Link to='/AURA-website/PastYearEvents' className='btn btn-outline btn-primary w-[15rem]'>
                    View More Highlights
                </Link>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default PastEvents