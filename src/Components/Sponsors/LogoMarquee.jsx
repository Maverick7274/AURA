import ButtonComponent from "../ButtonComponent";
import FM from "../../assets/FM.svg";
import Recology_Logo from "../../assets/Recology_Logo.svg";
import ARTKONNECT_LOGO from "../../assets/ARTKONNECT_LOGO.svg";

function LogoMarquee() {
  return (
    <div className="">
      <div className="py-[2rem]">
        <h1 className=" text-center min-[280px]:text-[1.7rem] sm:text-[4rem] text-[2rem] font-bold font-rubik">Our Past Sponsors</h1>
      </div>
      <div
        id="vision"
        className="flex flex-wrap justify-center items-center gap-[1rem]"
      >

        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/Dee_hand_factory_c8gf0u.jpg" Heading='Dee Hand Factory'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/BK_BKAMogos_mco6fl.png" Heading='Blossom Kochhar'/>
        <ButtonComponent cover="https://res.cloudinary.com/djqnbowat/image/upload/v1691699909/Apollo_zk0xqg.jpg" Heading='Apollo Hospital'/>
        <ButtonComponent cover={FM} Heading='Red FM'/>
        <ButtonComponent cover={Recology_Logo} Heading='Recology'/>
        <ButtonComponent cover={ARTKONNECT_LOGO} Heading='Art Konnect'/>


        {/* <span>
          <img
            className="w-[10rem]"
            src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/Dee_hand_factory_c8gf0u.jpg"
          />
        </span>
        <span>
          <img
            className="w-[10rem]"
            src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699489/BK_BKAMogos_mco6fl.png"
          />
        </span>
        <span>
          <img
            className="w-[10rem]"
            src="https://res.cloudinary.com/djqnbowat/image/upload/v1691699909/Apollo_zk0xqg.jpg"
          />
        </span>
        <span>
          <img className="w-[10rem]" src={FM} />
        </span>
        <span>
          <img className="w-[10rem]" src={Recology_Logo} />
        </span>
        <span>
          <img className="w-[10rem]" src={ARTKONNECT_LOGO} />
        </span> */}
      </div>
    </div>
  );
}

export default LogoMarquee;
