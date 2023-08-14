import {motion} from 'framer-motion'
import ButtonComponent from '../../ButtonComponent'
import Breadcrumbs from '../../Breadcrumbs'
import CountdownCondensed from '../../Countdown/CountdownCondensed'

function HighLights2022Day1() {
  
  const variants = {
    hidden: { y:80, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

  return (
    <div className='h-auto gap-[3rem] py-[5rem] px-[2rem]'>
      <div className='mt-[2rem]'>
        <Breadcrumbs link1="/AURA-website/PastYearEvents" link2="/AURA-website/AURA2022Days" currentLink="/AURA-website/HighLights2022Day1" link1Name="Past Year Events" link2Name="Days" currentLinkName="Day 1"/>
      </div>
      <div className=''>
        <motion.h1 variants={variants} initial='hidden' animate='visible' className='sm:text-[4rem] text-[2.6rem] font-rubik text-center font-bold'>AURA 2022 - Day 1</motion.h1>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-[3rem] sm:flex-row md:flex-col xl:flex-row'>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743414/assets/images/PreEvent/showcase_1_ybrurw.jpg" link='/AURA-website/preEvent' Heading='Pre Event'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743400/assets/images/FashionSegment/showcase_19_k6lfhe.jpg" link='/AURA-website/fashionShow' Heading='Fashion Show'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743394/assets/images/CelebrityNight/showcase_81_sqlk54.jpg" link='/AURA-website/celebrityNight' Heading='Celebrity Night'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743424/assets/images/Felicitation/showcase_30_hmx5ij.jpg" link='/AURA-website/felicitation' Heading='Felicitation'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743436/assets/images/PostEvent/showcase_83_p7gcrl.jpg" link='/AURA-website/postEvent' Heading='Post Event'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1687024065/YOGITA%20NUPOOR%20SHREESTHA/4H3A0945_eo5mtp.jpg" link='/AURA-website/otherActivities' Heading='Other Activities'/>
      </div>
      {/* <div className='sticky m-[2rem] bottom-15 right-0 bg-accent rounded p-[0.9rem] text-white'>
        <CountdownCondensed />
      </div> */}
    </div>

  )
}

export default HighLights2022Day1