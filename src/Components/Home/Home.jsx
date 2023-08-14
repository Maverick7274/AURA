// import ImageSlider from '../ImageSlider/ImageSlider.jsx'
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import Faqs from '../Accordion/Faqs';
import AboutFest from '../About/AboutFest';
import PastEvents from '../PastEvents/PastEvents';
import Venue from '../Venue/Venue';
import CountdownCTA from './CountdownCTA';
import Tabs from '../Tabs';

import tabData from './timeline';
import Hero from './Hero';
import SocialCTA from '../SocialCTA/SocialCTA';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const [tabContent, setTabContent] = useState(tabData)


  return (
    <>
      <div>
        <Hero />
      </div>

      <div>
        <SocialCTA />
      </div>

        <div className='pt-[8rem]'>
          <AboutFest />
        </div>

        <div className='py-[5rem]'>
          <CountdownCTA />
        </div>

        <Tabs tabContent={tabContent} setTabContent={setTabContent} visibility="visible" />

        <div className='pt-[4.3rem]'>
          <Venue />
        </div>

        <div>
          <PastEvents />
        </div>

        <div className='h-screen my-[4rem] sm:mx-[10rem] mx-[1rem]'>
          <Faqs />
        </div>

        {/* <div className='pt-[4.3rem]'>
          <ImageSlider />
        </div> */}
    </>
  )
}

export default Home