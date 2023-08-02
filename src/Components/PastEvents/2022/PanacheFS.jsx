import Panache from '../../../Data/Panache'
import Breadcrumbs from '../../Breadcrumbs'
import {motion} from 'framer-motion'
import BlurHashImages from '../../BlurHashImages'
import CountdownCondensed from '../../Countdown/CountdownCondensed'

function PanacheFS() {

  const variants = {
    hidden: { y:135, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

return (
<div className='py-[5rem] px-[2rem]'>
    <div className='mt-[2rem]'>
    <Breadcrumbs link1="/AURA-website/PastYearEvents" link2="/AURA-website/otherActivities" currentLink="/AURA-website/FashionShow" link1Name="Past Year Events" link2Name="Other Activities" currentLinkName="Panache Fashion Show"/>
    <div>
        <motion.h2 variants={variants} initial='hidden' whileInView='visible' className='sm:text-[3rem] text-[1.9rem] sm:text-left text-center font-space-grotesk font-[700]'>
            Panache Fashion Show
        </motion.h2>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center my-[2rem] gap-[2rem]'>
        {Panache.map((item) => {
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
  <div className='fixed m-[2rem] bottom-0 right-0 bg-accent rounded p-[0.9rem] text-white'>
        <CountdownCondensed />
      </div>
</div>
)
}

export default PanacheFS