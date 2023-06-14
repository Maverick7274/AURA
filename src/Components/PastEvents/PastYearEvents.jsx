import Breadcrumbs from '../Breadcrumbs1'
import ButtonComponent from '../ButtonComponent'

function PastYearEvents() {
  return (
    <div className='h-auto flex flex-col justify-center items-center gap-[5rem]'>
        <Breadcrumbs link1="/AURA-website/" currentLink="/AURA-website/PastYearEvents" link1Name="Home" currentLinkName="Past Year Events"/>
        <div className=''>
            <div className=''>
                <h1 className='sm:text-[4rem] text-[3rem] font-rubik font-[700] text-center'>
                    All AURA Events
                </h1>
            </div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-[3rem] sm:flex-row md:flex-col xl:flex-row'>
          <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686746572/cover2022_u4zre2.jpg" link="/AURA-website/Highlights2022" Heading='AURA 2022'/>
        </div>
    </div>
  )
}

export default PastYearEvents