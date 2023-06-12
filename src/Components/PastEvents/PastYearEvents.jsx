import cover2022 from '../../Assets/Images/cover2022.jpg'
import Breadcrumbs from '../Breadcrumbs1'
import ButtonComponent from '../ButtonComponent'

function PastYearEvents() {
  return (
    <div className='h-auto flex flex-col justify-center items-center gap-[5rem]'>
        <Breadcrumbs link1="/" currentLink="/PastYearEvents" link1Name="Home" currentLinkName="Past Year Events"/>
        <div className=''>
            <div className=''>
                <h1 className='sm:text-[4rem] text-[3rem] font-rubik font-[700] text-center'>
                    All AURA Events
                </h1>
            </div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-[3rem] sm:flex-row md:flex-col xl:flex-row'>
          <ButtonComponent cover={cover2022} link="/Highlights2022" Heading='AURA 2022'/>
        </div>
    </div>
  )
}

export default PastYearEvents