import FM from "../../assets/FM.svg"; 
import Recology_Logo from "../../assets/Recology_Logo.svg";
import ARTKONNECT_LOGO from "../../assets/ARTKONNECT_LOGO.svg";


function LogoMarquee() {
  return (
    <div className="">
      <div id="vision" className="flex flex-col justify-center items-center gap-[1rem] bg-secondary">
        <div className="relative overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap flex justify-center items-center gap-[1rem]">
            <span className="mix-blend-multiply">
                <img src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/Dee_hand_factory_c8gf0u.jpg" />
            </span>
            <span className="mix-blend-multiply">
                <img src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/BK_BKAMogos_mco6fl.png" />
            </span>
            <span className="mix-blend-multiply">
                <img src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699909/Apollo_zk0xqg.jpg" />
            </span>
            <span><img src={FM} /></span>
            <span><img src={Recology_Logo}/></span>
            <span><img src={ARTKONNECT_LOGO}/></span>
            {/* <span><img src={}/></span> */}
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex justify-center items-center gap-[1rem]">
            <span className="mix-blend-multiply">
                <img src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/Dee_hand_factory_c8gf0u.jpg" />
            </span>
            <span className="mix-blend-multiply">
                <img src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/BK_BKAMogos_mco6fl.png" />
            </span>
            <span className="mix-blend-multiply">
                <img src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699909/Apollo_zk0xqg.jpg" />
            </span>
            <span><img src={FM} /></span>
            <span><img src={Recology_Logo}/></span>
            <span><img src={ARTKONNECT_LOGO}/></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoMarquee;
