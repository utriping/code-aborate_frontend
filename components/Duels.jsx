import React from "react";
import duel from "../public/assets/duel.png";
import Image from "next/image";
const Duels = () => {
  return (
    <section className="mt-30 p-10 md:p-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Image src={duel} alt='duel image'/>
        <div className="mt-5 p-5 flex justify-center items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#B10F2E] mb-5 text-center">
              Duel
            </h2>
            <p className="text-[#B10F2E] text-3xl md:text-4xl text-center mb-5 mt-10">
              Challenge your friends to 1v1 coding battles, solve problems under pressure, and climb the leaderboard. Speed, accuracy, and strategy decide the winner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Duels;
