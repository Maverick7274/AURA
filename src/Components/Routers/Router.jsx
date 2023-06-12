import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import { Routes, Route } from "react-router"
import HighLights2022 from "../PastEvents/HighLights2022"
import PastYearEvents from "../PastEvents/PastYearEvents"

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
          </Routes>
        <Footer />
    </>

  )
}

export default Router