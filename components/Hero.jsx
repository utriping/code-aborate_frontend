import Image from "next/image";
import React from "react";
import hero from "../public/assets/hero.png";
//chnage font to geist
const Hero = () => {
  //mere pointer ke hisaab se baaki pointer ka position change hoga, when mouse is over this section
  return (
    <section className="p-5">
      <div className="container mx-auto md:max-w-3xl items-center p-3 relative ">
        <div className="hidden lg:absolute top-15 -left-15 w-ull h-full z-0"></div>
        <Image src={hero} width={1000} height={800} className="mb-3"></Image>
        <p className="text-4xl md:text-3xl font-bold text-center text-[#B10F2E] mt-7 ">
          Code Together . Compete Together . Grow Together
          <span className="block">{`<Code-aborate>`}</span>
        </p>
        <p className="text-center text-lg mt-5 text-gray-800">
          Join friends, solve problems, track leaderboards, and grow together.
        </p>
      </div>
    </section>
  );
};

export default Hero;
