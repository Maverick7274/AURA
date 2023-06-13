/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


function ButtonComponent(props) {

    const cover = props.cover
    const link = props.link
    const Heading = props.Heading


  return (
    <div>
        <div className=''>
            <div className='flex flex-row justify-center gap-[2rem]'>
                <Link to={link} className='btn btn-outline h-auto flex flex-col justify-center items-center gap-[2rem] py-[2rem]'>
                    <div>
                        <img src={cover} alt="" className='w-[280px] h-[280px] object-cover' />
                    </div>
                    <h2 className='text-[2rem] font-patua-one'>{Heading}</h2>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ButtonComponent