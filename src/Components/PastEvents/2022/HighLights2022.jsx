import {motion} from 'framer-motion'
import ButtonComponent from '../../ButtonComponent'
import Breadcrumbs from '../../Breadcrumbs'
import showcase_1 from '../../../assets/Images/preEvent/showcase_1.jpg'
import showcase_19 from '../../../assets/Images/fashionSegment/showcase_19.jpg'
import showcase_30 from '../../../assets/Images/felicitation/showcase_30.jpg'
import showcase_81 from '../../../assets/Images/celebrityNight/showcase_81.jpg'
import showcase_83 from '../../../assets/Images/postEvent/showcase_83.jpeg'


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
        <ButtonComponent cover={showcase_1} link='/preEvent' Heading='Pre Event'/>
        <ButtonComponent cover={showcase_19} link='/fashionShow' Heading='Fashion Show'/>
        <ButtonComponent cover={showcase_81} link='/celebrityNight' Heading='Celebrity Night'/>
        <ButtonComponent cover={showcase_30} link='/felicitation' Heading='Felicitation'/>
        <ButtonComponent cover={showcase_83} link='/postEvent' Heading='Post Event'/>
      </div>

    </div>

  )
}

export default HighLights2022