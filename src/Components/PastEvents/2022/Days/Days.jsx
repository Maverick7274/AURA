import ButtonComponent from "../../../ButtonComponent"
import Breadcrumbs from "../../../Breadcrumbs"
import CountdownCondensed from "../../../Countdown/CountdownCondensed"

function Days() {
  return (
    <div className='h-auto flex flex-col justify-center items-center gap-[5rem]'>
        <div className="mt-[6rem]">
            <Breadcrumbs link1="/PastYearEvents" currentLink="/AURA2022Days" link1Name="Past Year Events" link2Name="AURA 2022" currentLinkName="Days"/>
        </div>
        <div className=''>
            <div className=''>
                <h1 className='sm:text-[4rem] text-[3rem] font-rubik font-[700] text-center'>
                    Days
                </h1>
            </div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-[3rem] sm:flex-row md:flex-col xl:flex-row'>
          <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1686746572/cover2022_u4zre2.jpg" link="/Highlights2022Day1" Heading='Day 1'/>
          <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1687031171/Day_2_Showcase_22_hiyd3y.jpg" link="/Highlights2022Day2" Heading='Day 2'/>
        </div>
        {/* <div className='sticky m-[2rem] bottom-15 right-0 bg-accent rounded p-[0.9rem] text-white'>
        <CountdownCondensed />
      </div> */}
    </div>
  )
}

export default Days