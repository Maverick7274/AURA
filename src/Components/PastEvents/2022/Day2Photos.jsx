import Day2PhotosData from '../../../Data/Day2PhotosData'
import Breadcrumbs from '../../Breadcrumbs'
import {motion} from 'framer-motion'
import BlurHashImages from '../../BlurHashImages'
import CountdownCondensed from '../../Countdown/CountdownCondensed'

function Day2Photos() {

  const variants = {
    hidden: { y:135, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

  return (
    <div className='py-[5rem] px-[2rem]'>
        <div>
        <div className='mt-[2rem]'>
        <Breadcrumbs link1="/AURA-website/AURA2022Days" link2="/AURA-website/Highlights2022Day2" currentLink="/AURA-website/Day2Photos" link1Name="Days" link2Name="Day 2" currentLinkName="Day 2 - Photos"/>
          </div>
            <div>
            <motion.h2 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[3rem] text-[1.9rem] sm:text-left text-center font-space-grotesk font-[700]'>
                Day 2 - Photos
            </motion.h2>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center my-[2rem] gap-[2rem]'>
            {Day2PhotosData.map((item) => {
                return (
                    <>
                    <div className=''>
                        <BlurHashImages hash={item.hash} src={item.photoURI} width={item.width} height={item.height} />
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

export default Day2Photos