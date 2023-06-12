// import VideoPlayer from './VideoPlayer'
import FashionSegment from './FashionSegment'
import CelebrityNight from './CelebrityNight'
import {motion} from 'framer-motion'
import PreEvent from './PreEvent'


function HighLights2022() {
  
  const variants = {
    hidden: { y:135, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

  return (
    <div className='h-auto sm:px-[5rem] py-[5rem] px-[1rem]'>
      <div className=''>
        <motion.h1 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[4rem] text-[2.6rem] font-rubik text-center font-bold'>Past Highlights</motion.h1>
      </div>

      {/* Pre Event */}
      <PreEvent />
      {/* Fashion Show */}
      <FashionSegment />
      {/* Celebrity Night */}
      <CelebrityNight />

    </div>
  )
}

export default HighLights2022