import {motion} from 'framer-motion'
import ButtonComponent from '../../ButtonComponent'
import Breadcrumbs from '../../Breadcrumbs'
import CountdownCondensed from '../../Countdown/CountdownCondensed'

function HighLights2022Day2() {
  
  const variants = {
    hidden: { y:80, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

  return (
    <div className='h-auto gap-[3rem] py-[5rem] px-[2rem]'>
      <div className='mt-[2rem]'>
        <Breadcrumbs link1="/AURA-website/PastYearEvents" link2="/AURA-website/AURA2022Days" currentLink="/AURA-website/HighLights2022Day2" link1Name="Past Year Events" link2Name="Days" currentLinkName="Day 2"/>
      </div>
      <div className=''>
        <motion.h1 variants={variants} initial='hidden' animate='visible' className='sm:text-[4rem] text-[2.6rem] font-rubik text-center font-bold'>AURA 2022 - Day 2</motion.h1>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-[3rem] sm:flex-row md:flex-col xl:flex-row'>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1687031147/Day_2_Showcase_34_h7raf9.jpg" link='/AURA-website/Day2Photos' Heading='Photos'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1687031163/Day_2_Showcase_57_w9dwvz.jpg" link='/AURA-website/Day2Videos' Heading='Videos'/>
      </div>
      {/* <div className='sticky m-[2rem] bottom-15 right-0 bg-accent rounded p-[0.9rem] text-white'>
        <CountdownCondensed />
      </div> */}
    </div>

  )
}

export default HighLights2022Day2