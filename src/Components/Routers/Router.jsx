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
import EventPage from "../Events/EventPage"
import Events from "../Events/Events"
import Celebrity from "../Celebrity/Celebrity"

function Router() {
  return (
    <>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About/>} />
              <Route path='/Highlights2022Day1' element={<HighLights2022Day1/>} />
              <Route path='/Highlights2022Day2' element={<HighLights2022Day2/>} />
              <Route path="/PastYearEvents" element={<PastYearEvents/>}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/CelebrityNight" element={<CelebrityNight/>}/>
              <Route path="/PreEvent" element={<PreEvent/>}/>
              <Route path="/FashionShow" element={<FashionShow/>}/>
              <Route path="/Felicitation" element={<Felicitation/>}/>
              <Route path="/PostEvent" element={<PostEvent/>}/>
              <Route path="/Sponsors" element={<Sponsors/>}/>
              <Route path="/AURA2022Days" element={<Days/>}/>
              <Route path="/otherActivities" element={<OtherActivities/>}/>
              <Route path="/PanacheFS" element={<PanacheFS/>}/>
              <Route path="/Day2Photos" element={<Day2Photos/>}/>
              <Route path="/Day2Videos" element={<Day2Videos/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path="/event/:eventName" element={<EventPage/>}/>
              <Route path="/celebrity" element={<Celebrity/>}/>
          </Routes>
        <Footer />
    </>

  )
}

export default Router