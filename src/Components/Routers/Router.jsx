import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import { Routes, Route } from "react-router"
import HighLights2022 from "../PastEvents/2022/HighLights2022"
import PastYearEvents from "../PastEvents/PastYearEvents"
import CelebrityNight from "../PastEvents/2022/CelebrityNight"
import PreEvent from "../PastEvents/2022/PreEvent"
import FashionShow from "../PastEvents/2022/FashionShow"
import Felicitation from "../PastEvents/2022/Felicitation"
import PostEvent from "../PastEvents/2022/PostEvent"


function Router() {
  return (
    <>
        <Navbar />
          <Routes>
              <Route path='/AURA-website/' element={<Home />} />
              <Route path='/AURA-website/about' element={<About/>} />
              <Route path='/AURA-website/Highlights2022' element={<HighLights2022/>} />
              <Route path="/AURA-website/PastYearEvents" element={<PastYearEvents/>}/>
              <Route path="/AURA-website/contact" element={<Contact />}/>
              <Route path="/AURA-website/CelebrityNight" element={<CelebrityNight/>}/>
              <Route path="/AURA-website/PreEvent" element={<PreEvent/>}/>
              <Route path="/AURA-website/FashionShow" element={<FashionShow/>}/>
              <Route path="/AURA-website/Felicitation" element={<Felicitation/>}/>
              <Route path="/AURA-website/PostEvent" element={<PostEvent/>}/>
          </Routes>
        <Footer />
    </>

  )
}

export default Router