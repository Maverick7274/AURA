import Day2PhotosData from '../../../Data/Day2PhotosData'
import Breadcrumbs from '../../Breadcrumbs'
import {motion} from 'framer-motion'
import BlurHashImages from '../../BlurHashImages'

function Day2Photos() {

  const variants = {
    hidden: { y:135, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

  return (
    <div className='py-[5rem] px-[2rem]'>
        <div>
        <div className='mt-[2rem]'>
            <Breadcrumbs link1="/AURA-website/PastYearEvents" link2="/AURA-website/Highlights2022" currentLink="/AURA-website/FashionShow" link1Name="Past Events" link2Name="AURA 2022" currentLinkName="Fashion Show"/>
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
    </div>
  )
}

export default Day2Photos