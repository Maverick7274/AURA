import Breadcrumbs from '../../Breadcrumbs'
import {motion} from 'framer-motion'
import VideoPlayer from '../../VideoPlayer'
import Day2VideosData from '../../../Data/Day2VideosData'


function Day2Videos() {

  const variants = {
    hidden: { y:135, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

  return (
    <div className='py-[5rem] px-[2rem]'>
        <div>
          <div className='mt-[2rem]'>
          <Breadcrumbs link1="/AURA-website/AURA2022Days" link2="/AURA-website/Highlights2022Day2" currentLink="/AURA-website/Day2Videos" link1Name="Days" link2Name="Day 2" currentLinkName="Day 2 - Videos"/>
          </div>
            <div>
            <motion.h2 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[3rem] text-[1.9rem] sm:text-left text-center font-space-grotesk font-[700]'>
                Day 2 - Videos
            </motion.h2>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center my-[2rem] gap-[2rem]'>
            {Day2VideosData.map((item) => {
                return (
                    <>
                    <div className=''>
                        <VideoPlayer videoURI={item.videoURI} thumbnail={item.thumbnail} title={item.title}/>
                    </div>
                    </>
                )
                })}
            </div>
      </div>
    </div>
  )
}

export default Day2Videos