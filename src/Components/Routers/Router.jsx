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
              <Route path='/AURA/' element={<Home />} />
              <Route path='/AURA/about' element={<About/>} />
              <Route path='/AURA/Highlights2022' element={<HighLights2022/>} />
              <Route path="/AURA/PastYearEvents" element={<PastYearEvents/>}/>
              <Route path="/AURA/contact" element={<Contact />}/>
              <Route path="/AURA/CelebrityNight" element={<CelebrityNight/>}/>
              <Route path="/AURA/PreEvent" element={<PreEvent/>}/>
              <Route path="/AURA/FashionShow" element={<FashionShow/>}/>
              <Route path="/AURA/Felicitation" element={<Felicitation/>}/>
              <Route path="/AURA/PostEvent" element={<PostEvent/>}/>
          </Routes>
        <Footer />
    </>

  )
}

export default Router