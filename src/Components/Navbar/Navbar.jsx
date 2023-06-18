import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'
import logo from '../../assets/amity-logo.svg'

function Navbar() {
  return (
    <>
        <div className="navbar fixed top-0 z-[1000] left-0 px-[4rem] bg-base-100 border-b-2 border-b-white">
            <div className="navbar-start">
                <div className="dropdown font-space-mono text-[2rem] font-[500]">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a><NavLink to="/AURA-website/">Home</NavLink></a>
                        <ul className="p-2">
                        <li><Link activeClass="active" to="aboutfest" spy={true} smooth={true} offset={-120} duration={500}>About</Link></li>
                                <li><Link activeClass="active" to="venue" spy={true} smooth={true} offset={0} duration={500}>Venue</Link></li>
                                <li><Link activeClass="active" to="pastevents" spy={true} smooth={true} offset={-120} duration={500}>Past Events</Link></li>
                                <li><Link activeClass="active" to="faq" spy={true} smooth={true} offset={-120} duration={500}>FAQs</Link></li>
                        </ul>
                    </li>
                    <li><NavLink to='/AURA-website/about'>About</NavLink></li>
                    <li><NavLink to='/AURA-website/contact'>Contact Us</NavLink></li>
                    <li><NavLink to='/AURA-website/PastYearEvents'>Past Events</NavLink></li>
                    <li><NavLink to='/AURA-website/Sponsors'>Sponsors</NavLink></li>
                    <li>
                        <Link activeClass="active" to="venue" spy={true} smooth={true} offset={0} duration={500}><span className="badge badge-accent badge-xs badge-outline">NEW</span>Venue</Link>
                    </li>
                </ul>
                </div>
                <div className=''>
                <NavLink to='/AURA-website/' className="cursor-pointer hidden lg:flex flex gap-[1rem] justify-center items-center">
                    <img src={logo} width='50px' height='50px'/>
                    <span className='font-josefin-sans font-[700] normal-case text-3xl'>AURA FEST</span>
                </NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex font-space-mono font-[700]">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <details>
                            <summary><NavLink to="/AURA-website/">Home</NavLink></summary>
                            <ul className="p-2">
                                <li><Link activeClass="active" to="aboutfest" spy={true} smooth={true} offset={-120} duration={500}>About</Link></li>
                                <li><Link activeClass="active" to="venue" spy={true} smooth={true} offset={0} duration={500}>Venue</Link></li>
                                <li><Link activeClass="active" to="pastevents" spy={true} smooth={true} offset={-120} duration={500}>Past Events</Link></li>
                                <li><Link activeClass="active" to="faq" spy={true} smooth={true} offset={-120} duration={500}>FAQs</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><NavLink to='/AURA-website/about'>About</NavLink></li>
                    <li><NavLink to='/AURA-website/contact'>Contact Us</NavLink></li>
                    <li><NavLink to='/AURA-website/PastYearEvents'>Past Events</NavLink></li>
                    <li><NavLink to='/AURA-website/Sponsors'>Sponsors</NavLink></li>
                    <li>
                        <Link activeClass="active" to="venue" spy={true} smooth={true} offset={0} duration={500}><span className="badge badge-success badge-outline">NEW</span>Venue</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className='min-[280px]:flex justify-center items-center hidden btn btn-outline font-space-mono btn-success w-[8rem]'>
                        RSVP Now
                </a>
            </div>
        </div>
    </>
  )
}

export default Navbar