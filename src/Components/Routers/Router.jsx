import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import { Routes, Route } from "react-router"
import HighLights2022Day1 from "../PastEvents/2022/HighLights2022Day1"
import HighLights2022Day2 from "../PastEvents/2022/HighLights2022Day2"
import PastYearEvents from "../PastEvents/PastYearEvents"
import CelebrityNight from "../PastEvents/2022/CelebrityNight"
import PreEvent from "../PastEvents/2022/PreEvent"
import FashionShow from "../PastEvents/2022/FashionShow"
import Felicitation from "../PastEvents/2022/Felicitation"
import PostEvent from "../PastEvents/2022/PostEvent"
import Sponsors from "../Sponsors/Sponsors"
import Days from "../PastEvents/2022/Days/Days"
import OtherActivities from "../PastEvents/2022/OtherActivities"
import PanacheFS from "../PastEvents/2022/PanacheFS"
import Day2Photos from "../PastEvents/2022/Day2Photos"
import Day2Videos from "../PastEvents/2022/Day2Videos"

function Router() {
  return (
    <>
        <Navbar />
          <Routes>
              <Route path='/AURA-website/' element={<Home />} />
              <Route path='/AURA-website/about' element={<About/>} />
              <Route path='/AURA-website/Highlights2022Day1' element={<HighLights2022Day1/>} />
              <Route path='/AURA-website/Highlights2022Day2' element={<HighLights2022Day2/>} />
              <Route path="/AURA-website/PastYearEvents" element={<PastYearEvents/>}/>
              <Route path="/AURA-website/contact" element={<Contact />}/>
              <Route path="/AURA-website/CelebrityNight" element={<CelebrityNight/>}/>
              <Route path="/AURA-website/PreEvent" element={<PreEvent/>}/>
              <Route path="/AURA-website/FashionShow" element={<FashionShow/>}/>
              <Route path="/AURA-website/Felicitation" element={<Felicitation/>}/>
              <Route path="/AURA-website/PostEvent" element={<PostEvent/>}/>
              <Route path="/AURA-website/Sponsors" element={<Sponsors/>}/>
              <Route path="/AURA-website/AURA2022Days" element={<Days/>}/>
              <Route path="/AURA-website/otherActivities" element={<OtherActivities/>}/>
              <Route path="/AURA-website/PanacheFS" element={<PanacheFS/>}/>
              <Route path="/AURA-website/Day2Photos" element={<Day2Photos/>}/>
              <Route path="/AURA-website/Day2Videos" element={<Day2Videos/>}/>
          </Routes>
        <Footer />
    </>

  )
}

export default Router