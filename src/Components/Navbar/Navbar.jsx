import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="navbar fixed top-0 z-[1000] left-0 bg-base-100 border-b-2 border-b-white">
            <div className="navbar-start">
                <div className="dropdown font-space-mono text-[2rem] font-[500]">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/AURA">Home</Link></li>
                    <li><Link to='/AURA/about'>About</Link></li>
                    <li><Link to='/AURA/contact'>Contact Us</Link></li>
                    <li><Link to='/AURA/PastYearEvents'>Past Events</Link></li>
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case font-righteous text-xl">Aura Fest</Link>
            </div>
            <div className="navbar-center hidden lg:flex font-space-mono font-[700]">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/AURA/">Home</Link></li>
                    <li><Link to='/AURA/about'>About</Link></li>
                    <li><Link to='/AURA/contact'>Contact Us</Link></li>
                    <li><Link to='/AURA/PastYearEvents'>Past Events</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='min-[280px]:flex justify-center items-center hidden btn btn-outline font-space-grotesk btn-success w-[8rem]'>
                        RSVP Now
                </Link>
            </div>
        </div>
    </>
  )
}

export default Navbar