import React from 'react'
import { Link } from 'react-router-dom'
import cover2022 from '../../Assets/Images/cover2022.jpg'

function PastYearEvents() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-[5rem]'>
        <div className=''>
            <h1 className='sm:text-[4rem] text-[3rem] font-rubik font-[700] text-center'>
                All AURA Events
            </h1>
        </div>
        <div className=''>
            <div className='flex flex-row justify-center gap-[2rem]'>
                <Link to="/AURA-website/Highlights2022" className='btn btn-outline h-auto flex flex-col justify-center items-center gap-[2rem] py-[2rem]'>
                    <div>
                        <img src={cover2022} alt="" className='w-[280px] h-[280px] object-cover' />
                    </div>
                    <h2 className='text-[2rem] font-patua-one'>AURA 2022</h2>
                </Link>
                {/* <Link to="/AURA-website/Highlights2022" className='btn btn-outline'>
                    2023
                </Link> */}
            </div>
        </div>
    </div>
  )
}

export default PastYearEvents