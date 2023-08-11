import FM from "../../assets/FM.svg";
import Recology_Logo from "../../assets/Recology_Logo.svg";
import ARTKONNECT_LOGO from "../../assets/ARTKONNECT_LOGO.svg";

function LogoMarquee() {
  return (
    <div className="">
      {/* <div id="vision" className="flex flex-col justify-center items-center gap-[1rem] bg-gradient-to-r from-accent via-info via-primary via-secondary to-success"> */}
      <div
        id="vision"
        className="flex flex-col justify-center items-center gap-[1rem] bg-[#fff]"
      >
        <div className="relative overflow-x-hidden">
          <div className="sm:py-12 py-[1rem] animate-marquee whitespace-nowrap flex justify-center items-center gap-[1rem]">
            <span>
              <img
                className="w-[300rem]"
                src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/Dee_hand_factory_c8gf0u.jpg"
              />
            </span>
            <span>
              <img
                className="w-[300rem]"
                src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/BK_BKAMogos_mco6fl.png"
              />
            </span>
            <span>
              <img
                className="w-[300rem]"
                src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699909/Apollo_zk0xqg.jpg"
              />
            </span>
            <span>
              <img className="w-[300rem]" src={FM} />
            </span>
            <span>
              <img className="w-[300rem]" src={Recology_Logo} />
            </span>
            <span>
              <img className="w-[300rem]" src={ARTKONNECT_LOGO} />
            </span>
            {/* <span><img src={}/></span> */}
          </div>

          <div className="absolute top-0 sm:py-12 py-[1rem] animate-marquee2 whitespace-nowrap flex justify-center items-center gap-[1rem]">
            <span>
              <img
                className="w-[300rem]"
                src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/Dee_hand_factory_c8gf0u.jpg"
              />
            </span>
            <span>
              <img
                className="w-[300rem]"
                src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/BK_BKAMogos_mco6fl.png"
              />
            </span>
            <span>
              <img
                className="w-[300rem]"
                src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699909/Apollo_zk0xqg.jpg"
              />
            </span>
            <span>
              <img className="w-[300rem]" src={FM} />
            </span>
            <span>
              <img className="w-[300rem]" src={Recology_Logo} />
            </span>
            <span>
              <img className="w-[300rem]" src={ARTKONNECT_LOGO} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoMarquee;
