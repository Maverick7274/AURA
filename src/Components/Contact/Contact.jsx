import React, {useEffect} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
import mouseScrollDown from '../../assets/mouseScrollDown.svg'
import CountdownCondensed from '../Countdown/CountdownCondensed'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const variants = {
    hidden: { y:35, opacity: 0 },
    visible: { y:0, opacity: 1 },
    hidden1 : {y:-35, opacity:0},
    visible1 : {y:0, opacity:1}
  }

  return (
    <>
      <div className="h-auto w-full">
        
        <div className="hero h-screen w-full">
          <div id='contact' className='flex flex-col justify-center items-center w-full'>
            <div className="w-full">
              <motion.h1 variants={variants} initial='hidden' animate='visible' className="py-[1rem] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Contact Us</motion.h1>
            </div>

            <form action="#" onSubmit={e => {e.preventDefault();}}>
              <div className='w-full'>
                <div className="form-control w-full">
                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />

                  <button className="my-5 btn btn-info">Send</button>
                </div>
              </div>

              

            </form>
   
            {/* <div className="px-[20rem] text-justify">
              <motion.p variants={variants} initial='hidden' animate='visible' className="text-[1.2rem] font-space-grotesk">
              AURA Fest 2023 is an exhilarating celebration of talent, creativity, and endless possibilities. As one of the most highly anticipated events on our campus, we strive to provide a vibrant platform for students to showcase their skills, explore their passions, and connect with like-minded individuals.
              </motion.p>
              <motion.p variants={variants} initial='hidden' animate='visible' className="text-[1.2rem] font-space-grotesk">
              Organized by the passionate and dedicated students of Amity University, Greater Noida our festival promises a memorable and enriching experience for all participants.
              </motion.p>
            </div> */}
            {/* <motion.div className='pt-[5rem]' variants={variants} initial='hidden1' animate='visible1' transition={{delay:5}}>
              <Link className='cursor-pointer flex flex-col justify-center items-center' activeClass="active" to="vision" spy={true} smooth={true} offset={-0} duration={500}>
                <img src={mouseScrollDown} alt="" className='h-10 w-10 text-white duration-[5s] motion-safe:animate-bounce' />
              </Link>
            </motion.div> */}
          </div>
        </div>
      </div>
      <div className='fixed m-[2rem] bottom-0 right-0 bg-accent rounded p-[0.9rem] text-white'>
        <CountdownCondensed />
      </div>
    </>
  )
}

export default Contact