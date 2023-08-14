import FashionShowPhotos from '../../../Data/FashionShowPhotos'
import Breadcrumbs from '../../Breadcrumbs'
import {motion} from 'framer-motion'
import BlurHashImages from '../../BlurHashImages'
import FashionShowVideos from '../../../Data/FashionShowVideos'
import VideoPlayer from '../../VideoPlayer'
import CountdownCondensed from '../../Countdown/CountdownCondensed'


function FashionShow() {
    const variants = {
        hidden: { y:135, opacity: 0 },
        visible: { y:0, opacity: 1 },
      }
    
  return (
    <div className='py-[5rem] px-[2rem]'>
        <div className='mt-[2rem]'>
        <Breadcrumbs link1="/AURA-website/PastYearEvents" link2="/AURA-website/Highlights2022Day1" currentLink="/AURA-website/FashionShow" link1Name="Past Year Events" link2Name="Days" currentLinkName="Fashion Show"/>
            <div>
            <motion.h2 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[3rem] text-[1.9rem] sm:text-left text-center font-space-grotesk font-[700]'>
                Fashion Show
            </motion.h2>
            </div>
            <div>
                <motion.h3 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[2rem] text-[1.7rem] sm:text-left text-center font-space-mono text-left font-[500]'>
                Photos
                </motion.h3>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center my-[2rem] gap-[2rem]'>
            {FashionShowPhotos.map((item) => {
                return (
                    <>
                    <div className=''>
                        <BlurHashImages hash={item.hash} src={item.photoURI} width={item.width} height={item.height} />
                    </div>
                    </>
                )
                })}
            </div>
            <div>
            <motion.h3 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[2rem] text-[1.7rem] sm:text-left text-center font-space-mono font-[500]'>
                Videos
            </motion.h3>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center my-[2rem] gap-[2rem]'>
            {FashionShowVideos.map((item) => {
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
      {/* <div className='sticky m-[2rem] bottom-15 right-0 bg-accent rounded p-[0.9rem] text-white'>
        <CountdownCondensed />
      </div> */}
    </div>
  )
}

export default FashionShow