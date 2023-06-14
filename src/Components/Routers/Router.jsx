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
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About/>} />
              <Route path='/Highlights2022' element={<HighLights2022/>} />
              <Route path="/PastYearEvents" element={<PastYearEvents/>}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/CelebrityNight" element={<CelebrityNight/>}/>
              <Route path="/PreEvent" element={<PreEvent/>}/>
              <Route path="/FashionShow" element={<FashionShow/>}/>
              <Route path="/Felicitation" element={<Felicitation/>}/>
              <Route path="/PostEvent" element={<PostEvent/>}/>
          </Routes>
        <Footer />
    </>

  )
}

export default Router