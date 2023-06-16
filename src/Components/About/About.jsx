import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
import mouseScrollDown from '../../assets/mouseScrollDown.svg'
function About() {

  const variants = {
    hidden: { y:35, opacity: 0 },
    visible: { y:0, opacity: 1 },
    hidden1 : {y:-35, opacity:0},
    visible1 : {y:0, opacity:1}
  }



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
            <motion.h1 variants={variants} initial='hidden' animate='visible' className="py-[1rem] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">About Us</motion.h1>
          </div>
          <div className="px-[20rem] text-justify">
            <motion.p variants={variants} initial='hidden' animate='visible' className="text-[1.2rem] font-space-grotesk">
            AURA Fest 2023 is an exhilarating celebration of talent, creativity, and endless possibilities. As one of the most highly anticipated events on our campus, we strive to provide a vibrant platform for students to showcase their skills, explore their passions, and connect with like-minded individuals.
            </motion.p>
            <motion.p variants={variants} initial='hidden' animate='visible' className="text-[1.2rem] font-space-grotesk">
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
            <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Our Vision</motion.h1>
          </div>
          <div className="px-[20rem] text-justify">
            <motion.p variants={variants} initial='hidden' whileInView='visible' className="text-[1.2rem] font-space-groteskk">
            At AURA Fest 2023, our vision is to inspire and empower the young minds of today to become the leaders and innovators of tomorrow. We aim to create an inclusive and dynamic atmosphere where students from various disciplines can come together, exchange ideas, and unlock their true potential.
            </motion.p>
            <motion.p variants={variants} initial='hidden' whileInView='visible' className="text-[1.2rem] font-space-grotesk">
            By fostering a spirit of collaboration, creativity, and healthy competition, we strive to ignite the spark of excellence in every participant.
            </motion.p>
          </div>
          <motion.div className='py-[4rem]' variants={variants} initial='hidden1' whileInView='visible1' transition={{delay:2}}>
            <Link className='cursor-pointer flex flex-col justify-center items-center' activeClass="active" to="highlights" spy={true} smooth={true} offset={-100} duration={500}>
              <img src={mouseScrollDown} alt="" className='h-10 w-10 text-white duration-[5s] motion-safe:animate-bounce' />
            </Link>
          </motion.div>
        </div>

        <div id='highlights' className="h-screen flex flex-col justify-center items-center">
          <div className="">
            <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Event Highlights</motion.h1>
          </div>
          <div className="px-[20rem] text-justify">
            <ul className='list-disc'>
              <motion.li variants={variants} initial='hidden' whileInView='visible' className="text-[1.2rem] font-space-grotesk py-[1rem]">
                Competitions: Our festival offers an exciting array of competitions, ranging from cultural extravaganzas to technical challenges. With a diverse range of categories to choose from, participants can immerse themselves in areas such as music, dance, theater, photography, coding, robotics, and much more. These competitions are designed to push boundaries, encourage innovation, and reward excellence.
              </motion.li>
              <motion.li variants={variants} initial='hidden' whileInView='visible' className="text-[1.2rem] font-space-grotesk py-[1rem]">
                Workshops and Guest Lectures: AURA Fest 2023 goes beyond competitions by offering enriching workshops and guest lectures by industry experts and renowned personalities. These sessions provide invaluable insights, knowledge, and inspiration, giving participants the opportunity to learn from the best and expand their horizons.
              </motion.li>
              <motion.li variants={variants} initial='hidden' whileInView='visible' className="text-[1.2rem] font-space-grotesk py-[1rem]">
                Cultural Events: Immerse yourself in the kaleidoscope of cultures as we bring together the best of music, dance, and drama. Our cultural events showcase the rich diversity and artistic talent of our college community. From mesmerizing performances to colorful displays of creativity, these events create an unforgettable experience for both participants and spectators.
              </motion.li>
              <motion.li variants={variants} initial='hidden' whileInView='visible' className="text-[1.2rem] font-space-grotesk py-[1rem]">
                Exhibitions and Installations: Witness the ingenuity of our young inventors and artists as they present their creations in our exhibitions and installations. This platform encourages students to experiment, innovate, and think outside the box, creating a stimulating environment for exploration and discovery.
              </motion.li>
              <motion.li variants={variants} initial='hidden' whileInView='visible' className="text-[1.2rem] font-space-grotesk py-[1rem]">
                Networking Opportunities: AURA Fest 2023 provides a unique platform for networking and forging meaningful connections. Engage with industry professionals, alumni, and fellow students to explore future collaborations, internship opportunities, and career prospects. Our festival aims to facilitate interactions that extend beyond the confines of the campus and open doors to a world of possibilities.
              </motion.li>
            </ul>
          </div>
          {/* <div className='px-[20rem] text-justify'>
            <p className='text-[1.2rem] font-space-grotesk py-[1rem]'>
            Join us at AURA Fest 2023 and embark on a thrilling journey of inspiration, excitement, and personal growth. Whether you are a student participant, a passionate volunteer, or an enthusiastic audience member, we guarantee an unforgettable experience that will leave an indelible mark on your college life.
            </p>
            <p className='text-[1.2rem] font-space-grotesk py-[1rem]'>
              Come, be a part of the magic that is AURA Fest 2023!
            </p>
            <p className='text-[1.2rem] font-space-grotesk py-[1rem]'>
              For more information, feel free to contact us at <a href="mailto:aura@amity.edu">aura@amity.edu</a>.
            </p>
          </div> */}
        </div>




      </div>
    </div>

  )
}

export default About