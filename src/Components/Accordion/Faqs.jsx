// /* eslint-disable no-unused-vars */
// import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    hidden: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

function Faqs() {
    return (
        <div id='faq' className="flex flex-col gap-[2rem] sm:mt-[5rem] mt-[10rem]">
            <div className="flex justify-center items-center">
                <motion.h1 variants={variants} initial='hidden' whileInView='visible' className="min-[280px]:text-[1.5rem] sm:text-[4rem] text-[1.2rem] font-bold font-rubik">Frequently Asked Questions</motion.h1>
            </div>
            <div className="flex flex-col sm:gap-[2rem] gap-[1rem] mx-0">
                <motion.div variants={variants} initial='hidden' whileInView='visible' tabIndex={0} className="collapse collapse-arrow bg-base-200 mx-0">
                    <div className="collapse-title  text-xl font-kanit">
                        What is AURA Fest?
                    </div>
                    <div className="collapse-content font-space-grotesk">
                        <p>AURA Fest is an annual celebration of talent, creativity, and excitement at our college. It brings together students from various disciplines to showcase their skills, participate in competitions, and engage in a wide range of entertaining and educational activities.</p>
                    </div>
                </motion.div>
                <motion.div variants={variants} initial='hidden' whileInView='visible' tabIndex={0} className="collapse collapse-arrow bg-base-200">
                    <div className="collapse-title  text-xl font-kanit">
                        When and where will AURA Fest take place?
                    </div>
                    <div className="collapse-content font-space-grotesk">
                        <p>will take place on [dates] at [venue/location]. The venue will be transformed into a vibrant hub of activity, featuring multiple stages, exhibition areas, and interactive spaces.</p>
                    </div>
                </motion.div>
                <motion.div variants={variants} initial='hidden' whileInView='visible' tabIndex={0} className="collapse collapse-arrow bg-base-200">
                    <div className="collapse-title  text-xl font-kanit">
                        Who can participate in AURA Fest?
                    </div>
                    <div className="collapse-content font-space-grotesk">
                        <p>"AURA Fest" is an annual college festival that welcomes participation from a diverse range of individuals within the college community. The festival is open to all currently enrolled students, including undergraduate and postgraduate students from various disciplines. In addition to students, faculty members and non-teaching staff also have the opportunity to participate in specific events and activities. The festival aims to create a vibrant and inclusive atmosphere by encouraging involvement from alumni, invited artists, and experts who can contribute to the event's success. "AURA Fest" is a celebration that fosters collaboration, talent showcasing, and a sense of community, making it a highlight of the college calendar. For specific details about eligibility and participation guidelines, refer to the official communications provided by the festival organizing committee.</p>
                    </div>
                </motion.div>
                <motion.div variants={variants} initial='hidden' whileInView='visible' tabIndex={0} className="collapse collapse-arrow bg-base-200">
                    <div className="collapse-title  text-xl font-kanit">
                        How can I participate in AURA Fest?
                    </div>
                    <div className="collapse-content font-space-grotesk">
                        <p>Contact to Dr. Professor Smita Sharma </p>
                    </div>
                </motion.div>
                <motion.div variants={variants} initial='hidden' whileInView='visible' tabIndex={0} className="collapse collapse-arrow bg-base-200">
                    <div className="collapse-title text-xl font-kanit">
                        Are there any registration fees?
                    </div>
                    <div className="collapse-content font-space-grotesk">
                        <p>NO.</p>
                    </div>
                </motion.div>
                <motion.div variants={variants} initial='hidden' whileInView='visible' tabIndex={0} className="collapse collapse-arrow bg-base-200">
                    <div className="collapse-title text-xl font-kanit">
                        How can I stay updated on AURA Fest?
                    </div>
                    <div className="collapse-content font-space-grotesk">
                        <p>To stay updated on AURA Fest, the annual college festival, you can use a combination of communication channels and resources: Official Website, Social Media, Posters and Flyers, Departmental Announcements and more. </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Faqs