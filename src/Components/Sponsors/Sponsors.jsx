import { useEffect } from "react";
import CountdownCondensed from "../Countdown/CountdownCondensed";
import SponsorCTA from "./SponsorCTA";
import LogoMarquee from "./LogoMarquee";
import OurSponsors from "./OurSponsors";

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <div>
        <OurSponsors />
      </div>

      <div>
        <LogoMarquee />
      </div>

      <div className="h-screen flex justify-center items-center">
        <SponsorCTA />
      </div>

      <div className="fixed m-[2rem] bottom-0 right-0 bg-accent rounded p-[0.9rem] text-white">
        <CountdownCondensed />
      </div>
    </>
  );
};

export default Sponsors;
