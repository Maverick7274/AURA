import FelicitationPhotos from '../../../Data/FelicitationPhotos'
import FelicitationVideos from '../../../Data/FelicitationVideos'
import Breadcrumbs from '../../Breadcrumbs'
import {motion} from 'framer-motion'
import BlurHashImages from '../../BlurHashImages'
import VideoPlayer from '../../VideoPlayer'


function Felicitation() {

    const variants = {
        hidden: { y:135, opacity: 0 },
        visible: { y:0, opacity: 1 },
        }
        
  return (
    <div className='py-[5rem] px-[2rem]'>
        <div>
        <Breadcrumbs link1="/PastYearEvents" link2="/Highlights2022" currentLink="/Felicitation" link1Name="Past Events" link2Name="AURA 2022" currentLinkName="Felicitation"/>
            <div>
                <motion.h2 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[3rem] text-[1.9rem] sm:text-left text-center font-space-grotesk font-[700]'>
                Felicitation
                </motion.h2>
            </div>
            <div>
            <motion.h3 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[2rem] text-[1.7rem] sm:text-left text-center font-space-mono font-[500]'>
                Photos
            </motion.h3>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center my-[2rem] gap-[2rem]'>
            {FelicitationPhotos.map((item) => {
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
            {FelicitationVideos.map((item) => {
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

export default Felicitation