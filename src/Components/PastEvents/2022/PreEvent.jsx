import Breadcrumbs from '../../Breadcrumbs'
import {motion} from 'framer-motion'
import BlurHashImages from '../../BlurHashImages'
import PreEventPhotos from '../../../Data/PreEventPhotos'

function PreEvent() {

    const variants = {
        hidden: { y:135, opacity: 0 },
        visible: { y:0, opacity: 1 },
      }
  return (
    <div className='py-[5rem] px-[2rem]'>
        <div>
                <Breadcrumbs link1="/AURA/PastYearEvents" link2="/AURA/Highlights2022" currentLink="/AURA/PreEvent" link1Name="Past Events" link2Name="AURA 2022" currentLinkName="Pre Event"/>
            <div>
            <motion.h2 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[3rem] text-[1.9rem] sm:text-left text-center font-space-grotesk font-[700]'>
                Pre Event
            </motion.h2>
            </div>
            <div>
                <motion.h3 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[2rem] text-[1.7rem] sm:text-left text-center font-space-mono text-left font-[500]'>
                Photos
                </motion.h3>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center my-[2rem] gap-[2rem]'>
            {PreEventPhotos.map((item) => {
                return (
                    <>
                    <div className=''>
                        {/* <motion.img variants={variants} initial='hidden' whileInView='visible' viewport={{once: true}} src={item.photoURI} /> */}
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

export default PreEvent