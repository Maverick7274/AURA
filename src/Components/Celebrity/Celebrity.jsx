import Cards1 from "../Cards1"

function Celebrity() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <div>
            <h1 className="mb-5 pt-[5rem] px-[3rem] min-[280px]:text-[2rem] sm:text-[4rem] text-[3rem] font-bold font-rubik text-center">Celebrity</h1>
        </div>
        <div>
            <p className="font-space-grotesk">
                These are our celebrities 
            </p>
        </div>
        <div className="py-[3rem] flex flex-wrap justify-center items-center gap-[1rem]">
            <Cards1 Heading="Salman-Zaman" paragraph="'Sufi Rock Duo'" cover="https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/315942690_10166820622830567_4476046263147174774_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ErvqJd858iwAX9FJKXD&_nc_oc=AQmAdtQm9FFgtLCW0MdmCQ6TUFCS9lqR4_skfABVsmPOMnERgrA59ULmoKfDeGA6oRVcpdZ0oDleyt3ndvs2wdkb&_nc_ht=scontent.fdel1-2.fna&oh=00_AfDO1eP57Na7S8zmp6K4Oabt-Lpwa344_oCfygCy1BB2NA&oe=6501F57C" linkHeading="Instagram" link="https://www.instagram.com/salmanzamanmusic/"/>
            {/* <Cards1 Heading="Surprise" cover="https://www.freepnglogos.com/uploads/question-mark-png/big-question-mark-makgeolli-mamas-papas-27.png"/> */}
            <Cards1 Heading="Switchers" paragraph="DJ" cover="https://gogomagazine.in/wp-content/uploads/2021/08/236443245_1828745917330374_8397417113764531322_n.jpg.webp" linkHeading="Instagram" link="https://www.instagram.com/switchersmusic/"/>
        </div>

    </div>
  )
}

export default Celebrity