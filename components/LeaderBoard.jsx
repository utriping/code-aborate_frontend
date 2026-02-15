import React from "react";

const LeaderBoard = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };
  const users = [
    { name: "Anmol", points: 150 },
    { name: "Rohit", points: 120 },
    { name: "Sanya", points: 100 },
    { name: "Priya", points: 80 },
    { name: "Amit", points: 60 },
  ];
  return (
    <section className="mt-20 p-7 md:p-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="leaderboard mx-auto">
          <div className="h-80 flex items-end w-1 md:h-120 bg-[#B10F2E]">
            <div className="inline-flex gap-1 items-end">
              <div className="w-20 h-40 md:h-80 m-4 mb-0 md:m-10 md:mb-0 bg-[#B10F2E]"></div>
              <div className="w-20 h-60 md:h-100 m-4 mb-0 md:m-10 md:mb-0 bg-[#B10F2E]"></div>
              <div className="w-20 h-20 md:h-40 m-4 mb-0 md:m-10 md:mb-0 bg-[#B10F2E]"></div>
            </div>
          </div>
          <div className="w-85 md:w-120 h-1 bg-[#B10F2E]"></div>
        </div>
        <div className="mt-10 p-5 flex justify-center items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#B10F2E] mb-5 text-center">
              Leaderboard
            </h2>
            <p className="text-[#B10F2E] text-3xl md:text-4xl text-center mb-5 mt-10">
              See how you rank among your friends, stay motivated, and turn
              daily practice into friendly competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
