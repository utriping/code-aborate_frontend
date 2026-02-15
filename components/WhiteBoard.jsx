"use client";
import throttle from "@/lib/throttle.js";
import { MousePointer, Pointer, PointerIcon } from "lucide-react";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
const WhiteBoard = () => {
  const [cursorPosition, setCursorPosition] = useState(null);
  useEffect(() => {
    const whiteboard = document.querySelector(".whiteboard");
    const rect = whiteboard.getBoundingClientRect();
    const startingX = rect.width / 2;
    const startingY = rect.height / 2;
    setCursorPosition({ x: startingX, y: startingY });
  }, []);
  const handleMove = useMemo(
    () =>
      throttle((e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const randomX = Math.random() * rect.width;
        const randomY = Math.random() * rect.height;

        setCursorPosition({ x: randomX, y: randomY });
      }, 1000), // runs every 120ms
    [],
  );
  return (
    <section className="mt-20 p-7 md:p-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mt-10 p-5 flex justify-center items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#B10F2E] mb-5 text-center">
              Whiteboard
            </h2>
            <p className="text-[#B10F2E] text-3xl md:text-4xl text-center mb-5 mt-10">
              Think, plan, and solve together in real time. Sketch ideas, design
              systems, and break down problems visually with your friends.
            </p>
          </div>
        </div>
        <div className="leaderboard mx-auto ">
          <div className="h-80 w-85 md:w-140 h-120 bg-[#B10F2E] rounded-lg p-2">
            <div
              className="whiteboard relative bg-[#f3dfc1] w-full h-full"
              onMouseMove={handleMove}
              onMouseLeave={(e) => setCursorPosition({})}
            >
              {cursorPosition && (
                <div
                  className="transition-all ease-in-out duration-1000 absolute w-5 h-5 font-sans text-black text-lg flex items-end justify-center"
                  style={{
                    left: cursorPosition.x - 15,
                    top: cursorPosition.y - 15,
                  }}
                >
                  <MousePointer className="absolute w-12 h-12 text-[#B10F2E] pointer-events-none" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteBoard;
