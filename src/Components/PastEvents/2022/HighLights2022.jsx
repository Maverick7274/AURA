import {motion} from 'framer-motion'
import ButtonComponent from '../../ButtonComponent'
import Breadcrumbs from '../../Breadcrumbs'

function HighLights2022() {
  
  const variants = {
    hidden: { y:80, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

  return (
    <div className='h-auto gap-[3rem] py-[5rem] px-[2rem]'>
      <Breadcrumbs link1="/" link2="/PastYearEvents" currentLink="/HighLights2022" link1Name="Home" link2Name="Past Events" currentLinkName="AURA 2022"/>
      <div className=''>
        <motion.h1 variants={variants} initial='hidden' animate='visible' className='sm:text-[4rem] text-[2.6rem] font-rubik text-center font-bold'>AURA 2022</motion.h1>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-[3rem] sm:flex-row md:flex-col xl:flex-row'>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743414/assets/images/PreEvent/showcase_1_ybrurw.jpg" link='/preEvent' Heading='Pre Event'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743400/assets/images/FashionSegment/showcase_19_k6lfhe.jpg" link='/fashionShow' Heading='Fashion Show'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743394/assets/images/CelebrityNight/showcase_81_sqlk54.jpg" link='/celebrityNight' Heading='Celebrity Night'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743424/assets/images/Felicitation/showcase_30_hmx5ij.jpg" link='/felicitation' Heading='Felicitation'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686743436/assets/images/PostEvent/showcase_83_p7gcrl.jpg" link='/postEvent' Heading='Post Event'/>
      </div>

    </div>

  )
}

export default HighLights2022