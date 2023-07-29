import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
import mouseScrollDown from '../../assets/mouseScrollDown.svg'

const Contact = () => {


  const variants = {
    hidden: { y:35, opacity: 0 },
    visible: { y:0, opacity: 1 },
    hidden1 : {y:-35, opacity:0},
    visible1 : {y:0, opacity:1}
  }

  return (
    <>
      <div className="h-auto">
        
        <div className="hero h-screen">
          <div id='contact' className='flex flex-col justify-center items-center'>
            <div className="">
              <motion.h1 variants={variants} initial='hidden' animate='visible' className="py-[1rem] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Contact Us</motion.h1>
            </div>

            <form action="#" onSubmit={e => {e.preventDefault();}}>
              <div className="form-control w-full max-w-xs">

                <label className="label">
                  <span className="label-text">What is your name?</span>
                  {/* <span className="label-text-alt">Top Right label</span> */}
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                {/* <label className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                  <span className="label-text-alt">Bottom Right label</span>
                </label> */}

                <label className="label">
                  <span className="label-text">What is your email?</span>
                  {/* <span className="label-text-alt">Top Right label</span> */}
                </label>
                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                {/* <label className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                  <span className="label-text-alt">Bottom Right label</span>
                </label> */}

                <label className="label">
                  <span className="label-text">Your message goes here</span>
                  {/* <span className="label-text-alt">Alt label</span> */}
                </label>
                <textarea className="textarea textarea-info w-full max-w-xs" placeholder="Enter your message" required></textarea>

                <button className="my-5 btn btn-info">Send</button>
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
    </>
  )
}

export default Contact