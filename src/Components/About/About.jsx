
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
import mouseScrollDown from '../../assets/mouseScrollDown.svg'
import CountdownCondensed from '../Countdown/CountdownCondensed'
import Tabs from '../Tabs'
import Timeline from '../Timeline'

function About() {

  const variants = {
    hidden: { y:35, opacity: 0 },
    visible: { y:0, opacity: 1 },
    hidden1 : {y:-35, opacity:0},
    visible1 : {y:0, opacity:1}
  }


  const [timelineData, setTimelineData] = useState([
    {
      id: 0,
      title: "Box 1",
      content: `This is test para for Box 1`,
      isLeft: true
    },
    {
      id: 1,
      title: "Tab 2",
      content: `This is test para for Box 2`,
      isLeft: false,
    },
    {
      id: 1,
      title: "Tab 3",
      content: `This is test para for Box 3`,
      isLeft: true,
    },
  ])


  const [tabContent, setTabContent] = useState(
    [
        {
            id: 0,
            title: "Tab 1",
            content: `<div className="w-screen flex flex-col justify-center items-center">
            <div className="card w-[90%] bg-secondary mt-[2rem] border text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Tab 1</h2>
                <p>Tab 1 Content</p>
              </div>
            </div>
          </div>`,
            isActive: true,
        },
        {
            id: 1,
            title: "Tab 2",
            content: `<div className="w-screen flex flex-col justify-center items-center">
            <div className="card w-[90%] bg-secondary mt-[2rem] border text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Tab 2</h2>
                <p>Tab 2 Content</p>
              </div>
            </div>
          </div>`,
            isActive: false,
        },
        {
            id: 2,
            title: "Tab 3",
            content: `<div className="w-screen flex flex-col justify-center items-center">
            <div className="card w-[90%] bg-secondary mt-[2rem] border text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Tab 3</h2>
                <p>Tab 3 Content</p>
              </div>
            </div>
          </div>`,
            isActive: false,
        },

    ]
  );

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  



  return (
    <div>
      <div className="h-auto">
        
        <div className="hero h-screen">
        <div className='h-full w-full'>
            <video src="https://res.cloudinary.com/djqnbowat/video/upload/v1686743623/assets/videos/HeroMontagePC_qk6sx5.mp4" className='object-cover w-full h-full' autoPlay loop muted />
          </div>
          <div className='hero-overlay bg-opacity-90'></div>
          <div id='about' className='flex flex-col justify-center items-center'>
          <div className="">
            <motion.h1 variants={variants} initial='hidden' animate='visible' className="className='mb-5 pt-[5rem] px-[3rem] min-[280px]:text-[2rem] sm:text-[4rem] text-[3rem] font-bold font-rubik text-center">About Us</motion.h1>
          </div>
          <div className="px-[20rem] max-lg:px-[10rem] max-md:px-[10rem] max-sm:px-[2rem] text-center">
            <motion.p variants={variants} initial='hidden' animate='visible' className="text-[1.2rem] max-sm:text-[16px] font-space-grotesk">
            AURA Fest 2023 is an exhilarating celebration of talent, creativity, and endless possibilities. As one of the most highly anticipated events on our campus, we strive to provide a vibrant platform for students to showcase their skills, explore their passions, and connect with like-minded individuals.
            </motion.p>
            <motion.p variants={variants} initial='hidden' animate='visible' className="text-[1.2rem] max-sm:text-[16px] font-space-grotesk">
            Organized by the passionate and dedicated students of Amity University, Greater Noida our festival promises a memorable and enriching experience for all participants.
            </motion.p>
          </div>
          <motion.div className='pt-[5rem]' variants={variants} initial='hidden1' animate='visible1' transition={{delay:5}}>
            <Link className='cursor-pointer flex flex-col justify-center items-center' activeClass="active" to="vision" spy={true} smooth={true} offset={-0} duration={500}>
              <img src={mouseScrollDown} alt="" className='h-10 w-10 text-white duration-[5s] motion-safe:animate-bounce' />
            </Link>
          </motion.div>
          </div>
        </div>



        <div id='vision' className="h-screen flex flex-col justify-center items-center">
          <div className="">
            <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] pt-[50px] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Our Contributors</motion.h1>
          </div>

          <Tabs tabContent={tabContent} setTabContent={setTabContent}/>

        </div>


        <div className="h-screen flex flex-col justify-center items-center">
          <div className="mt-[0rem]">
            <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] pt-[50px] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Our Team Leads</motion.h1>
          </div>
          <div className="text-justify">
          <div className="carousel carousel-center max-sm:w-screen max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box  max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box  max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box  max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box max-sm:w-[90vw]" />
            </div> 
          </div>
          </div>
        </div>


        <div className="h-screen flex flex-col justify-center items-center">
          <div className="mt-[0rem]">
            <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] pt-[50px] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Our Contributors</motion.h1>
          </div>
          <div className="text-justify">
          <div className="carousel carousel-center max-sm:w-screen max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box  max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box  max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box  max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box max-sm:w-[90vw]" />
            </div> 
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/400x600" className="rounded-box max-sm:w-[90vw]" />
            </div> 
          </div>
          </div>
        </div>
      </div>
      <div className='fixed m-[2rem] bottom-0 right-0 bg-accent rounded p-[0.9rem] text-white'>
        <CountdownCondensed />
      </div>
    </div>

  )
}

export default About