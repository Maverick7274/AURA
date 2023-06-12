import CelebrityNightPhotos from '../../Data/CelebrityNightPhotos'
import {motion} from 'framer-motion'
import BlurHashImages from '../BlurHashImages'
import CelebrityNightVideos from '../../Data/CelebrityNightVideos'
import VideoPlayer from '../VideoPlayer'
// import Performance_Video from "../../assets/videos/CelebrityNight/Performance_Video.mp4";
// import Performance_Video_Thumbnail from "../../assets/videos/CelebrityNight/Thumbnail/thumbnail_performance_video.png";

function CelebrityNight() {

    const variants = {
        hidden: { y:135, opacity: 0 },
        visible: { y:0, opacity: 1 },
        }


  return (
    <div>
        <div>
            <div>
                <motion.h2 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[3rem] text-[1.9rem] sm:text-left text-center font-space-grotesk font-[700]'>
                Celebrity Night
                </motion.h2>
            </div>
            <div>
            <motion.h3 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[2rem] text-[1.7rem] sm:text-left text-center font-space-mono font-[500]'>
                Photos
            </motion.h3>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center my-[2rem] gap-[2rem]'>
            {CelebrityNightPhotos.map((item) => {
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
            {CelebrityNightVideos.map((item) => {
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

export default CelebrityNight