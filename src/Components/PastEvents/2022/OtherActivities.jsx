import Breadcrumbs from '../../Breadcrumbs'
import ButtonComponent from '../../ButtonComponent'
import CountdownCondensed from '../../Countdown/CountdownCondensed'

function OtherActivities() {
  return (
    <div className='h-auto flex flex-col justify-center items-center gap-[5rem]'>
        <div className="mt-[6rem]">
            <Breadcrumbs link1="/AURA-website/PastYearEvents" link2="/AURA-website/Highlights2022Day1" currentLink="/AURA-website/otherActivities" link1Name="Past Year Events" link2Name="Day 1" currentLinkName="Other Activities"/>
        </div>
    <div className=''>
        <div className=''>
            <h1 className='sm:text-[4rem] text-[3rem] font-rubik font-[700] text-center'>
                Other Activities
            </h1>
        </div>
    </div>
    <div className='flex flex-wrap justify-center items-center gap-[3rem] sm:flex-row md:flex-col xl:flex-row'>
      <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1687023923/ANKITA/4H3A0854_xeanaz.jpg" link="/AURA-website/PanacheFS" Heading='Panache'/>
    </div>
    <div className='fixed m-[2rem] bottom-0 right-0 bg-accent rounded p-[0.9rem] text-white'>
        <CountdownCondensed />
      </div>
</div>
  )
}

export default OtherActivities