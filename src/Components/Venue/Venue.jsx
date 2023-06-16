import {motion} from 'framer-motion'
function Venue() {

    const variants = {
        hidden: { y:135, opacity: 0 },
        visible: { y:0, opacity: 1 },
      }

  return (
    <div id='venue' className="flex flex-col justify-center items-center sm:gap-[5rem] gap-[3rem] pb-[3rem] sm:px-[5rem] px-[3rem]">
        <div>
        <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="py-[1rem] min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Venue</motion.h1>
        </div>
        <div className='flex justify-center items-center gap-[3rem]'>
            <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4811448882915!2d77.48197357604737!3d28.46505327575662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea09ba0d2aa7%3A0xcdf825a25f9f7d78!2sAmity%20University%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1686910260793!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }} allowfullscreen=""
                loading="lazy"
                ></iframe>
            </div>
            <div className='flex flex-col gap-[2rem] text-[2rem]'>
                <div className='flex gap-[1rem] font-space-grotesk'>
                    <span className='font-bold'>
                        Address:
                    </span>
                    <a target='_blank' rel='noreferrer' href='https://goo.gl/maps/wGBhdipNFArmEfJ67' className='hover:text-success underline underline-offset-4 hover:underline-offset-8 duration-500 decoration-success hover:decoration-orange-500'>
                    Amity University Uttar Pradesh, Plot No. 48 A, Knowledge Park 3, Greater Noida, Uttar Pradesh, India, 201308
                    </a>
                </div>
                <div className='flex gap-[1rem] font-space-grotesk'>
                    <span className='font-bold'>
                        Phone:
                    </span>
                    <a target='_blank' rel='noreferrer' href='tel:(+91) 96541 39399' className='hover:text-success underline underline-offset-4 hover:underline-offset-8 duration-500 decoration-success hover:decoration-orange-500'>
                        (+91) 96541 39399
                    </a>
                </div>
                <div className='flex gap-[1rem] font-space-grotesk'>
                    <span className='font-bold'>
                        E-mail:
                    </span>
                    <a href='mailto:conference@gn.amity.edu' className='hover:text-success underline underline-offset-4 hover:underline-offset-8 duration-500 decoration-success hover:decoration-orange-500'>
                        conference@gn.amity.edu
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Venue